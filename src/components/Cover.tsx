import { wedding } from "../data";

interface CoverProps {
  onStart: () => void;
}

export default function Cover({ onStart }: CoverProps) {
  const { groom, bride, date } = wedding;
  const dateLabel = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="cover-screen" onClick={onStart} style={{ cursor: "pointer" }}>
      {/* Static background only (no video on load) */}
      <div className="cover-bg" />

      <div className="cover-overlay" />

      {/* Centered initials */}
      <div className="cover-initials">
        <span className="cover-init-letter">{groom[0]}</span>
        <span className="cover-init-heart">♥</span>
        <span className="cover-init-letter">{bride[0]}</span>
      </div>

      {/* Bottom: couple name + date */}
      <div className="cover-names-bottom">
        <span className="cover-couple-name">
          {groom} &amp; {bride}
        </span>
        <span className="cover-date-label">{dateLabel}</span>
      </div>
    </div>
  );
}
