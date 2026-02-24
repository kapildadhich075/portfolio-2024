/**
 * SetMyFielding.jsx
 * -----------------
 * A standalone micro-page for Instagram visitors who comment "fielding".
 * Displays a random cricket × life motivational message each time the
 * user taps "Set My Fielding Again", with a smooth fade transition.
 */

import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { messages, getRandomMessage } from "./messages";
import { shareCard } from "./generateCard";
import "./SetMyFielding.css";

/* Duration (ms) must match the CSS transition time */
const FADE_DURATION = 450;

export default function SetMyFielding() {
  /* ---------- state ---------- */
  const [index, setIndex] = useState(() => getRandomMessage(-1));
  const [fading, setFading] = useState(false);
  const [sharing, setSharing] = useState(false);

  /* ---------- swap message with fade ---------- */
  const handleNext = useCallback(() => {
    if (fading) return; // prevent double-clicks

    setFading(true); // triggers .fade-out class

    setTimeout(() => {
      setIndex((prev) => getRandomMessage(prev));
      setFading(false); // triggers .fade-in (removes .fade-out)
    }, FADE_DURATION);
  }, [fading]);

  /* ---------- share as image card ---------- */
  const handleShare = useCallback(async () => {
    if (sharing) return;
    setSharing(true);
    try {
      await shareCard(messages[index].quote, messages[index].action);
    } finally {
      setSharing(false);
    }
  }, [sharing, index]);

  const { quote, action } = messages[index];

  /* ---------- render ---------- */
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Set My Fielding | Kapil Dadhich</title>
        <meta
          name="description"
          content="A micro dose of cricket-inspired life wisdom. Reposition your mindset, one message at a time."
        />
      </Helmet>

      <main className="fielding-page">
        {/* Floating emoji */}
        <div className="fielding-emoji" aria-hidden="true">
          🤗
        </div>

        {/* Message card */}
        <section
          className={`fielding-card fielding-content ${fading ? "fade-out" : ""}`}
        >
          {/* Quote */}
          <blockquote className="fielding-quote">"{quote}"</blockquote>

          {/* Action line */}
          <p className="fielding-action">
            <span className="fielding-action-icon" aria-hidden="true">
              🎯
            </span>{" "}
            Today's action: {action}
          </p>
        </section>

        {/* Action buttons */}
        <div className="fielding-buttons">
          <button
            className="fielding-btn"
            onClick={handleNext}
            disabled={fading}
            type="button"
          >
            Set My Fielding Again
          </button>

          <button
            className="fielding-btn fielding-btn--share"
            onClick={handleShare}
            disabled={sharing}
            type="button"
          >
            {sharing ? "Creating…" : "Share This ✦"}
          </button>
        </div>

        {/* Premium Floating Footer Badge */}
        <footer className="fielding-footer">
          <Link to="/creator" className="fielding-badge">
            <span className="fielding-badge-tag">STAY IN THE CREASE</span>
            <span className="fielding-badge-sep">/</span>
            <span className="fielding-badge-name">@KAPIL.DADHICH</span>
          </Link>
        </footer>
      </main>
    </>
  );
}
