import { wedding } from "../data";

interface TimelineScreenProps {
  onContinue: () => void;
}

export default function TimelineScreen({ onContinue: _onContinue }: TimelineScreenProps) {
  return (
    <div className="cover-screen">
      <div className="cover-overlay lum-overlay" />

      <div className="tl-content">
        <div className="lum-section-header">
          <div className="lum-line" />
          <span className="lum-section-title">Timeline</span>
          <div className="lum-line" />
        </div>

        <div className="tl-timeline">
          <div className="tl-vline" />
          {wedding.timeline.map((item, i) => (
            <div className="tl-row" key={i}>
              <div className="tl-icon-col">
                <span className="tl-emoji" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <div className="tl-dot-col">
                <div className="tl-dot" />
              </div>
              <div className="tl-text-col">
                <span className="tl-event-name">{item.event}</span>
                <span className="tl-event-time">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
