import { wedding } from "../data";

interface Invitation2Props {
  onContinue: () => void;
}

function CrossIcon() {
  return (
    <svg className="cross-icon" viewBox="0 0 40 56" fill="none">
      <rect x="17" y="0"  width="6" height="56" rx="2" fill="white" />
      <rect x="0"  y="14" width="40" height="6"  rx="2" fill="white" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg className="chevron-up" viewBox="0 0 40 24" fill="none">
      <polyline points="2,20 20,4 38,20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="2,14 20,4 38,14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

export default function Invitation2({ onContinue }: Invitation2Props) {
  return (
    <div className="cover-screen">
      <div className="cover-bg" />
      <div className="cover-overlay inv-overlay" />

      <div className="inv2-content">
        <CrossIcon />

        <p className="inv2-verse">
          "For what God has joined together,{"\n"}
          let no man put asunder.."{"\n"}
          <span className="inv2-verse-ref">(Mark 9:10)</span>
        </p>

        <div className="inv2-families">
          <div className="inv2-family">
            <span className="inv2-family-name">{wedding.groom}</span>
            <span className="inv2-family-label">Family</span>
          </div>
          <div className="inv2-divider" />
          <div className="inv2-family">
            <span className="inv2-family-name">{wedding.bride}</span>
            <span className="inv2-family-label">Family</span>
          </div>
        </div>

        <p className="inv2-request">
          Request the honor of your presence to celebrate{"\n"}
          the wedding of their son and daughter
        </p>

        <div className="inv2-names-row">
          <span className="inv2-partner">{wedding.groom}</span>
          <span className="inv2-and">and</span>
          <span className="inv2-partner">{wedding.bride}</span>
        </div>
      </div>

      <button className="swipe-up-btn" onClick={onContinue}>
        <ChevronUp />
        <span>Swipe Up</span>
      </button>
    </div>
  );
}
