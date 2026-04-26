import { useState, useRef, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Cover from "./components/Cover";
import Invitation from "./components/Invitation";
import Invitation2 from "./components/Invitation2";
import EventScreen from "./components/EventScreen";
import TimelineScreen from "./components/TimelineScreen";
import GiftRegistryScreen from "./components/GiftRegistryScreen";
import CountdownScreen from "./components/CountdownScreen";
import RSVPScreen from "./components/RSVPScreen";
import { guests, type GuestEntry } from "./data";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YT_VIDEO_ID  = "zcdMC_VScUE";
const BG_FADE_MS   = 600;
const CONTENT_HALF = 220;

type Phase = "cover" | "invitation2" | "invitation" | "eventscreen" | "timeline" | "giftregistry" | "countdown" | "rsvp" | "main";

const PHASES: Phase[] = [
  "cover", "invitation2", "invitation", "eventscreen",
  "timeline", "giftregistry", "countdown", "rsvp",
];

const PHASE_IMAGES: Record<Phase, string> = {
  cover:        "/couple.png",
  invitation2:  "/img2.jpg",
  invitation:   "/DAS 2148.jpg",
  eventscreen:  "/DAS 2168.jpg",
  timeline:     "/DAS 2174.jpg",
  giftregistry: "/DAS 2180.jpg",
  countdown:    "/DAS 2190.jpg",
  rsvp:         "/img2.jpg",
  main:         "/couple.png",
};

function Wedding({ guest }: { guest: GuestEntry | null }) {
  const [phase, setPhase]                   = useState<Phase>("cover");
  const [contentOpacity, setContentOpacity] = useState(1);
  const [musicOn, setMusicOn]               = useState(false);

  // Two permanent bg layers — we never add/remove them, just update styles directly
  const layerARef  = useRef<HTMLDivElement>(null);
  const layerBRef  = useRef<HTMLDivElement>(null);
  const topLayer   = useRef<"A" | "B">("A"); // which layer is currently visible

  const playerRef   = useRef<any>(null);
  const phaseRef    = useRef<Phase>("cover");
  const touchStartY = useRef(0);
  const swiped      = useRef(false);
  const transitioning = useRef(false);

  const crossfadeBg = (newImage: string) => {
    const elA = layerARef.current!;
    const elB = layerBRef.current!;
    const incoming = topLayer.current === "A" ? elB : elA;
    const outgoing  = topLayer.current === "A" ? elA : elB;

    // Prepare incoming layer: set image, disable transition, force opacity 0
    incoming.style.transition = "none";
    incoming.style.backgroundImage = `url('${newImage}')`;
    incoming.style.opacity = "0";
    incoming.offsetHeight; // force reflow so transition kicks in next

    // Crossfade
    incoming.style.transition = `opacity ${BG_FADE_MS}ms ease`;
    outgoing.style.transition  = `opacity ${BG_FADE_MS}ms ease`;
    incoming.style.opacity = "1";
    outgoing.style.opacity  = "0";

    topLayer.current = topLayer.current === "A" ? "B" : "A";
  };

  const setPhaseSync = (next: Phase) => {
    if (transitioning.current) return;
    transitioning.current = true;
    phaseRef.current = next;

    crossfadeBg(PHASE_IMAGES[next]);
    setContentOpacity(0);

    setTimeout(() => {
      setPhase(next);
      setContentOpacity(1);
    }, CONTENT_HALF);

    setTimeout(() => { transitioning.current = false; }, BG_FADE_MS + 50);
  };

  // YouTube IFrame API — container lives outside React's DOM tree so the
  // iframe replacement by the YT API never invalidates React's node references
  useEffect(() => {
    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;pointer-events:none;";
    document.body.appendChild(container);

    const initPlayer = () => {
      playerRef.current = new window.YT.Player(container, {
        videoId: YT_VIDEO_ID,
        playerVars: { loop: 1, playlist: YT_VIDEO_ID, controls: 0, playsinline: 1 },
        events: { onReady: () => {} },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
    }

    return () => {
      playerRef.current?.destroy?.();
      document.body.removeChild(container);
    };
  }, []);

  const toggleMusic = () => {
    const p = playerRef.current;
    if (!p) return;
    musicOn ? p.pauseVideo() : p.playVideo();
    setMusicOn(m => !m);
  };

  // Global swipe
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; swiped.current = false; };
    const onTouchEnd   = (e: TouchEvent) => {
      if (swiped.current || phaseRef.current === "main") return;
      const dy  = touchStartY.current - e.changedTouches[0].clientY;
      const idx = PHASES.indexOf(phaseRef.current);
      if      (dy >  60) { swiped.current = true; const n = PHASES[idx + 1]; if (n) setPhaseSync(n); }
      else if (dy < -60) { swiped.current = true; const p = PHASES[idx - 1]; if (p) setPhaseSync(p); }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend",   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const goNext = () => { const n = PHASES[PHASES.indexOf(phaseRef.current) + 1]; if (n) setPhaseSync(n); };

  const screenNode = (() => {
    switch (phase) {
      case "cover":        return <Cover              onStart={goNext} />;
      case "invitation2":  return <Invitation2        onContinue={goNext} />;
      case "invitation":   return <Invitation         onContinue={goNext} />;
      case "eventscreen":  return <EventScreen        onContinue={goNext} />;
      case "timeline":     return <TimelineScreen     onContinue={goNext} />;
      case "giftregistry": return <GiftRegistryScreen onContinue={goNext} />;
      case "countdown":    return <CountdownScreen    onContinue={goNext} />;
      case "rsvp":         return <RSVPScreen onContinue={() => setPhaseSync("main")} guestName={guest?.name} maxGuests={guest?.maxGuests} />;
      default:             return <main />;
    }
  })();

  return (
    <div style={{ height: "100dvh", overflow: "hidden", background: "#0d0605" }}>

      {/* Two permanent bg layers — crossfaded via direct DOM style updates, never added/removed */}
      <div ref={layerARef} className="app-global-bg" style={{ backgroundImage: `url('${PHASE_IMAGES["cover"]}')`, opacity: 1 }} />
      <div ref={layerBRef} className="app-global-bg" style={{ backgroundImage: `url('${PHASE_IMAGES["cover"]}')`, opacity: 0 }} />

      {/* Persistent music button */}
      <button className="music-btn" onClick={toggleMusic} aria-label="Toggle music">
        {musicOn ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4a44c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#d4a44c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      {/* Screen content — fades out/in around the phase swap */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: contentOpacity, transition: `opacity ${CONTENT_HALF}ms ease` }}>
        {screenNode}
      </div>

    </div>
  );
}

function GuestRoute() {
  const { slug } = useParams<{ slug: string }>();
  const guest = guests.find((g) => g.slug === slug) ?? null;
  return <Wedding guest={guest} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/"      element={<Wedding guest={null} />} />
      <Route path="/:slug" element={<GuestRoute />} />
    </Routes>
  );
}
