interface DrunkPrinceScreenProps {
  onContinue: () => void;
}

export default function DrunkPrinceScreen({ onContinue: _onContinue }: DrunkPrinceScreenProps) {
  return (
    <div className="cover-screen drunk-screen">
      <div className="cover-overlay drunk-overlay" />

      <div className="lum-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">His Royal Tipsiness</span>
          <div className="lum-line" />
        </div>
        <p className="lum-quote">Prince Elias,{"\n"}prince of the network team 👑🍷</p>
      </div>
    </div>
  );
}
