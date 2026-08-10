import { useLayoutEffect, useRef } from "react";
import { createCeremonyAnimation } from "../animations/ceremonyAnimation";

import brideImage from "../assets/couple/bride.png";
import groomImage from "../assets/couple/groom.png";
import garlandImage from "../assets/couple/garland.png";
import petalsImage from "../assets/ceremony/petals.png";

function GarlandCeremony() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createCeremonyAnimation(sectionRef.current);

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="garland-ceremony"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="ceremony-background" />

      {/* =================================================
          GOLDEN CENTER GLOW
      ================================================= */}

      <div className="ceremony-glow" />

      {/* =================================================
          AMBIENT LIGHTS
      ================================================= */}

      <div className="ceremony-light ceremony-light-left" />

      <div className="ceremony-light ceremony-light-right" />

      {/* =================================================
          PETALS
      ================================================= */}

      <div className="ceremony-petals ceremony-petals-1">
        <img
          src={petalsImage}
          alt=""
        />
      </div>

      <div className="ceremony-petals ceremony-petals-2">
        <img
          src={petalsImage}
          alt=""
        />
      </div>

      <div className="ceremony-petals ceremony-petals-3">
        <img
          src={petalsImage}
          alt=""
        />
      </div>

      <div className="ceremony-petals ceremony-petals-4">
        <img
          src={petalsImage}
          alt=""
        />
      </div>

      {/* =================================================
          CEREMONY CONTENT
      ================================================= */}

      <div className="ceremony-content">
        <p className="ceremony-eyebrow">
          A Moment To Cherish
        </p>

        <h2>
          And So,
          <br />
          Their Forever Begins
        </h2>

        <div className="ceremony-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>
      </div>

      {/* =================================================
          BRIDE
      ================================================= */}

      <div className="ceremony-bride">
        <img
          src={brideImage}
          alt="Bride"
        />
      </div>

      {/* =================================================
          GROOM
      ================================================= */}

      <div className="ceremony-groom">
        <img
          src={groomImage}
          alt="Groom"
        />
      </div>

      {/* =================================================
          GARLAND
      ================================================= */}

      <div className="ceremony-garland">
        <img
          src={garlandImage}
          alt="Wedding garland"
        />
      </div>

      {/* =================================================
          OM SYMBOL
      ================================================= */}

      <div className="ceremony-symbol">
        ॐ
      </div>

      {/* =================================================
          BOTTOM MESSAGE
      ================================================= */}

      <div className="ceremony-bottom">
        <p>
          With love, blessings and the promise
          <br />
          of a beautiful journey together
        </p>
      </div>
    </section>
  );
}

export default GarlandCeremony;