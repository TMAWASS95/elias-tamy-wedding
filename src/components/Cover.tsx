import { wedding } from "../data";

interface CoverProps {
  onStart: () => void;
}

export default function Cover({ onStart }: CoverProps) {
  const { groom, bride } = wedding;

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

        <div className="lum-line" />

        {/* Invitation quote */}
        <p className="lum-quote">
          "For what God has joined together,{"\n"}
          let no man put asunder."
        </p>
        <p className="lum-quote-ref">— Mark 9:10</p>

        <div className="lum-line" />

        <p className="lum-body lum-body--art">It is with the greatest pleasure that the</p>

        <div className="lum-families">
          <span className="lum-family-name">Charles Nasrany Family</span>
          <span className="lum-ampersand">&amp;</span>
          <span className="lum-family-name">Georges Mawass Family</span>
        </div>

        <p className="lum-body lum-body--art">
          cordially invite you to celebrate{"\n"}the wedding of their son and daughter
        </p>
      </div>
    </div>
  );
}
