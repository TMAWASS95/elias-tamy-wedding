import { wedding } from "../data";
import ScrollIndicator from "./ScrollIndicator";

interface TimelineScreenProps {
  onContinue: () => void;
}


function ChurchIcon() {
  return (
    <svg className="tl-icon-svg" viewBox="0 0 40 44" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="20" y1="0" x2="20" y2="9" />
      <line x1="15" y1="4" x2="25" y2="4" />
      <path d="M4 18 L20 8 L36 18" />
      <rect x="4" y="18" width="32" height="24" />
      <path d="M12 42 L12 31 Q20 27 28 31 L28 42" />
      <rect x="6" y="21" width="7" height="8" rx="3.5" />
      <rect x="27" y="21" width="7" height="8" rx="3.5" />
    </svg>
  );
}

function GlassesIcon() {
  return (
    <svg className="tl-icon-svg" viewBox="0 0 40 44" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4 L10 26 Q10 32 15 32 Q20 32 20 26 L17 4" />
      <path d="M23 4 L20 26 Q20 32 25 32 Q30 32 30 26 L34 4" />
      <line x1="15" y1="32" x2="13" y2="42" />
      <line x1="7" y1="42" x2="19" y2="42" />
      <line x1="25" y1="32" x2="27" y2="42" />
      <line x1="21" y1="42" x2="33" y2="42" />
      <line x1="18" y1="9" x2="22" y2="13" strokeWidth="1.5" />
    </svg>
  );
}

function PlateIcon() {
  return (
    <svg className="tl-icon-svg" viewBox="0 0 40 44" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="24" r="14" />
      <circle cx="20" cy="24" r="9" strokeWidth="1" />
      {/* fork */}
      <line x1="4" y1="7" x2="4" y2="38" />
      <line x1="2" y1="7" x2="2" y2="15" />
      <line x1="6" y1="7" x2="6" y2="15" />
      <path d="M2 15 Q4 18 6 15" />
      {/* knife */}
      <line x1="36" y1="7" x2="36" y2="38" />
      <path d="M34 7 Q38 11 36 19" />
    </svg>
  );
}

function CocktailIcon() {
  return (
    <svg className="tl-icon-svg" viewBox="0 0 40 44" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5 L20 26 L36 5 Z" />
      <line x1="20" y1="26" x2="20" y2="38" />
      <line x1="11" y1="38" x2="29" y2="38" />
      <circle cx="31" cy="7" r="3" fill="white" stroke="none" />
      <line x1="31" y1="4" x2="28" y2="1" strokeLinecap="round" />
    </svg>
  );
}

function DanceIcon() {
  return (
    <svg className="tl-icon-svg" viewBox="0 0 44 44" fill="none" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Woman */}
      <circle cx="13" cy="5" r="4" />
      <path d="M13 9 L8 19 L13 32 L18 19 Z" />
      <line x1="9" y1="14" x2="4" y2="18" />
      <line x1="17" y1="13" x2="23" y2="9" />
      {/* Man */}
      <circle cx="31" cy="5" r="4" />
      <line x1="31" y1="9" x2="31" y2="26" />
      <line x1="31" y1="14" x2="23" y2="9" />
      <line x1="31" y1="15" x2="37" y2="19" />
      <line x1="31" y1="26" x2="27" y2="38" />
      <line x1="31" y1="26" x2="36" y2="36" />
    </svg>
  );
}

const timelineIcons = [
  <ChurchIcon />,
  <GlassesIcon />,
  <PlateIcon />,
  <CocktailIcon />,
  <DanceIcon />,
];

export default function TimelineScreen({ onContinue }: TimelineScreenProps) {
  return (
    <div className="cover-screen">
      <div className="cover-bg" />
      <div className="cover-overlay evt-overlay" />

      <div className="tl-content">
        <div className="evt-header">
          <span className="evt-the">the</span>
          <span className="evt-celebration">Timeline</span>
        </div>

        <div className="tl-timeline">
          <div className="tl-vline" />
          {wedding.timeline.map((item, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-icon-col">{timelineIcons[i]}</div>
              <div className="tl-dot-col">
                <div className="tl-dot" />
              </div>
              <div className="tl-text-col">
                <span className="tl-event-name">{item.event}</span>
                <span className="tl-event-time">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScrollIndicator onClick={onContinue} />
    </div>
  );
}
