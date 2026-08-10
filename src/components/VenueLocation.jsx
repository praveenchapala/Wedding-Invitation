import { useLayoutEffect, useRef } from "react";
import { createVenueLocationAnimation } from "../animations/venueLocationAnimation";

function VenueLocation() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createVenueLocationAnimation(sectionRef.current);

    return cleanup;
  }, []);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Vanshika+Grand+Function+Hall+Ganesh+Hall+Complex+Penukonda";

  return (
    <section
      ref={sectionRef}
      className="venue-location-section"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}
      <div className="venue-location-background" />

      <div className="venue-location-glow" />

      {/* =================================================
          DECORATIVE ELEMENTS
      ================================================= */}
      <div className="venue-location-decoration venue-location-decoration-left">
        ✦
      </div>

      <div className="venue-location-decoration venue-location-decoration-right">
        ✦
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}
      <div className="venue-location-content">

        <p className="venue-location-eyebrow">
          Find Us
        </p>

        <h2 className="venue-location-title">
          Where We Begin
          <br />
          Forever
        </h2>

        <div className="venue-location-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        {/* =================================================
            VENUE DETAILS
        ================================================= */}
        <div className="venue-location-details">

          <p className="venue-location-label">
            The Wedding Venue
          </p>

          <h3>
            Vanshika Grand
          </h3>

          <p className="venue-location-address">
            Function Hall,
            <br />
            Ganesh Hall Complex,
            <br />
            Penukonda
          </p>

          <div className="venue-location-date">
            <span>26 August 2026</span>
            <span>10:05 AM — 11:00 AM</span>
          </div>

        </div>

        {/* =================================================
            MAP
        ================================================= */}
        <div className="venue-map-wrapper">

          <div className="venue-map-frame">

            <iframe
              title="Vanshika Grand Location"
              src="https://www.google.com/maps?q=Vanshika+Grand,+Penukonda&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="venue-map-overlay">
              <div className="venue-map-pin">
                ✦
              </div>

              <p>
                Vanshika Grand
              </p>
            </div>

          </div>

        </div>

        {/* =================================================
            DIRECTIONS
        ================================================= */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="venue-directions-button"
        >
          <span>
            Get Directions
          </span>

          <strong>
            →
          </strong>
        </a>

      </div>

      {/* =================================================
          BOTTOM MESSAGE
      ================================================= */}
      <div className="venue-location-bottom">
        <span>✦</span>

        <p>
          We cannot wait
          <br />
          to celebrate with you.
        </p>

        <span>✦</span>
      </div>

    </section>
  );
}

export default VenueLocation;