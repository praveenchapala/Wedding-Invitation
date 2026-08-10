import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createCoupleAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    /* =====================================================
       ELEMENTS
    ===================================================== */

    const bride = section.querySelector(".couple-bride");

    const groom = section.querySelector(".couple-groom");

    const garland = section.querySelector(".couple-garland");

    const content = section.querySelector(".couple-content");

    const glow = section.querySelector(".couple-glow");

    const particles = section.querySelector(".couple-particles");

    /* =====================================================
       DEVICE CHECK
    ===================================================== */

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =====================================================
       INITIAL STATES
    ===================================================== */

    /*
      Bride starts outside the left side.
    */

    gsap.set(bride, {
      xPercent: -120,
      opacity: 0,
    });

    /*
      Groom starts outside the right side.
    */

    gsap.set(groom, {
      xPercent: 120,
      opacity: 0,
    });

    /*
      Garland starts small and slightly below.
    */

    gsap.set(garland, {
      xPercent: -50,
      scale: 0.5,
      opacity: 0,
      y: 30,
    });

    /*
      Text starts slightly below.
    */

    gsap.set(content, {
      opacity: 0,
      y: 40,
    });

    /*
      Glow starts invisible.
    */

    gsap.set(glow, {
      opacity: 0,
      scale: 0.6,
    });

    /*
      Particles start invisible.
    */

    gsap.set(particles, {
      opacity: 0,
    });

    /* =====================================================
       MAIN SCROLL TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        /*
          Give mobile enough scroll distance for the
          characters to visibly move toward each other.
        */

        end: isMobile
          ? "+=180%"
          : "+=160%",

        scrub: 1,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       PHASE 1
       CHARACTERS ENTER
    ===================================================== */

    timeline.to(
      bride,
      {
        xPercent: 0,
        opacity: 1,

        duration: 0.35,

        ease: "power3.out",
      },
      0
    );

    timeline.to(
      groom,
      {
        xPercent: 0,
        opacity: 1,

        duration: 0.35,

        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       PHASE 2
       COUPLE MOVES CLOSER
    ===================================================== */

    /*
      Desktop:
      Move them moderately toward the center.

      Mobile:
      Give them a stronger inward movement because
      the characters start much farther apart visually.
    */

    timeline.to(
      bride,
      {
        xPercent: isMobile ? 22 : 18,

        duration: 0.45,

        ease: "power2.inOut",
      },
      0.35
    );

    timeline.to(
      groom,
      {
        xPercent: isMobile ? -22 : -18,

        duration: 0.45,

        ease: "power2.inOut",
      },
      0.35
    );

    /* =====================================================
       GOLDEN GLOW
    ===================================================== */

    timeline.to(
      glow,
      {
        opacity: 1,

        scale: 1,

        duration: 0.35,

        ease: "power2.out",
      },
      0.15
    );

    /* =====================================================
       PARTICLES
    ===================================================== */

    timeline.to(
      particles,
      {
        opacity: 1,

        duration: 0.3,

        ease: "power2.out",
      },
      0.2
    );

    /* =====================================================
       GARLAND REVEAL
    ===================================================== */

    timeline.to(
      garland,
      {
        scale: isMobile ? 0.78 : 0.85,

        opacity: 1,

        y: 0,

        duration: 0.3,

        ease: "back.out(1.4)",
      },
      0.62
    );

    /* =====================================================
       TEXT REVEAL
    ===================================================== */

    timeline.to(
      content,
      {
        opacity: 1,

        y: 0,

        duration: 0.3,

        ease: "power3.out",
      },
      0.72
    );

    /* =====================================================
       AMBIENT FLOATING
       
       These run continuously after the scroll animation.
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