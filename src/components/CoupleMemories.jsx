import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import brideGroom1 from "../assets/couple/bridegroom1.jpeg";
import brideGroom2 from "../assets/couple/bridegroom2.jpeg";

gsap.registerPlugin(ScrollTrigger);

function CoupleMemories() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const imageLeft = section.querySelector(
        ".memories-image-left"
      );

      const imageRight = section.querySelector(
        ".memories-image-right"
      );

      const eyebrow = section.querySelector(
        ".memories-eyebrow"
      );

      const title = section.querySelector(
        ".memories-title"
      );

      const message = section.querySelector(
        ".memories-message"
      );

      const date = section.querySelector(
        ".memories-date"
      );

      const ornament = section.querySelector(
        ".memories-ornament"
      );

      const glow = section.querySelector(
        ".memories-glow"
      );

      /* ==========================================
         INITIAL STATES
      ========================================== */

      gsap.set(imageLeft, {
        opacity: 0,
        x: -100,
        rotate: -5,
        scale: 0.9,
      });

      gsap.set(imageRight, {
        opacity: 0,
        x: 100,
        rotate: 5,
        scale: 0.9,
      });

      gsap.set(
        [
          eyebrow,
          title,
          message,
          date,
          ornament,
        ],
        {
          opacity: 0,
          y: 35,
        }
      );

      gsap.set(glow, {
        opacity: 0,
        scale: 0.6,
      });

      /* ==========================================
         MAIN SCROLL ANIMATION
      ========================================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        glow,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      timeline.to(
        imageLeft,
        {
          opacity: 1,
          x: 0,
          rotate: -2,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0
      );

      timeline.to(
        imageRight,
        {
          opacity: 1,
          x: 0,
          rotate: 2,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0.12
      );

      timeline.to(
        eyebrow,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.35
      );

      timeline.to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.45
      );

      timeline.to(
        ornament,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        0.6
      );

      timeline.to(
        message,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.7
      );

      timeline.to(
        date,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        0.82
      );

      /* ==========================================
         SUBTLE PHOTO FLOAT
      ========================================== */

      gsap.to(imageLeft, {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imageRight, {
        y: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ==========================================
         GLOW BREATHING
      ========================================== */

      gsap.to(glow, {
        scale: 1.08,
        opacity: 0.75,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="couple-memories"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="memories-background" />

      <div className="memories-glow" />

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="memories-content">

        <p className="memories-eyebrow">
          A Little Glimpse of Us
        </p>

        <h2 className="memories-title">
          Before We Begin
          <br />
          Forever
        </h2>

        <div className="memories-ornament">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <p className="memories-message">
          From this beautiful moment
          <br />
          to the beginning of a lifetime together.
        </p>

        <p className="memories-date">
          See You On
          <span>
            26 August 2026
          </span>
        </p>

      </div>

      {/* ==========================================
          PHOTOGRAPHS
      ========================================== */}

      <div className="memories-gallery">

        <div className="memories-photo memories-image-left">
          <img
            src={brideGroom1}
            alt="Bride and groom together"
          />

          <div className="memories-photo-shine" />
        </div>

        <div className="memories-photo memories-image-right">
          <img
            src={brideGroom2}
            alt="Bride and groom sharing a moment"
          />

          <div className="memories-photo-shine" />
        </div>

      </div>

      {/* ==========================================
          BOTTOM MESSAGE
      ========================================== */}

      <div className="memories-bottom">
        <span>With love</span>
        <strong>Until We Meet</strong>
      </div>
    </section>
  );
}

export default CoupleMemories;