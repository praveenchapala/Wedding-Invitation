import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const context = gsap.context(() => {
      const elements = section.querySelectorAll(
        ".wedding-footer-animate"
      );

      const glow = section.querySelector(
        ".wedding-footer-glow"
      );

      const symbol = section.querySelector(
        ".wedding-footer-symbol"
      );

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(elements, {
        opacity: 0,
        y: 30,
      });

      gsap.set(symbol, {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(glow, {
        opacity: 0,
        scale: 0.7,
      });

      /* =====================================================
         SCROLL ANIMATION
      ===================================================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      /* =====================================================
         GLOW REVEAL
      ===================================================== */

      timeline.to(
        glow,
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        0
      );

      /* =====================================================
         OM SYMBOL
      ===================================================== */

      timeline.to(
        symbol,
        {
          opacity: 1,
          scale: 1,
          ease: "back.out(1.5)",
        },
        0.1
      );

      /* =====================================================
         CONTENT REVEAL
      ===================================================== */

      timeline.to(
        elements,
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.2
      );

      /* =====================================================
         AMBIENT GLOW
      ===================================================== */

      gsap.to(glow, {
        scale: 1.08,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="wedding-footer"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="wedding-footer-background" />

      <div className="wedding-footer-glow" />

      {/* =================================================
          DECORATIVE SYMBOL
      ================================================= */}

      <div className="wedding-footer-symbol">
        ॐ
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="wedding-footer-content">

        {/* EYEBROW */}

        <p className="wedding-footer-eyebrow wedding-footer-animate">
          With Grateful Hearts
        </p>

        {/* TITLE */}

        <h2 className="wedding-footer-title wedding-footer-animate">
          Thank You
        </h2>

        {/* DIVIDER */}

        <div className="wedding-footer-divider wedding-footer-animate">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        {/* MESSAGE */}

        <p className="wedding-footer-message wedding-footer-animate">
          We are grateful to have you
          <br />
          as a part of our journey.
        </p>

        {/* =================================================
            NAMES
        ================================================= */}

        <div className="wedding-footer-names wedding-footer-animate">

          <span>
            C. Chandra Mouli
          </span>

          <strong>
            &
          </strong>

          <span>
            B. Kalyani
          </span>

        </div>

        {/* =================================================
            DATE
        ================================================= */}

        <div className="wedding-footer-date wedding-footer-animate">

          <span>
            26
          </span>

          <span>
            August 2026
          </span>

        </div>

        {/* =================================================
            BLESSING
        ================================================= */}

        <p className="wedding-footer-blessing wedding-footer-animate">
          May our beginning be blessed with love,
          <br />
          laughter, togetherness and a lifetime
          <br />
          of happiness.
        </p>

        {/* =================================================
            FINAL MESSAGE
        ================================================= */}

        <div className="wedding-footer-final wedding-footer-animate">

          <span>
            Until we meet, with love.
          </span>

          <strong>
            The Beginning of Forever
          </strong>

        </div>

        {/* =================================================
            CREATOR SIGNATURE
        ================================================= */}

        <p className="wedding-footer-creator wedding-footer-animate">
          Made with Love by{" "}
          <strong>
            Chapala Praveen
          </strong>
        </p>
</div>
    </footer>
  );
}

export default Footer;