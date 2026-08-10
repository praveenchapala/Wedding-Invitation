function WeddingCeremony() {
  return (
    <section className="wedding-ceremony">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="wedding-ceremony-background" />

      <div className="wedding-ceremony-glow" />

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="wedding-ceremony-header">

        <p className="wedding-ceremony-eyebrow">
          With the blessings of our families
        </p>

        <h2>
          C. Chandra Mouli
          <br />
          <span>&</span>
          <br />
          B. Kalyani
        </h2>

        <p className="wedding-ceremony-intro">
          Cordially invite you and your family
          <br />
          to celebrate their wedding
        </p>

        <div className="wedding-ceremony-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

      </div>

      {/* =================================================
          EVENTS
      ================================================= */}

      <div className="wedding-events">

        {/* =================================================
            RECEPTION
        ================================================= */}

        <article className="wedding-event-card">

          <div className="wedding-event-icon">
            ✦
          </div>

          <p className="wedding-event-eyebrow">
            The Celebration Begins
          </p>

          <h3>
            Wedding Reception
          </h3>

          <div className="wedding-event-date">
            <span>25</span>
            <div>
              <strong>August 2026</strong>
              <small>Tuesday</small>
            </div>
          </div>

          <p className="wedding-event-time">
            7:30 PM onwards
          </p>

        </article>

        {/* =================================================
            MUHURTHAM
        ================================================= */}

        <article className="wedding-event-card wedding-event-main">

          <div className="wedding-event-icon">
            ॐ
          </div>

          <p className="wedding-event-eyebrow">
            The Sacred Beginning
          </p>

          <h3>
            Muhurtham
          </h3>

          <div className="wedding-event-date">
            <span>26</span>

            <div>
              <strong>August 2026</strong>
              <small>Wednesday</small>
            </div>
          </div>

          <p className="wedding-event-time">
            10:05 AM — 11:00 AM
          </p>

          <p className="wedding-event-lagna">
            Subha Tula Lagnam
          </p>

        </article>

      </div>

      {/* =================================================
          VENUE
      ================================================= */}

      <div className="wedding-venue">

        <p className="wedding-venue-eyebrow">
          The Wedding Venue
        </p>

        <h3>
          Vanshika Grand
        </h3>

        <p>
          Function Hall,
          <br />
          Ganesh Hall Complex,
          <br />
          Penukonda
        </p>

      </div>

      {/* =================================================
          FAMILY DETAILS
      ================================================= */}

      <div className="wedding-families">

        <div className="wedding-family">

          <p className="wedding-family-label">
            Groom's Family
          </p>

          <h4>
            Smt. Chapala Padmavathi
            <br />
            & Sri Chapala Sreeramulu
          </h4>

        </div>

        <div className="wedding-family-divider">
          ✦
        </div>

        <div className="wedding-family">

          <p className="wedding-family-label">
            Bride's Family
          </p>

          <h4>
            Smt. Bestha Amrutha
            <br />
            & Sri Bestha Ramu
          </h4>

        </div>

      </div>

      {/* =================================================
          CLOSING
      ================================================= */}

      <div className="wedding-closing">

        <p>
          With love, blessings and warm wishes
        </p>

        <span>
          Sri Rastu · Shubamastu
        </span>

      </div>

    </section>
  );
}

export default WeddingCeremony;