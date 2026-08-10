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
      Bride enters from the left.
    */

    gsap.set(bride, {
      xPercent: -120,
      opacity: 0,
    });

    /*
      Groom enters from the right.
    */

    gsap.set(groom, {
      xPercent: 120,
      opacity: 0,
    });

    /*
      IMPORTANT:
      Keep the garland horizontally centered.

      CSS controls:
        left: 50%
        transform: translateX(-50%)

      GSAP controls only:
        scale
        opacity
        y
        rotation

      Do NOT animate x or xPercent.
    */

    gsap.set(garland, {
      x: 0,
      y: 30,
      scale: 0.5,
      opacity: 0,
      rotation: 0,
    });

    /*
      Title starts slightly below.
    */

    gsap.set(content, {
      opacity: 0,
      y: 30,
    });

    /*
      Glow starts invisible.
    */

    gsap.set(glow, {
      opacity: 0,
      scale: 0.65,
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

        end: isMobile
          ? "+=150%"
          : "+=160%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       PHASE 1
       COUPLE ENTERS
    ===================================================== */

    timeline.to(
      bride,
      {
        xPercent: 0,
        opacity: 1,
        ease: "power3.out",
      },
      0
    );

    timeline.to(
      groom,
      {
        xPercent: 0,
        opacity: 1,
        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       PHASE 2
       COUPLE MOVES TOWARD EACH OTHER
    ===================================================== */

    /*
      Mobile gets stronger inward movement so the
      couple visibly comes together on small screens.
    */

    timeline.to(
      bride,
      {
        xPercent: isMobile ? 28 : 18,
        ease: "power2.inOut",
      },
      0.35
    );

    timeline.to(
      groom,
      {
        xPercent: isMobile ? -28 : -18,
        ease: "power2.inOut",
      },
      0.35
    );

    /* =====================================================
       PHASE 3
       GOLDEN GLOW
    ===================================================== */

    timeline.to(
      glow,
      {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      },
      0.2
    );

    /* =====================================================
       PHASE 4
       PARTICLES
    ===================================================== */

    timeline.to(
      particles,
      {
        opacity: 1,
        ease: "power2.out",
      },
      0.25
    );

    /* =====================================================
       PHASE 5
       GARLAND REVEAL
    ===================================================== */

    /*
      IMPORTANT:

      The garland remains at the exact horizontal center.

      We do NOT use:
        x
        xPercent
        left
        right

      Only vertical movement + scale + opacity.
    */

    timeline.to(
      garland,
      {
        x: 0,
        y: 0,

        scale: isMobile
          ? 0.72
          : 0.85,

        opacity: 1,

        rotation: 0,

        ease: "back.out(1.2)",
      },
      0.65
    );

    /* =====================================================
       PHASE 6
       TITLE REVEAL
    ===================================================== */

    timeline.to(
      content,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.75
    );

    /* =====================================================
       AMBIENT BRIDE FLOAT
    ===================================================== */

    gsap.to(bride, {
      y: -6,

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
      y: -5,

      duration: 3.3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      delay: 0.7,
    });

    /* =====================================================
       GARLAND AMBIENT ROTATION
    ===================================================== */

    /*
      Only rotate the garland slightly.

      Do NOT animate:
        x
        xPercent
        y

      This prevents the garland from drifting toward
      the groom's head.
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
       REFRESH SCROLLTRIGGER
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