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
       SAFETY CHECK
    ===================================================== */

    if (
      !bride ||
      !groom ||
      !garland ||
      !content ||
      !glow ||
      !particles
    ) {
      return;
    }

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
      IMPORTANT:
      Do NOT use xPercent here.

      The garland is horizontally centered by CSS:

        left: 50%;
        translate: -50% -50%;

      GSAP only controls:
        - scale
        - opacity
        - y
    */

    gsap.set(garland, {
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
          Give mobile enough scroll distance for:

          1. Bride entrance
          2. Groom entrance
          3. Couple moving together
          4. Garland reveal
          5. Text reveal
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

    /*
      Bride enters from left.
    */

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

    /*
      Groom enters from right.
    */

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
      After entering, both characters move toward
      the center.

      Desktop:
      Moderate inward movement.

      Mobile:
      Stronger inward movement because the characters
      occupy more of the screen width.
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
       PHASE 3
       GARLAND REVEAL
    ===================================================== */

    /*
      IMPORTANT:

      No xPercent.
      No x.
      No left/right changes.

      CSS keeps the garland centered.

      GSAP only controls scale, opacity and y.
    */

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
       PHASE 4
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
       AMBIENT BRIDE FLOAT
    ===================================================== */

    /*
      This uses y only.

      It does not affect the horizontal xPercent
      positioning of the bride.
    */

    gsap.to(bride, {
      y: -8,

      duration: 3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      delay: 0.5,
    });

    /* =====================================================
       AMBIENT GROOM FLOAT
    ===================================================== */

    gsap.to(groom, {
      y: -6,

      duration: 3.4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      delay: 0.7,
    });

    /* =====================================================
       GARLAND AMBIENT MOTION
    ===================================================== */

    /*
      IMPORTANT:

      Do NOT animate y here.

      The scroll timeline already controls garland y.

      Instead, use a very subtle rotation so the
      garland has life without fighting the scroll
      animation.
    */

    gsap.to(garland, {
      rotation: 2,

      duration: 2.6,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      delay: 1,
    });

    /* =====================================================
       GARLAND SCALE PULSE
    ===================================================== */

    /*
      Very subtle pulse.

      This works together with the scroll reveal
      without changing its position.
    */

    gsap.to(garland, {
      scale: isMobile ? 0.80 : 0.87,

      duration: 2.8,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      delay: 1.2,
    });

    /* =====================================================
       PARTICLE REFRESH
    ===================================================== */

    ScrollTrigger.refresh();
  }, section);

  /* =====================================================
     CLEANUP
  ===================================================== */

  return () => {
    context.revert();
  };
}