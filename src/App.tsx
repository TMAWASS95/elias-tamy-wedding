import { useRef, useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Cover from "./components/Cover";
import Invitation from "./components/Invitation";
import Invitation2 from "./components/Invitation2";
import EventScreen from "./components/EventScreen";
import TimelineScreen from "./components/TimelineScreen";
import GiftRegistryScreen from "./components/GiftRegistryScreen";
import CountdownScreen from "./components/CountdownScreen";
import RSVPScreen from "./components/RSVPScreen";
import AdminDashboard from "./components/AdminDashboard";
import { guests, type GuestEntry } from "./data";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YT_VIDEO_ID = "zcdMC_VScUE";

// All sections use cover-sized background photos.
const SECTION_IMAGES: (string | null)[] = [
  import.meta.env.BASE_URL + "img2.jpg",
  import.meta.env.BASE_URL + "img2.jpg",
  import.meta.env.BASE_URL + "DAS 2148.jpg",
  import.meta.env.BASE_URL + "DAS 2168.jpg",
  import.meta.env.BASE_URL + "DAS 2174.jpg",
  import.meta.env.BASE_URL + "DAS 2180.jpg",
  import.meta.env.BASE_URL + "DAS couple.jpg",
  import.meta.env.BASE_URL + "img2.jpg",
];

function Wedding({ guest, slug }: { guest: GuestEntry | null; slug?: string }) {
  const [musicOn, setMusicOn] = useState(false);
  const playerRef    = useRef<any>(null);
  const sectionRefs  = useRef<(HTMLDivElement | null)[]>([]);

  const scrollTo = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  // YouTube IFrame API — container lives outside React's DOM tree
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

  const screens = [
    <Cover              onStart={()      => scrollTo(1)} />,
    <Invitation2        onContinue={()   => scrollTo(2)} />,
    <Invitation         onContinue={()   => scrollTo(3)} />,
    <EventScreen        onContinue={()   => scrollTo(4)} />,
    <TimelineScreen     onContinue={()   => scrollTo(5)} />,
    <GiftRegistryScreen onContinue={()   => scrollTo(6)} />,
    <CountdownScreen    onContinue={()   => scrollTo(7)} />,
    <RSVPScreen         onContinue={()   => {}}
                        guestName={guest?.name}
                        maxGuests={guest?.maxGuests}
                        slug={slug} />,
  ];

  return (
    <div style={{ height: "100dvh", overflow: "hidden", background: "#0d0605" }}>

      {/* Persistent music button — fixed to viewport, above all sections */}
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

      {/* Single scrollable page — all sections stacked, snapping per viewport height */}
      <div className="snap-container">
        {screens.map((screen, i) => (
          <div
            key={i}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="snap-section"
            style={SECTION_IMAGES[i] ? { backgroundImage: `url('${SECTION_IMAGES[i]}')` } : {}}
          >
            {screen}
          </div>
        ))}
      </div>

    </div>
  );
}

function GuestRoute() {
  const { slug } = useParams<{ slug: string }>();
  const guest = guests.find((g) => g.slug === slug);
  if (!guest) return null;
  return <Wedding guest={guest} slug={slug} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/"        element={null} />
      <Route path="/admin"   element={<AdminDashboard />} />
      <Route path="/:slug"   element={<GuestRoute />} />
    </Routes>
  );
}
