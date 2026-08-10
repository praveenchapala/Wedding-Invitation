import { useLayoutEffect, useRef } from "react";
import { createTempleAnimation } from "../animations/templeAnimation";

import templeImage from "../assets/temple/temple.png";
import bellImage from "../assets/temple/bell.png";
import flowersImage from "../assets/temple/flowers.png";
import diyaImage from "../assets/temple/diya.png";

function TempleHero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = createTempleAnimation(
      sectionRef.current
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="temple-hero"
    >
      {/* TEMPLE BACKGROUND */}

      <div className="temple-artwork">
        <img
          src={templeImage}
          alt=""
          className="temple-image"
        />
      </div>

      {/* OVERLAY */}

      <div className="temple-overlay" />

      {/* LEFT BELL */}

      <div className="temple-bell temple-bell-left">
        <img
          src={bellImage}
          alt=""
        />
      </div>

      {/* RIGHT BELL */}

      <div className="temple-bell temple-bell-right">
        <img
          src={bellImage}
          alt=""
        />
      </div>

      {/* LEFT FLOWERS */}

      <div className="temple-flowers temple-flowers-left">
        <img
          src={flowersImage}
          alt=""
        />
      </div>

      {/* RIGHT FLOWERS */}

      <div className="temple-flowers temple-flowers-right">
        <img
          src={flowersImage}
          alt=""
        />
      </div>

      {/* DIYA */}

      <div className="temple-diya">
        <img
          src={diyaImage}
          alt=""
        />
      </div>

      {/* CONTENT */}

      <div className="temple-content">
        <p className="sanskrit">
          ॐ श्री गणेशाय नमः
        </p>

        <p className="blessing">
          With the blessings of the Almighty
        </p>

        <h1 className="hero-title">
          Our Beautiful Beginning
        </h1>

        <p className="scroll-text">
          Scroll to begin our story
        </p>
      </div>
    </section>
  );
}

export default TempleHero;