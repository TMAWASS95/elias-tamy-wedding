import { wedding } from "../data";
import { useLang } from "../i18n";

interface CoverHeroProps {
  onStart: () => void;
}

// Levantine (Mashriq) month names — uses "آب" for August instead of the
// standard Arabic "أغسطس" that Intl's "ar" locale produces.
const AR_MONTHS = [
  "كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران",
  "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول",
];

function toArabicDigits(n: number): string {
  return String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

function formatArabicDate(d: Date): string {
  const weekday = d.toLocaleDateString("ar", { weekday: "long" });
  return `${weekday}، ${toArabicDigits(d.getDate())} ${AR_MONTHS[d.getMonth()]} ${toArabicDigits(d.getFullYear())}`;
}

export default function CoverHero({ onStart }: CoverHeroProps) {
  const { groom, bride, date } = wedding;
  const { lang, t } = useLang();

  const dateLabel = lang === "ar"
    ? formatArabicDate(new Date(date))
    : new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

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
