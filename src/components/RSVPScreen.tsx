import { useState, useRef, useEffect } from "react";

interface RSVPScreenProps {
  onContinue: () => void;
  guestName?: string;
  maxGuests?: number;
}

interface SelectOption { label: string; value: string; }

function CustomSelect({ label, value, onChange, options }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div className="rsvp-field" ref={ref}>
      <span className="rsvp-select-label">{label}</span>
      <button
        type="button"
        className={`rsvp-custom-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{selected?.label ?? value}</span>
        <svg className={`rsvp-custom-chevron ${open ? "flipped" : ""}`} viewBox="0 0 20 12" fill="none">
          <polyline points="2,2 10,10 18,2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="rsvp-custom-panel">
          {options.map((opt) => (
            <button
              type="button"
              key={opt.value}
              className={`rsvp-custom-option ${opt.value === value ? "selected" : ""}`}
              onClick={() => { onChange(opt.value); setOpen(false); }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RSVPScreen({ onContinue, guestName, maxGuests }: RSVPScreenProps) {
  const [name, setName] = useState(guestName ?? "");
  const [guests, setGuests] = useState("0");
  const [rsvp, setRsvp] = useState("yes");
  const [submitted, setSubmitted] = useState(false);

  const guestOptions: SelectOption[] = Array.from(
    { length: (maxGuests ?? 10) + 1 },
    (_, i) => ({ value: String(i), label: String(i) })
  );

  const rsvpOptions: SelectOption[] = [
    { value: "yes", label: "Yes" },
    { value: "no",  label: "No"  },
  ];

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    console.log({ name, guests, rsvp });
    setSubmitted(true);
    setTimeout(() => onContinue(), 1600);
  };

  return (
    <div className="cover-screen">
      <div className="cover-bg" />
      <div className="cover-overlay evt-overlay" />

      <div className="rsvp-screen-content">
        <div className="evt-header">
          <span className="evt-the">the</span>
          <span className="evt-celebration">RSVP</span>
        </div>

        {submitted ? (
          <p className="rsvp-thanks">Thank you! We can't wait to celebrate with you.</p>
        ) : (
          <form className="rsvp-screen-form" onSubmit={handleSubmit}>
            <div className="rsvp-field">
              <input
                className="rsvp-input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={!!guestName}
                required
              />
            </div>

            <CustomSelect
              label="Additional Guests"
              value={guests}
              onChange={setGuests}
              options={guestOptions}
            />

            <CustomSelect
              label="RSVP"
              value={rsvp}
              onChange={setRsvp}
              options={rsvpOptions}
            />

            <button className="rsvp-submit-btn" type="submit">
              SUBMIT
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
