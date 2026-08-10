import { useLayoutEffect, useRef } from "react";
import { createCoupleAnimation } from "../animations/coupleAnimation";

import brideImage from "../assets/couple/bride.png";
import groomImage from "../assets/couple/groom.png";
import garlandImage from "../assets/couple/garland.png";

function CoupleReveal() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createCoupleAnimation(
      sectionRef.current
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="couple-reveal"
    >
      {/* BACKGROUND */}

      <div className="couple-background" />

      {/* GOLDEN GLOW */}

      <div className="couple-glow" />

      {/* PARTICLES */}

      <div className="couple-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* BRIDE */}

      <div className="couple-bride">
        <img
          src={brideImage}
          alt="Bride"
        />
      </div>

      {/* GROOM */}

      <div className="couple-groom">
        <img
          src={groomImage}
          alt="Groom"
        />
      </div>

      {/* GARLAND */}

      <div className="couple-garland">
        <img
          src={garlandImage}
          alt=""
        />
      </div>

      {/* CONTENT */}

      <div className="couple-content">
        <p className="couple-eyebrow">
          And then, two paths became one...
        </p>

        <h2>
          Two Hearts,
          <br />
          One Beautiful Beginning
        </h2>

        <div className="couple-divider">
          <span />
          <span>✦</span>
          <span />
        </div>
      </div>
    </section>
  );
}

export default CoupleReveal;