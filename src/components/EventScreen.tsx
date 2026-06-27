import type { JSX } from "react";
import type { WeddingEvent } from "../data";

interface EventScreenProps {
  onContinue: () => void;
  event: WeddingEvent;
}

function MapPinIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 14 18" fill="currentColor" style={{ opacity: 0.7 }}>
      <path d="M7 0C3.69 0 1 2.69 1 6c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S5.62 3.5 7 3.5 9.5 4.62 9.5 6 8.38 8.5 7 8.5z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 26 L22 8 L40 26" />
      <rect x="6" y="26" width="32" height="22" rx="1" />
      <rect x="15" y="36" width="13" height="12" rx="1" />
    </svg>
  );
}

function ChurchIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="0" x2="22" y2="11" />
      <line x1="17" y1="5" x2="27" y2="5" />
      <path d="M6 23 L22 11 L38 23" />
      <rect x="6" y="23" width="32" height="31" />
      <path d="M14 54 L14 40 Q22 35 30 40 L30 54" />
      <rect x="8" y="27" width="7" height="9" rx="3.5" />
      <rect x="29" y="27" width="7" height="9" rx="3.5" />
    </svg>
  );
}

function DrinkIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 7 L17 7 L14 24 Z" />
      <line x1="14" y1="24" x2="14" y2="40" />
      <line x1="9"  y1="40" x2="19" y2="40" />
      <path d="M27 7 L33 7 L30 24 Z" />
      <line x1="30" y1="24" x2="30" y2="40" />
      <line x1="25" y1="40" x2="35" y2="40" />
      <path d="M15 12 Q22 16 29 12" strokeWidth="1" opacity="0.65" />
    </svg>
  );
}

function ArchIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Alyasa Village — three concentric arches */}
      <path d="M8 50 L8 24 Q8 8 22 8 Q36 8 36 24 L36 50" />
      <path d="M13.5 50 L13.5 26 Q13.5 14 22 14 Q30.5 14 30.5 26 L30.5 50" />
      <path d="M19 50 L19 28 Q19 20 22 20 Q25 20 25 28 L25 50" />
    </svg>
  );
}

function DinnerIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 32 Q5 12 22 12 Q39 12 39 32" />
      <line x1="3" y1="32" x2="41" y2="32" />
      <line x1="22" y1="4" x2="22" y2="12" />
      <line x1="15" y1="4" x2="29" y2="4" />
      <ellipse cx="22" cy="44" rx="15" ry="3" opacity="0.6" />
    </svg>
  );
}

const iconMap: Record<string, JSX.Element> = {
  home:    <HomeIcon />,
  church:  <ChurchIcon />,
  drink:   <DrinkIcon />,
  dinner:  <DinnerIcon />,
  arch:    <ArchIcon />,
};

export default function EventScreen({ onContinue: _onContinue, event }: EventScreenProps) {
  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="evt-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">{event.title}</span>
          <div className="lum-line" />
        </div>

        {event.description && (
          <p className="lum-body lum-body--muted evt-description">{event.description}</p>
        )}

        <div className="glass-card">
          {event.parties ? (
            <div className="evt-parties">
              {event.parties.map((party) => (
                <div className="evt-row" key={party.label}>
                  <div className="evt-row-icon">{iconMap[event.icon]}</div>
                  <div className="evt-row-details">
                    <span className="evt-row-label">{party.label}</span>
                    <span className="evt-row-name">{party.name}</span>
                    {party.sub  && <span className="evt-row-sub">{party.sub}</span>}
                    {party.time && <span className="evt-row-sub">{party.time}</span>}
                    {party.mapUrl && (
                      <a
                        className="evt-directions"
                        href={party.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPinIcon /> Get Directions
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="evt-row">
              <div className="evt-row-icon">{iconMap[event.icon]}</div>
              <div className="evt-row-details">
                <span className="evt-row-name">{event.name}</span>
                {event.sub     && <span className="evt-row-sub">{event.sub}</span>}
                {event.time    && <span className="evt-row-sub">{event.time}</span>}
                {event.address && <span className="evt-row-sub">{event.address}</span>}
                {event.mapUrl  && (
                  <a
                    className="evt-directions"
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPinIcon /> Get Directions
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
