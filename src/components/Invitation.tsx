import { wedding } from "../data";

interface InvitationProps {
  onContinue: () => void;
}

export default function Invitation({ onContinue: _onContinue }: InvitationProps) {
  const d = new Date(wedding.date);
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
  const month   = d.toLocaleDateString("en-US", { month: "long" });
  const day     = d.getDate();
  const year    = d.getFullYear();

  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="lum-content lum-content--center">
        <div className="lum-line" />
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt={`${wedding.groom} & ${wedding.bride}`}
          className="couple-logo couple-logo--invite"
        />
        <div className="lum-line" />
        <p className="lum-date">
          {weekday}, {month} {day}, {year}
        </p>
      </div>
    </div>
  );
}
