import { wedding } from "../data";

interface InvitationProps {
  onContinue: () => void;
}

function HeartSvg() {
  return (
    <svg className="heart-svg" viewBox="0 0 80 74" fill="none">
      <path
        d="M40 67 C37 64 5 44 5 21 C5 10 14 3 25 3 C32 3 38 7 40 13 C42 7 48 3 55 3 C66 3 75 10 75 21 C75 44 43 64 40 67Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default function Invitation({ onContinue }: InvitationProps) {
  const weddingDate = new Date(wedding.date);
  const weekday = weddingDate.toLocaleDateString("en-US", { weekday: "long" });
  const month   = weddingDate.toLocaleDateString("en-US", { month: "long" });
  const day     = weddingDate.getDate();
  const year    = weddingDate.getFullYear();
  const time    = weddingDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

  return (
    <div className="cover-screen">
      <div className="cover-bg" />
      <div className="cover-overlay inv-overlay" />

      <div className="inv-content">
        <div className="we-do">
          <span className="we-do-word">WE</span>
          <HeartSvg />
          <span className="we-do-word">DO</span>
        </div>

        <p className="inv-together">TOGETHER WITH THEIR FAMILIES</p>

        <div className="inv-names-row">
          <span className="inv-partner">{wedding.groom}</span>
          <span className="inv-and">and</span>
          <span className="inv-partner">{wedding.bride}</span>
        </div>

        <p className="inv-invite">INVITE YOU</p>
        <p className="inv-invite">TO THEIR WEDDING CELEBRATION</p>

        <div className="inv-date-block">
          <span className="inv-month">{month}</span>
          <div className="inv-date-row">
            <span className="inv-weekday">{weekday}</span>
            <span className="inv-day-num">{day}</span>
            <span className="inv-time">At {time}</span>
          </div>
          <span className="inv-year">{year}</span>
        </div>
      </div>

      <button className="swipe-up-btn" onClick={onContinue}>
        <ChevronUp />
        <span>Swipe Up</span>
      </button>
    </div>
  );
}
