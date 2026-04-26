import { motion } from "framer-motion";
import { wedding } from "../data";

interface CoverProps {
  onStart: () => void;
}

export default function Cover({ onStart }: CoverProps) {
  const dateLabel = new Date(wedding.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      className="cover-screen"
      transition={{ duration: 0.6 }}
    >
      <div className="cover-bg" />
      <div className="cover-overlay" />

      <div className="cover-content">
        <motion.button
          className="start-btn"
          onClick={onStart}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileTap={{ scale: 0.93 }}
        >
          <span className="start-pulse" />
          Start
        </motion.button>

        <motion.p
          className="tap-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Tap to start
        </motion.p>
      </div>

      <motion.div
        className="cover-names-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <span className="cover-couple-name">
          {wedding.groom} &amp; {wedding.bride}
        </span>
        <span className="cover-date-label">{dateLabel}</span>
      </motion.div>


    </motion.div>
  );
}
