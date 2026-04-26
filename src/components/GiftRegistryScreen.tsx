import { wedding } from "../data";
import ScrollIndicator from "./ScrollIndicator";

interface GiftRegistryScreenProps {
  onContinue: () => void;
}


function WishlistLogo() {
  return (
    <div className="gr-logo-box">
      <svg viewBox="0 0 52 52" width="52" height="52">
        <rect width="52" height="52" rx="10" fill="#E53935" />
        <text
          x="26"
          y="37"
          textAnchor="middle"
          fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900"
          fontSize="28"
          fill="white"
          letterSpacing="-1"
        >
          W
        </text>
      </svg>
    </div>
  );
}

export default function GiftRegistryScreen({ onContinue }: GiftRegistryScreenProps) {
  return (
    <div className="cover-screen">
      <div className="cover-bg" />
      <div className="cover-overlay evt-overlay" />

      <div className="gr-content">
        <div className="evt-header">
          <span className="evt-the">the</span>
          <span className="evt-celebration">Gift Registry</span>
        </div>

        <p className="gr-message">
          Your presence at our wedding is the greatest gift of all.
        </p>

        <p className="gr-sub">
          For those who wish, a wedding registry is available
        </p>

        <div className="gr-id-block">
          <span className="gr-id-label">Gift Registry ID</span>
          <span className="gr-id-value">{wedding.giftRegistry.id}</span>
          <WishlistLogo />
          <span className="gr-thankyou">THANK YOU</span>
        </div>
      </div>

      <ScrollIndicator onClick={onContinue} />
    </div>
  );
}
