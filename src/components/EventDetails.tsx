import { wedding } from "../data";

export default function EventDetails() {
  return (
    <section className="section">
      <h2>Event Details</h2>
      <p>{wedding.venue.name}</p>
      <p>{wedding.venue.address}</p>
      <a href={wedding.venue.map} target="_blank">View Map</a>
    </section>
  );
}
