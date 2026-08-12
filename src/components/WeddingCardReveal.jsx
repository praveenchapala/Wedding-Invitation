import { useLayoutEffect, useRef } from "react";
import { createWeddingCardAnimation } from "../animations/weddingCardAnimation";

function WeddingCardReveal() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createWeddingCardAnimation(
      sectionRef.current
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wedding-card-reveal"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="wedding-card-background" />

      <div className="wedding-card-glow" />

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="wedding-card-header">
        <p className="wedding-card-eyebrow">
          A Special Invitation
        </p>

        <h2>
  Our Wedding
  <br />
  Invitation
</h2>

        <div className="wedding-card-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <p className="wedding-card-instruction">
          
        </p>
      </div>

      {/* =================================================
          ENVELOPE + CARD STAGE
      ================================================= */}

      <div className="wedding-card-stage">

        {/* -------------------------------------------------
            CARD
        ------------------------------------------------- */}

        <div className="wedding-card-paper">
          <img
            src="/images/wedding-card.png"
            alt="Wedding invitation card"
          />
        </div>

        {/* -------------------------------------------------
            ENVELOPE
        ------------------------------------------------- */}

        <div className="wedding-envelope">

          {/* Back */}

          <div className="wedding-envelope-back" />

          {/* Card opening space */}

          <div className="wedding-envelope-pocket" />

          {/* Envelope flap */}

          <div className="wedding-envelope-flap">
            <div className="wedding-envelope-flap-inner" />
          </div>

          {/* Front */}

          <div className="wedding-envelope-front">

            <div className="wedding-envelope-decoration">
              <span />
              <strong>✦</strong>
              <span />
            </div>

            <p>
              With Love
            </p>

            <small>
              C. Chandra Mouli & B. Kalyani
            </small>

          </div>

        </div>

      </div>

      {/* =================================================
          FINAL MESSAGE
      ================================================= */}

      <div className="wedding-card-final-message">

        <p>
          A celebration of love,
          <br />
          togetherness and forever.
        </p>

        <span>
          ✦
        </span>

      </div>

    </section>
  );
}

export default WeddingCardReveal;