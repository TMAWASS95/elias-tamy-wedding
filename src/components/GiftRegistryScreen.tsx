import { wedding } from "../data";

interface GiftRegistryScreenProps {
  onContinue: () => void;
}

export default function GiftRegistryScreen({ onContinue: _onContinue }: GiftRegistryScreenProps) {
  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="lum-content lum-content--center">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">Gift Registry</span>
          <div className="lum-line" />
        </div>

        <p className="lum-body" style={{ maxWidth: 280, textAlign: "center" }}>
          Your presence at our wedding is the greatest gift of all.
        </p>

        <p className="lum-body lum-body--muted" style={{ marginTop: 8 }}>
          For those who wish, a registry is available on Wishlist
        </p>

        <div className="gr-id-block">
          <span className="gr-id-label">Registry ID</span>
          <span className="gr-id-value">{wedding.giftRegistry.id}</span>
        </div>
      </div>
    </div>
  );
}
