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

  const ordinal = (n: number) => {
    const s = ["th","st","nd","rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] ?? s[v] ?? s[0]);
  };

  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="lum-content lum-content--center">
        <div className="lum-line" />
        <p className="lum-couple-name">{wedding.groom} &amp; {wedding.bride}</p>
        <div className="lum-line" />
        <p className="lum-date">
          {weekday}, {month} {ordinal(day)}, {year}
        </p>
      </div>
    </div>
  );
}
