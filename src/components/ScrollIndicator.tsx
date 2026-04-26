export default function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <button className="scroll-indicator" onClick={onClick} aria-label="Continue">
      <span className="scroll-mouse">
        <span className="scroll-dot" />
      </span>
    </button>
  );
}
