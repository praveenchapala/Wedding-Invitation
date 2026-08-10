import { useLayoutEffect, useRef } from "react";
import { createTimelineAnimation } from "../animations/timelineAnimation";

function WeddingTimeline() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createTimelineAnimation(sectionRef.current);

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wedding-timeline"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="timeline-background" />

      {/* =================================================
          CENTER GLOW
      ================================================= */}

      <div className="timeline-glow" />

      {/* =================================================
          FLOATING PARTICLES
      ================================================= */}

      <div className="timeline-particles">
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
          SECTION HEADER
      ================================================= */}

      <div className="timeline-header">
        <p className="timeline-eyebrow">
          The Celebration
        </p>

        <h2>
          Two Days,
          <br />
          One Beautiful Beginning
        </h2>

        <div className="timeline-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>
      </div>

      {/* =================================================
          EVENTS WRAPPER
      ================================================= */}

      <div className="timeline-events">

        {/* =================================================
            RECEPTION
        ================================================= */}

        <article className="timeline-event timeline-reception">
          <div className="event-card">

            <div className="event-symbol">
              ✦
            </div>

            <p className="event-label">
              The Celebration Begins
            </p>

            <h3>
              Wedding Reception
            </h3>

            <div className="event-date">
              <span className="event-day">
                25
              </span>

              <span className="event-month">
                August 2026
              </span>

              <span className="event-weekday">
                Tuesday
              </span>
            </div>

            <div className="event-time">
              7:30 PM onwards
            </div>

          </div>
        </article>

        {/* =================================================
            CONNECTING LINE
        ================================================= */}

        <div className="timeline-connector">
          <span className="connector-line" />
          <span className="connector-symbol">
            ॐ
          </span>
          <span className="connector-line" />
        </div>

        {/* =================================================
            MUHURTHAM
        ================================================= */}

        <article className="timeline-event timeline-muhurtham">
          <div className="event-card">

            <div className="event-symbol">
              ✦
            </div>

            <p className="event-label">
              The Sacred Beginning
            </p>

            <h3>
              Muhurtham
            </h3>

            <div className="event-date">
              <span className="event-day">
                26
              </span>

              <span className="event-month">
                August 2026
              </span>

              <span className="event-weekday">
                Wednesday
              </span>
            </div>

            <div className="event-time">
              10:05 AM — 11:00 AM
            </div>

            <p className="event-auspicious">
              Subha Tula Lagnam
            </p>

          </div>
        </article>

      </div>

      {/* =================================================
          VENUE
      ================================================= */}

      <div className="timeline-venue">

        <p className="venue-eyebrow">
          The Wedding Venue
        </p>

        <h3>
          Vanshika Grand
        </h3>

        <p className="venue-address">
          Function Hall,
          <br />
          Ganesh Hall Complex,
          <br />
          Penukonda
        </p>

        <div className="venue-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

      </div>

    </section>
  );
}

export default WeddingTimeline;