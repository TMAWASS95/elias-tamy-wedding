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
      <div className="cover-bg" />
      <div className="cover-overlay" />

      {/* Ambient pulse ring behind the monogram */}
      <div className="cover-pulse-ring" />

      {/* Centered initials */}
      <div className="cover-initials">
        <span className="cover-init-letter">{groom[0]}</span>
        <span className="cover-init-heart">♥</span>
        <span className="cover-init-letter">{bride[0]}</span>
      </div>

      {/* Bottom: logo + date + tap hint */}
      <div className="cover-names-bottom">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt={`${groom} & ${bride}`}
          className="couple-logo couple-logo--cover"
        />
        <span className="cover-date-label">{dateLabel}</span>
      </div>
    </div>
  );
}
