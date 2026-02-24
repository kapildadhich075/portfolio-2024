/**
 * SetMyFielding.jsx
 * -----------------
 * A standalone micro-page for Instagram visitors who comment "fielding".
 * Displays a random cricket × life motivational message each time the
 * user taps "Set My Fielding Again", with a smooth fade transition.
 */

import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { messages, getRandomMessage } from "./messages";
import { shareCard } from "./generateCard";
import "./SetMyFielding.css";

const FIREBASE_URL = "https://react-http-98d20-default-rtdb.firebaseio.com/fielding-leads.json";

/* Duration (ms) must match the CSS transition time */
const FADE_DURATION = 450;

export default function SetMyFielding() {
  /* ---------- state ---------- */
  const [index, setIndex] = useState(() => getRandomMessage(-1));
  const [fading, setFading] = useState(false);
  const [sharing, setSharing] = useState(false);

  // User details & Modal state
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    instagramHandle: "",
    professionalRole: "",
    currentFocus: "",
    signatureShot: "",
    location: ""
  });
  const [submitting, setSubmitting] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("fielding_user");
    if (saved) {
      setUserInfo(JSON.parse(saved));
    } else {
      setShowModal(true);
    }
  }, []);

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
    
    // If somehow sharing without info, ask again
    if (!userInfo) {
      setShowModal(true);
      return;
    }

    setSharing(true);
    try {
      await shareCard(messages[index].quote, messages[index].action, userInfo);
    } finally {
      setSharing(false);
    }
  }, [sharing, index, userInfo]);

  /* ---------- form submission ---------- */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    setSubmitting(true);
    try {
      // POST to Firebase
      await fetch(FIREBASE_URL, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
        headers: { "Content-Type": "application/json" },
      });

      // Save locally
      localStorage.setItem("fielding_user", JSON.stringify(formData));
      setUserInfo(formData);
      setShowModal(false);
    } catch (err) {
      console.error("Firebase error:", err);
      // Still allow them to proceed if social sharing is important
      setUserInfo(formData);
      setShowModal(false);
    } finally {
      setSubmitting(false);
    }
  };

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
          {/* Personalized Badge */}
          {userInfo && userInfo.fullName && (
            <div className="fielding-user-badge">
              Fielding for {userInfo.fullName}
            </div>
          )}
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

        {/* Lead Form Modal */}
        {showModal && (
          <div className="fielding-modal-overlay">
            <div className="fielding-modal">
              <h2>Welcome to the Crease</h2>
              <p>Personalize your experience and get wisdom cards direct to your field.</p>

              <form onSubmit={handleFormSubmit}>
                <div className="fielding-input-grid">
                  <div className="fielding-input-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      className="fielding-input"
                      placeholder="e.g. Kapil Dadhich"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="fielding-input-group">
                    <label htmlFor="instagram">Instagram (Optional)</label>
                    <input
                      id="instagram"
                      type="text"
                      className="fielding-input"
                      placeholder="e.g. @kapil.dadhich"
                      value={formData.instagramHandle}
                      onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                    />
                  </div>
                </div>

                <div className="fielding-input-grid">
                  <div className="fielding-input-group">
                    <label htmlFor="role">Role (Optional)</label>
                    <input
                      id="role"
                      type="text"
                      className="fielding-input"
                      placeholder="e.g. Creator / Dev"
                      value={formData.professionalRole}
                      onChange={(e) => setFormData({ ...formData, professionalRole: e.target.value })}
                    />
                  </div>

                  <div className="fielding-input-group">
                    <label htmlFor="location">Location (Optional)</label>
                    <input
                      id="location"
                      type="text"
                      className="fielding-input"
                      placeholder="e.g. Mumbai, India"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="fielding-input-group">
                  <label htmlFor="focus">Focus (Optional)</label>
                  <input
                    id="focus"
                    type="text"
                    className="fielding-input"
                    placeholder="Setting your field for?"
                    value={formData.currentFocus}
                    onChange={(e) => setFormData({ ...formData, currentFocus: e.target.value })}
                  />
                </div>

                <div className="fielding-input-group">
                  <label htmlFor="shot">Signature Rule (Optional)</label>
                  <input
                    id="shot"
                    type="text"
                    className="fielding-input"
                    placeholder="One rule you live by"
                    value={formData.signatureShot}
                    onChange={(e) => setFormData({ ...formData, signatureShot: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="fielding-modal-btn"
                  disabled={submitting}
                >
                  {submitting ? "Setting Field..." : "Enter the Game"}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
