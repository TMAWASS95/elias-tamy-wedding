import { useState, useEffect } from "react";
import { collection, doc, getDoc, setDoc, addDoc, Timestamp } from "firebase/firestore";
import { db, RSVPS_COLLECTION } from "../lib/firebase";
import { wedding } from "../data";

interface RSVPScreenProps {
  onContinue: () => void;
  guestName?: string;
  maxGuests?: number;
  slug?: string;
}

function GuestStepper({
  value,
  onChange,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  max: number;
}) {
  return (
    <div className="rsvp-stepper">
      <button
        type="button"
        className="rsvp-stepper-btn"
        onClick={() => onChange(Math.max(0, value - 1))}
        aria-label="Remove guest"
      >
        −
      </button>
      <span className="rsvp-stepper-value">{value}</span>
      <button
        type="button"
        className="rsvp-stepper-btn"
        onClick={() => onChange(Math.min(max, value + 1))}
        aria-label="Add guest"
      >
        +
      </button>
    </div>
  );
}

export default function RSVPScreen({ onContinue, guestName, maxGuests, slug }: RSVPScreenProps) {
  const [name, setName]         = useState(guestName ?? "");
  const [guests, setGuests]     = useState(0);
  const [rsvp, setRsvp]         = useState<"yes" | "no">("yes");
  const [submission, setSubmission] = useState<"new" | "existing" | null>(null);
  const [checking, setChecking] = useState(!!(slug && db));
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    if (!slug || !db) return;
    let cancelled = false;
    (async () => {
      try {
        const docSnap = await getDoc(doc(db, RSVPS_COLLECTION, slug));
        if (cancelled) return;
        if (docSnap.exists()) setSubmission("existing");
      } catch { /* ignore */ } finally {
        if (!cancelled) setChecking(false);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

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
      guests: rsvp === "yes" ? guests : 0,
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

  const dateStr = new Date(wedding.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="rsvp-screen-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">RSVP</span>
          <div className="lum-line" />
        </div>

        <p className="lum-body lum-body--muted" style={{ marginBottom: 16 }}>
          {dateStr}
        </p>

        {checking ? (
          <p className="rsvp-thanks">Loading…</p>
        ) : submission !== null ? (
          <p className="rsvp-thanks">
            {submission === "existing"
              ? "Thanks! Your RSVP is already recorded."
              : "Thank you! We can't wait to celebrate with you."}
          </p>
        ) : (
          <form className="rsvp-screen-form" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="rsvp-field">
              <span className="rsvp-field-label">Your Name</span>
              <input
                className="rsvp-input"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={!!guestName}
                required
              />
            </div>

            {/* Attendance pills */}
            <div className="rsvp-field">
              <span className="rsvp-field-label">Will you attend?</span>
              <div className="rsvp-pill-group">
                <button
                  type="button"
                  className={`rsvp-pill${rsvp === "yes" ? " rsvp-pill--active" : ""}`}
                  onClick={() => setRsvp("yes")}
                >
                  Joyfully accepts
                </button>
                <button
                  type="button"
                  className={`rsvp-pill${rsvp === "no" ? " rsvp-pill--active rsvp-pill--decline" : ""}`}
                  onClick={() => setRsvp("no")}
                >
                  Regretfully declines
                </button>
              </div>
            </div>

            {/* Guest stepper — only shown when attending */}
            {rsvp === "yes" && (
              <div className="rsvp-field">
                <span className="rsvp-field-label">Additional Guests</span>
                <GuestStepper
                  value={guests}
                  onChange={setGuests}
                  max={maxGuests ?? 10}
                />
              </div>
            )}

            {error && <p className="rsvp-error">{error}</p>}

            <button className="rsvp-submit-btn" type="submit">
              Confirm RSVP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
