import { wedding } from "../data";

interface CoverHeroProps {
  onStart: () => void;
}

export default function CoverHero({ onStart }: CoverHeroProps) {
  const { groom, bride, date } = wedding;

  const dateLabel = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="cover-screen hero-screen" onClick={onStart} style={{ cursor: "pointer" }}>
      <div className="cover-overlay" />

      <div className="hero-content">
        <div className="hero-monogram">{groom[0]}{bride[0]}</div>
        <div className="hero-date">{dateLabel}</div>
      </div>
    </div>
  );
}
