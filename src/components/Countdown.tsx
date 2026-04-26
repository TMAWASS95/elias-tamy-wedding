import { useEffect, useState } from "react";
import { wedding } from "../data";

export default function Countdown() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const diff =
      new Date(wedding.date).getTime() - new Date().getTime();

    setDays(Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))));
  }, []);

  return (
    <section className="section">
      <h2>{days} days to go</h2>
    </section>
  );
}
