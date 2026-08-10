import { useState, useLayoutEffect, useRef } from "react";
import { createRSVPAnimation } from "../animations/rsvpAnimation";

function RSVP() {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attendance: "accept",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const cleanup = createRSVPAnimation(
      sectionRef.current
    );

    return cleanup;
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="rsvp-section"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="rsvp-background" />

      <div className="rsvp-glow" />

      {/* =================================================
          DECORATIVE ELEMENTS
      ================================================= */}

      <div className="rsvp-ornament rsvp-ornament-left">
        ✦
      </div>

      <div className="rsvp-ornament rsvp-ornament-right">
        ✦
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="rsvp-content">

        <p className="rsvp-eyebrow">
          Your Presence Means The World To Us
        </p>

        <h2>
          We Would Be
          <br />
          Honored By Your Presence
        </h2>

        <div className="rsvp-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        {!submitted ? (
          <form
            className="rsvp-form"
            onSubmit={handleSubmit}
          >
            {/* =================================================
                NAME
            ================================================= */}

            <div className="rsvp-field">
              <label htmlFor="rsvp-name">
                Your Name
              </label>

              <input
                id="rsvp-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* =================================================
                GUESTS
            ================================================= */}

            <div className="rsvp-field">
              <label htmlFor="rsvp-guests">
                Number of Guests
              </label>

              <select
                id="rsvp-guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1">
                  1 Guest
                </option>

                <option value="2">
                  2 Guests
                </option>

                <option value="3">
                  3 Guests
                </option>

                <option value="4">
                  4 Guests
                </option>

                <option value="5">
                  5 Guests
                </option>
              </select>
            </div>

            {/* =================================================
                ATTENDANCE
            ================================================= */}

            <div className="rsvp-field">
              <label>
                Will You Be Joining Us?
              </label>

              <div className="rsvp-options">

                <label className="rsvp-option">
                  <input
                    type="radio"
                    name="attendance"
                    value="accept"
                    checked={
                      formData.attendance === "accept"
                    }
                    onChange={handleChange}
                  />

                  <span>
                    Joyfully Accept
                  </span>
                </label>

                <label className="rsvp-option">
                  <input
                    type="radio"
                    name="attendance"
                    value="decline"
                    checked={
                      formData.attendance === "decline"
                    }
                    onChange={handleChange}
                  />

                  <span>
                    Regretfully Decline
                  </span>
                </label>

              </div>
            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <div className="rsvp-field">
              <label htmlFor="rsvp-message">
                Message
                <span>
                  Optional
                </span>
              </label>

              <textarea
                id="rsvp-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a message for the couple..."
                rows="3"
              />
            </div>

            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="rsvp-submit"
            >
              Confirm Your Presence
            </button>
          </form>
        ) : (
          /* =================================================
             SUCCESS STATE
          ================================================= */

          <div className="rsvp-success">

            <div className="rsvp-success-symbol">
              ✦
            </div>

            <h3>
              Thank You,
              <br />
              {formData.name}
            </h3>

            <p>
              {formData.attendance === "accept"
                ? "We are delighted to have you celebrate this beautiful occasion with us."
                : "Thank you for letting us know. You will be missed on our special day."}
            </p>

            <div className="rsvp-success-divider">
              <span />
              <strong>ॐ</strong>
              <span />
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default RSVP;