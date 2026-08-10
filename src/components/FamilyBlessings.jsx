import { useLayoutEffect, useRef } from "react";
import { createFamilyAnimation } from "../animations/familyAnimation";

function FamilyBlessings() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createFamilyAnimation(sectionRef.current);

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="family-section"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="family-background" />

      <div className="family-glow" />

      {/* =================================================
          DECORATIVE ELEMENTS
      ================================================= */}

      <div className="family-ornament family-ornament-top">
        ✦
      </div>

      <div className="family-ornament family-ornament-bottom">
        ✦
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="family-content">

        <p className="family-eyebrow">
          With The Blessings Of Our Families
        </p>

        <div className="family-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <p className="family-invitation">
          We cordially invite you and your family
          <br />
          to celebrate the wedding of
        </p>

        {/* =================================================
            NAMES
        ================================================= */}

        <div className="family-couple">

          <div className="family-person">
            <p className="family-role">
              Groom
            </p>

            <h2>
              C. Chandra Mouli
            </h2>
          </div>

          <div className="family-ampersand">
            &
          </div>

          <div className="family-person">
            <p className="family-role">
              Bride
            </p>

            <h2>
              B. Kalyani
            </h2>
          </div>

        </div>

        <div className="family-divider family-divider-bottom">
          <span />
          <strong>ॐ</strong>
          <span />
        </div>

        <p className="family-message">
          Two families,
          <br />
          one beautiful beginning.
        </p>

      </div>
    </section>
  );
}

export default FamilyBlessings;