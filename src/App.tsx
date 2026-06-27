import { useRef, useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import CoverHero from "./components/CoverHero";
import Cover from "./components/Cover";
import EventScreen from "./components/EventScreen";
import CountdownScreen from "./components/CountdownScreen";
import GiftRegistryScreen from "./components/GiftRegistryScreen";
import RSVPScreen from "./components/RSVPScreen";
import AdminDashboard from "./components/AdminDashboard";
import ETRoute from "./components/ETRoute";
import { guests, weddingEvents, formatGuestName, type GuestEntry } from "./data";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YT_VIDEO_ID = "zcdMC_VScUE";

const SECTION_IMAGES: (string | null)[] = [
  import.meta.env.BASE_URL + "img2.jpg",        // Hero (ET + date)
  import.meta.env.BASE_URL + "DAS couple.jpg",  // Cover (intro)
  import.meta.env.BASE_URL + "DAS 2148.jpg",    // Getting Ready
  import.meta.env.BASE_URL + "DAS 2168.jpg",    // Ceremony
  import.meta.env.BASE_URL + "DAS 2180.jpg",    // Dinner
  import.meta.env.BASE_URL + "DAS 2270.jpg",    // Countdown
  import.meta.env.BASE_URL + "couple.png",      // Gift Registry
  import.meta.env.BASE_URL + "DAS 2268.jpg",    // RSVP
];

function Wedding({ guest, slug }: { guest: GuestEntry | null; slug?: string }) {
  const [musicOn, setMusicOn] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const playerRef        = useRef<any>(null);
  const sectionRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const snapContainerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  // YouTube IFrame API
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

  // Track visible section → add .in-view class for entrance animations
  useEffect(() => {
    const container = snapContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setCurrentSection(idx);
          }
        });
      },
      { threshold: 0.5, root: container }
    );

    const refs = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    refs.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const toggleMusic = () => {
    const p = playerRef.current;
    if (!p) return;
    musicOn ? p.pauseVideo() : p.playVideo();
    setMusicOn(m => !m);
  };

  const screens = [
    <CoverHero       onStart={()    => scrollTo(1)} />,
    <Cover           onStart={()    => scrollTo(2)} />,
    <EventScreen     onContinue={() => scrollTo(3)} event={weddingEvents[0]} />,
    <EventScreen     onContinue={() => scrollTo(4)} event={weddingEvents[1]} />,
    <EventScreen     onContinue={() => scrollTo(5)} event={weddingEvents[2]} />,
    <CountdownScreen onContinue={() => scrollTo(6)} />,
    <GiftRegistryScreen onContinue={() => scrollTo(7)} />,
    <RSVPScreen      onContinue={() => {}}
                     guestName={guest ? formatGuestName(guest) : undefined}
                     maxGuests={guest?.maxGuests}
                     slug={slug} />,
  ];

  return (
    <div style={{ height: "100dvh", overflow: "hidden", background: "#0d0605" }}>

      {/* Persistent music button */}
      <button className="music-btn" onClick={toggleMusic} aria-label="Toggle music">
        {musicOn ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a44c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4a44c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      {/* Section navigation dots */}
      <div className="nav-dots">
        {screens.map((_, i) => (
          <button
            key={i}
            className={`nav-dot${currentSection === i ? " active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Snap scroll container */}
      <div className="snap-container" ref={snapContainerRef}>
        {screens.map((screen, i) => (
          <div
            key={i}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="snap-section"
            style={SECTION_IMAGES[i] ? { backgroundImage: `url('${SECTION_IMAGES[i]}')` } : {}}
          >
            {screen}
            {i < screens.length - 1 && (
              <button
                className="scroll-hint"
                onClick={() => scrollTo(i + 1)}
                aria-label="Scroll to next section"
              >
                <svg width="22" height="13" viewBox="0 0 22 13" fill="none">
                  <polyline
                    points="2,2 11,11 20,2"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
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
      <Route path="/et"      element={<ETRoute />} />
      <Route path="/:slug"   element={<GuestRoute />} />
    </Routes>
  );
}
