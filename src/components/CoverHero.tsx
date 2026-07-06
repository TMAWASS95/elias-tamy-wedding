import { wedding } from "../data";
import { useLang } from "../i18n";

interface CoverHeroProps {
  onStart: () => void;
}

function toArabicDigits(s: string): string {
  return s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

// Levantine (Mashriq) month names — uses "آب" for August.
const AR_MONTHS = [
  "كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران",
  "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول",
];

export default function CoverHero({ onStart }: CoverHeroProps) {
  const { date } = wedding;
  const { lang, t } = useLang();

  const d = new Date(date);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear());
  // Arabic: "٢٢ آب ٢٠٢٦" (day + Levantine month name + year), flows RTL.
  const dateLabel = lang === "ar"
    ? `${toArabicDigits(String(d.getDate()))} ${AR_MONTHS[d.getMonth()]} ${toArabicDigits(yy)}`
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
