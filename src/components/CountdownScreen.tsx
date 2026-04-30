import { useState, useEffect } from "react";
import { wedding } from "../data";

interface CountdownScreenProps {
  onContinue: () => void;
}

function getTimeLeft() {
  const diff = new Date(wedding.date).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownScreen({ onContinue: _onContinue }: CountdownScreenProps) {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days,    label: "Days" },
    { value: time.hours,   label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="lum-content lum-content--center">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">Counting Down</span>
          <div className="lum-line" />
        </div>

        <div className="cd-units">
          {units.map(({ value, label }) => (
            <div className="cd-unit" key={label}>
              <span className="cd-number">{value}</span>
              <span className="cd-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
