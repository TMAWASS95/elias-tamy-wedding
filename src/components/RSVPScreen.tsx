import { useState, useRef, useEffect, useMemo } from "react";
import { collection, doc, getDoc, setDoc, addDoc, Timestamp } from "firebase/firestore";
import { db, RSVPS_COLLECTION } from "../lib/firebase";

interface RSVPScreenProps {
  onContinue: () => void;
  guestName?: string;
  maxGuests?: number;
  slug?: string;
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

export default function RSVPScreen({ onContinue, guestName, maxGuests, slug }: RSVPScreenProps) {
  const [name, setName] = useState(guestName ?? "");
  const [guests, setGuests] = useState("0");
  const [rsvp, setRsvp] = useState("yes");
  // "new" = just submitted, "existing" = was already submitted before, null = not yet submitted
  const [submission, setSubmission] = useState<"new" | "existing" | null>(null);
  const [checking, setChecking] = useState(!!(slug && db));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug || !db) return;

    let cancelled = false;
    (async () => {
      try {
        const docSnap = await getDoc(doc(db, RSVPS_COLLECTION, slug));
        if (cancelled) return;
        if (docSnap.exists()) setSubmission("existing");
      } catch {
        // ignore errors during check
      } finally {
        if (!cancelled) setChecking(false);
      }
    })();

    return () => { cancelled = true; };
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  const guestOptions = useMemo<SelectOption[]>(
    () => Array.from({ length: (maxGuests ?? 10) + 1 }, (_, i) => ({ value: String(i), label: String(i) })),
    [maxGuests]
  );

  const rsvpOptions: SelectOption[] = [
    { value: "yes", label: "Yes" },
    { value: "no",  label: "No"  },
  ];

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setError(null);
    if (submission !== null) return;
    if (!db) {
      setError("RSVP saving is not set up yet. Please contact the couple.");
      return;
    }

    const rsvpData = {
      name,
      attending: rsvp === "yes",
      guests: Number(guests),
      slug: slug ?? null,
      createdAt: Timestamp.now(),
    };

    try {
      if (slug) {
        await setDoc(doc(db, RSVPS_COLLECTION, slug), rsvpData);
      } else {
        await addDoc(collection(db, RSVPS_COLLECTION), rsvpData);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmission("new");
    setTimeout(() => onContinue(), 1600);
  };

  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="rsvp-screen-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">RSVP</span>
          <div className="lum-line" />
        </div>

        {checking ? (
          <p className="rsvp-thanks">Loading...</p>
        ) : submission !== null ? (
          <p className="rsvp-thanks">
            {submission === "existing"
              ? "Thanks! Your RSVP is already recorded."
              : "Thank you! We can't wait to celebrate with you."}
          </p>
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

            {error && <p className="rsvp-error">{error}</p>}

            <button className="rsvp-submit-btn" type="submit" disabled={submission !== null}>
              SUBMIT
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
