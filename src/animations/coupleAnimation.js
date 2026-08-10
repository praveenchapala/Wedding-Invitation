import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createCoupleAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const bride = section.querySelector(
      ".couple-bride"
    );

    const groom = section.querySelector(
      ".couple-groom"
    );

    const garland = section.querySelector(
      ".couple-garland"
    );

    const content = section.querySelector(
      ".couple-content"
    );

    const glow = section.querySelector(
      ".couple-glow"
    );

    const particles = section.querySelector(
      ".couple-particles"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =====================================================
       INITIAL STATE
    ===================================================== */

    gsap.set(bride, {
      xPercent: -110,
      opacity: 0,
    });

    gsap.set(groom, {
      xPercent: 110,
      opacity: 0,
    });

    gsap.set(garland, {
      scale: 0.6,
      opacity: 0,
      y: 30,
    });

    gsap.set(content, {
      opacity: 0,
      y: 40,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.6,
    });

    gsap.set(particles, {
      opacity: 0,
    });

    /* =====================================================
       ENTRANCE TIMELINE
    ===================================================== */

    const entrance = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top 80%",

        end: "top 20%",

        scrub: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       BRIDE ENTERS FROM LEFT
    ===================================================== */

    entrance.to(
      bride,
      {
        xPercent: 0,
        opacity: 1,

        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       GROOM ENTERS FROM RIGHT
    ===================================================== */

    entrance.to(
      groom,
      {
        xPercent: 0,
        opacity: 1,

        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       GOLDEN GLOW
    ===================================================== */

    entrance.to(
      glow,
      {
        opacity: 1,
        scale: 1,

        ease: "power2.out",
      },
      0.15
    );

    /* =====================================================
       PARTICLES
    ===================================================== */

    entrance.to(
      particles,
      {
        opacity: 1,

        ease: "power2.out",
      },
      0.2
    );

    /* =====================================================
       GARLAND REVEAL
    ===================================================== */

    entrance.to(
      garland,
      {
        scale: isMobile ? 0.72 : 0.85,

        opacity: 1,

        y: 0,

        ease: "back.out(1.4)",
      },
      0.45
    );

    /* =====================================================
       TEXT REVEAL
    ===================================================== */

    entrance.to(
      content,
      {
        opacity: 1,

        y: 0,

        ease: "power3.out",
      },
      0.6
    );

    /* =====================================================
       SUBTLE COUPLE FLOAT
    ===================================================== */

    gsap.to(bride, {
      y: -8,

      duration: 3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    gsap.to(groom, {
      y: -6,

      duration: 3.4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    /* =====================================================
       GARLAND FLOAT
    ===================================================== */

    gsap.to(garland, {
      y: -5,

      duration: 2.4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });
  }, section);

  return () => {
    context.revert();
  };
}