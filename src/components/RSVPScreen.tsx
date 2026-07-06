import { useState, useEffect } from "react";
import { collection, doc, getDoc, setDoc, addDoc, Timestamp } from "firebase/firestore";
import { db, RSVPS_COLLECTION } from "../lib/firebase";
import { useLang } from "../i18n";

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
  const [phone, setPhone]       = useState("");
  const [guests, setGuests]     = useState(0);
  const [rsvp, setRsvp]         = useState<"yes" | "no">("yes");
  const [submission, setSubmission] = useState<"new" | "existing" | null>(null);
  const [checking, setChecking] = useState(!!(slug && db));
  const [error, setError]       = useState<string | null>(null);
  const { t } = useLang();

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
      setError(t("rsvp.errorNoDb"));
      return;
    }

    const rsvpData = {
      name,
      phone: phone.trim() || null,
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
    } catch (err: any) {
      setError(t("rsvp.errorGeneric"));
      return;
    }

    setSubmission("new");
    setTimeout(() => onContinue(), 1600);
  };

  return (
    <div className="cover-screen rsvp-screen">
      <div className="cover-overlay lum-overlay rsvp-overlay" />

      <div className="rsvp-screen-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">{t("rsvp.title")}</span>
          <div className="lum-line" />
        </div>

        {submission === null && (
          <p className="rsvp-deadline">
            <span className="rsvp-deadline-label">{t("rsvp.deadlineLabel")}</span>
            <span className="rsvp-deadline-date">{t("rsvp.date")}</span>
          </p>
        )}

        {checking ? (
          <p className="rsvp-thanks">{t("rsvp.loading")}</p>
        ) : submission !== null ? (
          <p className="rsvp-thanks">
            {submission === "existing"
              ? t("rsvp.thanksExisting")
              : t("rsvp.thanksNew")}
          </p>
        ) : (
          <form className="rsvp-screen-form" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="rsvp-field">
              <span className="rsvp-field-label">{t("rsvp.yourName")}</span>
              {guestName ? (
                <p className="rsvp-name-display">{name}</p>
              ) : (
                <input
                  className="rsvp-input"
                  placeholder={t("rsvp.fullName")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
            </div>


            {/* Attendance pills */}
            <div className="rsvp-field">
              <span className="rsvp-field-label">{t("rsvp.willAttend")}</span>
              <div className="rsvp-pill-group">
                <button
                  type="button"
                  className={`rsvp-pill${rsvp === "yes" ? " rsvp-pill--active" : ""}`}
                  onClick={() => setRsvp("yes")}
                >
                  {t("rsvp.accepts")}
                </button>
                <button
                  type="button"
                  className={`rsvp-pill${rsvp === "no" ? " rsvp-pill--active rsvp-pill--decline" : ""}`}
                  onClick={() => setRsvp("no")}
                >
                  {t("rsvp.declines")}
                </button>
              </div>
            </div>

            {/* Guest stepper — only shown when attending */}
            {rsvp === "yes" && (
              <div className="rsvp-field">
                <span className="rsvp-field-label">{t("rsvp.attending")}</span>
                {maxGuests != null && maxGuests > 0 && maxGuests < 100 && (
                  <p className="rsvp-max-note">
                    {t("rsvp.maxNote").replace("{n}", String(maxGuests))}
                  </p>
                )}
                <GuestStepper
                  value={guests}
                  onChange={setGuests}
                  max={maxGuests ?? 10}
                />
              </div>
            )}

            {error && <p className="rsvp-error">{error}</p>}

            <p className="rsvp-contact-note">
              {t("rsvp.confirmNote")}
            </p>

            <button className="rsvp-submit-btn" type="submit">
              {rsvp === "no" ? t("rsvp.confirmDecline") : t("rsvp.confirm")}
            </button>

            <p className="rsvp-contact-note">
              {t("rsvp.orSend")}
            </p>

            <div className="rsvp-contacts">
              <a
                className="rsvp-contact"
                href="https://wa.me/96170212399"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rsvp-contact-label">{t("rsvp.groom")}</span>
                <span className="rsvp-contact-num">70 212 399</span>
              </a>
              <a
                className="rsvp-contact"
                href="https://wa.me/96176795349"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rsvp-contact-label">{t("rsvp.bride")}</span>
                <span className="rsvp-contact-num">76 795 349</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
