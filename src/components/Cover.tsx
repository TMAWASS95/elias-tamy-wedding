import { wedding } from "../data";
import { useLang } from "../i18n";

interface CoverProps {
  onStart: () => void;
}

export default function Cover({ onStart }: CoverProps) {
  const { groom, bride } = wedding;
  const { t } = useLang();

  return (
    <div className="cover-screen intro-screen" onClick={onStart} style={{ cursor: "pointer" }}>
      <div className="cover-overlay lum-overlay" />

      <div className="intro-content">
        {/* Monogram */}
        <div className="intro-monogram">
          <span className="cover-init-letter">{groom[0]}</span>
          <span className="cover-init-heart">♥</span>
          <span className="cover-init-letter">{bride[0]}</span>
        </div>

        <p className="lum-body lum-body--art">{t("cover.intro1")}</p>

        <div className="lum-families">
          <span className="lum-family-name">{t("cover.family1")}</span>
          <span className="lum-ampersand">&amp;</span>
          <span className="lum-family-name">{t("cover.family2")}</span>
        </div>

        <p className="lum-body lum-body--art" style={{ whiteSpace: "pre-line" }}>{t("cover.intro2")}</p>

        <div className="intro-couple-names">
          <span className="intro-couple-name">{groom}</span>
          <span className="intro-couple-amp">&amp;</span>
          <span className="intro-couple-name">{bride}</span>
        </div>
      </div>
    </div>
  );
}
