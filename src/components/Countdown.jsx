import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createCountdownAnimation } from "../animations/countdownAnimation";

function Countdown() {
  const sectionRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Wedding Muhurtham:
    // 26 August 2026, 10:05 AM
    const weddingDate = new Date(
      "2026-08-26T10:05:00+05:30"
    );

    const updateCountdown = () => {
      const now = new Date();

      const difference =
        weddingDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  useLayoutEffect(() => {
    const cleanup = createCountdownAnimation(
      sectionRef.current
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="countdown-section"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="countdown-background" />

      {/* =================================================
          GOLDEN GLOW
      ================================================= */}

      <div className="countdown-glow" />

      {/* =================================================
          PARTICLES
      ================================================= */}

      <div className="countdown-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="countdown-content">

        <p className="countdown-eyebrow">
          The Countdown Begins
        </p>

        <h2>
          Until We Say
          <br />
          Forever
        </h2>

        <div className="countdown-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        {/* =================================================
            WEDDING DATE
        ================================================= */}

        <p className="countdown-date">
          26 August 2026
        </p>

        <p className="countdown-subtitle">
          Subha Tula Lagnam
        </p>

        {/* =================================================
            COUNTDOWN NUMBERS
        ================================================= */}

        <div className="countdown-grid">

          {/* DAYS */}

          <div className="countdown-unit">
            <div className="countdown-number">
              {String(timeLeft.days).padStart(2, "0")}
            </div>

            <div className="countdown-label">
              Days
            </div>
          </div>

          <div className="countdown-separator">
            :
          </div>

          {/* HOURS */}

          <div className="countdown-unit">
            <div className="countdown-number">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>

            <div className="countdown-label">
              Hours
            </div>
          </div>

          <div className="countdown-separator">
            :
          </div>

          {/* MINUTES */}

          <div className="countdown-unit">
            <div className="countdown-number">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>

            <div className="countdown-label">
              Minutes
            </div>
          </div>

          <div className="countdown-separator">
            :
          </div>

          {/* SECONDS */}

          <div className="countdown-unit">
            <div className="countdown-number">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>

            <div className="countdown-label">
              Seconds
            </div>
          </div>

        </div>

        {/* =================================================
            MESSAGE
        ================================================= */}

        <p className="countdown-message">
          Every moment brings us closer
          to the beginning of forever.
        </p>

      </div>
    </section>
  );
}

export default Countdown;