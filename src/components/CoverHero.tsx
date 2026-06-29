import { wedding } from "../data";
import { useLang } from "../i18n";

interface CoverHeroProps {
  onStart: () => void;
}

function toArabicDigits(s: string): string {
  return s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

export default function CoverHero({ onStart }: CoverHeroProps) {
  const { groom, bride, date } = wedding;
  const { lang, t } = useLang();

  // Short date as DD.MM.YY (e.g. 22.08.26)
  const d = new Date(date);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  const shortDate = `${dd}.${mm}.${yy}`;
  const dateLabel = lang === "ar" ? toArabicDigits(shortDate) : shortDate;

  return (
    <div className="cover-screen hero-screen" onClick={onStart} style={{ cursor: "pointer" }}>
      <div className="cover-overlay" />

      <div className="hero-content">
        <p className="lum-quote hero-quote" style={{ whiteSpace: "pre-line" }}>{t("cover.quote")}</p>
        <p className="lum-quote-ref">{t("cover.quoteRef")}</p>

        <div className="lum-line" />

        <div className="hero-monogram">{groom} <span className="hero-amp">&amp;</span> {bride}</div>
        <div className="hero-date">{dateLabel}</div>
      </div>
    </div>
  );
}
