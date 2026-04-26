import { wedding } from "../data";

export default function EventDetails() {
  return (
    <section className="section">
      <h2>Event Details</h2>
      <p>{wedding.venue}</p>
      <a href={wedding.mapUrl} target="_blank" rel="noopener noreferrer">View Map</a>
    </section>
  );
}
