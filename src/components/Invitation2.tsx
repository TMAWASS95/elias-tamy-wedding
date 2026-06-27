import { wedding } from "../data";

interface Invitation2Props {
  onContinue: () => void;
}

export default function Invitation2({ onContinue: _onContinue }: Invitation2Props) {
  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="lum-content">
        <div className="lum-line" />

        <p className="lum-quote">
          "For what God has joined together,{"\n"}
          let no man put asunder."
        </p>
        <p className="lum-quote-ref">— Mark 9:10</p>

        <div className="lum-line" />

        <p className="lum-body">
          It is with the greatest pleasure that the
        </p>

        <div className="lum-families">
          <span className="lum-family-name">{wedding.groom} Family</span>
          <span className="lum-ampersand">&amp;</span>
          <span className="lum-family-name">{wedding.bride} Family</span>
        </div>

        <p className="lum-body lum-body--art">
          cordially invite you to celebrate{"\n"}the wedding of their son and daughter
        </p>
      </div>
    </div>
  );
}
