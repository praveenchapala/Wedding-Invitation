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

      <div className="timeline-glow" />

      {/* =================================================
          DECORATIVE LIGHTS
      ================================================= */}

      <div className="timeline-light timeline-light-left" />
      <div className="timeline-light timeline-light-right" />

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="timeline-header">
        <p className="timeline-eyebrow">
          Mark Your Calendar
        </p>

        <h2>
          The Celebration
          <br />
          Begins
        </h2>

        <div className="timeline-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>
      </div>

      {/* =================================================
          TIMELINE AREA
      ================================================= */}

      <div className="timeline-events">

        {/* -------------------------------------------------
            CENTER LINE
        ------------------------------------------------- */}

        <div className="timeline-line" />

        {/* =================================================
            RECEPTION
        ================================================= */}

        <article className="timeline-event timeline-event-reception">
          <div className="timeline-card">
            <p className="timeline-event-label">
              The Celebration Begins
            </p>

            <h3>
              Wedding Reception
            </h3>

            <div className="timeline-details">
              <p>
                <span>25</span>
                <span>August 2026</span>
              </p>

              <p>
                Tuesday
              </p>

              <p>
                7:30 PM onwards
              </p>
            </div>
          </div>

          {/* Timeline marker */}
          <div className="timeline-marker">
            <span>✦</span>
          </div>
        </article>

        {/* =================================================
            MUHURTHAM
        ================================================= */}

        <article className="timeline-event timeline-event-muhurtham">
          <div className="timeline-card">
            <p className="timeline-event-label">
              The Sacred Beginning
            </p>

            <h3>
              Muhūrtham
            </h3>

            <div className="timeline-details">
              <p>
                <span>26</span>
                <span>August 2026</span>
              </p>

              <p>
                Wednesday
              </p>

              <p>
                10:05 AM — 11:00 AM
              </p>

              <p className="timeline-special">
                Subha Tula Lagnam
              </p>
            </div>
          </div>

          {/* Timeline marker */}
          <div className="timeline-marker">
            <span>ॐ</span>
          </div>
        </article>

      </div>

      {/* =================================================
          VENUE
      ================================================= */}

      <article className="timeline-venue">
        <p className="timeline-event-label">
          The Wedding Venue
        </p>

        <h3>
          Vanshika Grand
        </h3>

        <div className="timeline-venue-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <p>
          Function Hall,
          <br />
          Ganesh Hall Complex,
          <br />
          Penukonda
        </p>
      </article>

      {/* =================================================
          BOTTOM MESSAGE
      ================================================= */}

      <div className="timeline-bottom">
        <p>
          Two moments.
          <br />
          One beautiful beginning.
        </p>
      </div>
    </section>
  );
}

export default WeddingTimeline;