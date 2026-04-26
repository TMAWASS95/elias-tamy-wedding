import { wedding } from "../data";
import ScrollIndicator from "./ScrollIndicator";
import type { JSX } from "react";

interface EventScreenProps {
  onContinue: () => void;
}

function MapPinIcon() {
  return (
    <svg className="evt-pin-icon" viewBox="0 0 14 18" fill="white">
      <path d="M7 0C3.69 0 1 2.69 1 6c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S5.62 3.5 7 3.5 9.5 4.62 9.5 6 8.38 8.5 7 8.5z" />
    </svg>
  );
}


function BrideIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 36 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="7" r="5.5" />
      {/* veil */}
      <path d="M12 5 Q4 10 7 20" strokeWidth="1" opacity="0.75" />
      {/* dress */}
      <path d="M11 18 Q18 15 25 18 L30 54 L6 54 Z" />
      {/* waist */}
      <path d="M13 27 Q18 29 23 27" strokeWidth="1" />
    </svg>
  );
}

function GroomIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 36 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="7" r="5.5" />
      {/* jacket */}
      <path d="M10 18 L10 38 L26 38 L26 18 Q22 14 18 14 Q14 14 10 18Z" />
      {/* lapels */}
      <path d="M14 18 L18 24 L22 18" />
      {/* bow tie */}
      <path d="M15 21 L18 23 L21 21 L18 19 Z" fill="white" stroke="none" />
      {/* legs */}
      <line x1="13" y1="38" x2="11" y2="54" />
      <line x1="23" y1="38" x2="25" y2="54" />
      <line x1="9" y1="54" x2="15" y2="54" />
      <line x1="21" y1="54" x2="27" y2="54" />
    </svg>
  );
}

function ChurchIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* cross */}
      <line x1="22" y1="0" x2="22" y2="11" />
      <line x1="17" y1="5" x2="27" y2="5" />
      {/* roof */}
      <path d="M6 23 L22 11 L38 23" />
      {/* body */}
      <rect x="6" y="23" width="32" height="31" />
      {/* door arch */}
      <path d="M14 54 L14 40 Q22 35 30 40 L30 54" />
      {/* windows */}
      <rect x="8" y="27" width="7" height="9" rx="3.5" />
      <rect x="29" y="27" width="7" height="9" rx="3.5" />
    </svg>
  );
}

function GlassesIcon() {
  return (
    <svg className="evt-icon-svg" viewBox="0 0 44 58" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* left glass bowl */}
      <path d="M8 5 L12 32 Q12 38 17 38 Q22 38 22 32 L19 5" />
      {/* right glass bowl */}
      <path d="M25 5 L22 32 Q22 38 27 38 Q32 38 32 32 L36 5" />
      {/* left stem + base */}
      <line x1="17" y1="38" x2="15" y2="50" />
      <line x1="9" y1="50" x2="21" y2="50" />
      {/* right stem + base */}
      <line x1="27" y1="38" x2="29" y2="50" />
      <line x1="23" y1="50" x2="35" y2="50" />
      {/* clink */}
      <line x1="20" y1="11" x2="24" y2="15" strokeWidth="1.5" />
    </svg>
  );
}

const iconMap: Record<string, JSX.Element> = {
  bride:     <BrideIcon />,
  groom:     <GroomIcon />,
  church:    <ChurchIcon />,
  reception: <GlassesIcon />,
};

export default function EventScreen({ onContinue }: EventScreenProps) {
  return (
    <div className="cover-screen">
      <div className="cover-bg" />
      <div className="cover-overlay evt-overlay" />

      <div className="evt-content">
        <div className="evt-header">
          <span className="evt-the">the</span>
          <span className="evt-celebration">Celebration</span>
        </div>

        {wedding.locations.map((loc, i) => (
          <div key={loc.id} className="evt-item-wrap">
            <div className="evt-row">
              <div className="evt-row-icon">{iconMap[loc.id]}</div>
              <div className="evt-row-details">
                <span className="evt-row-name">{loc.name}</span>
                {loc.address && <span className="evt-row-sub">{loc.address}</span>}
                {loc.time    && <span className="evt-row-sub">{loc.time}</span>}
                <a
                  className="evt-directions"
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPinIcon /> Get Directions
                </a>
              </div>
            </div>
            {i < wedding.locations.length - 1 && <div className="evt-divider" />}
          </div>
        ))}
      </div>

      <ScrollIndicator onClick={onContinue} />
    </div>
  );
}
