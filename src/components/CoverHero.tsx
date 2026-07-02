import { wedding } from "../data";
import { useLang } from "../i18n";

interface CoverHeroProps {
  onStart: () => void;
}

function toArabicDigits(s: string): string {
  return s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

export default function CoverHero({ onStart }: CoverHeroProps) {
  const { date } = wedding;
  const { lang, t } = useLang();

  const d = new Date(date);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear());
  // English reads DD.MM.YYYY (day left). Arabic reads right-to-left, so the
  // day must sit on the right — build it year.month.day so it renders that way.
  const dateLabel = lang === "ar"
    ? toArabicDigits(`${yy}.${mm}.${dd}`)
    : `${dd}.${mm}.${yy}`;

  return (
    <div className="cover-screen hero-screen" onClick={onStart} style={{ cursor: "pointer" }}>
      <div className="cover-overlay" />

      <div className="hero-content">
        <p className="lum-quote hero-quote" style={{ whiteSpace: "pre-line" }}>{t("cover.quote")}</p>
        <p className="lum-quote-ref">{t("cover.quoteRef")}</p>

        <div className="lum-line" />

        <div className="hero-monogram">{t("couple.groom")} <span className="hero-amp">{t("couple.and")}</span> {t("couple.bride")}</div>
        <div className="hero-date">{dateLabel}</div>
      </div>
    </div>
  );
}
