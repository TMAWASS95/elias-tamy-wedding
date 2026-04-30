export default function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <button className="scroll-indicator" onClick={onClick} aria-label="Continue">
      <span className="scroll-track">
        <span className="scroll-thumb" />
      </span>
    </button>
  );
}
