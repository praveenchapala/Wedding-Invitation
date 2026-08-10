import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createCeremonyAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    /* =====================================================
       ELEMENTS
    ===================================================== */

    const bride = section.querySelector(
      ".ceremony-bride"
    );

    const groom = section.querySelector(
      ".ceremony-groom"
    );

    const garland = section.querySelector(
      ".ceremony-garland"
    );

    const content = section.querySelector(
      ".ceremony-content"
    );

    const glow = section.querySelector(
      ".ceremony-glow"
    );

    const symbol = section.querySelector(
      ".ceremony-symbol"
    );

    const bottom = section.querySelector(
      ".ceremony-bottom"
    );

    const lights = section.querySelectorAll(
      ".ceremony-light"
    );

    const petals = section.querySelectorAll(
      ".ceremony-petals"
    );

    /* =====================================================
       DEVICE CHECK
    ===================================================== */

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    const isSmallMobile = window.matchMedia(
      "(max-width: 390px)"
    ).matches;

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
      Keep the garland mathematically centered.
    */

    gsap.set(garland, {
      xPercent: -50,
      scale: 0.35,
      opacity: 0,
      y: 40,
    });

    /*
      Text starts slightly below.
    */

    gsap.set(content, {
      opacity: 0,
      y: 35,
    });

    /*
      Golden glow.
    */

    gsap.set(glow, {
      opacity: 0,
      scale: 0.65,
    });

    /*
      Om symbol.
    */

    gsap.set(symbol, {
      opacity: 0,
      scale: 0.5,
    });

    /*
      Bottom message.
    */

    gsap.set(bottom, {
      opacity: 0,
      y: 25,
    });

    /*
      Side lights.
    */

    gsap.set(lights, {
      opacity: 0,
    });

    /*
      Petals.
    */

    gsap.set(petals, {
      opacity: 0,
      y: -60,
    });

    /* =====================================================
       MOBILE MOVEMENT VALUES
    ===================================================== */

    /*
      On mobile the characters need stronger inward
      movement because the available horizontal space
      is much smaller.
    */

    const brideFinalX = isSmallMobile
      ? 38
      : isMobile
        ? 32
        : 18;

    const groomFinalX = isSmallMobile
      ? -38
      : isMobile
        ? -32
        : -18;

    /* =====================================================
       MAIN SCROLL TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        /*
          Shorter scroll distances prevent giant
          empty-looking areas on mobile.
        */

        end: isSmallMobile
  ? "+=100%"
  : isMobile
    ? "+=110%"
    : "+=145%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        pinSpacing: true,
      },
    });

    /* =====================================================
       PHASE 1
       TITLE APPEARS
    ===================================================== */

    timeline.to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 0.28,
        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       PHASE 2
       BRIDE ENTERS
    ===================================================== */

    timeline.to(
      bride,
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.32,
        ease: "power3.out",
      },
      0.08
    );

    /* =====================================================
       PHASE 2
       GROOM ENTERS
    ===================================================== */

    timeline.to(
      groom,
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.32,
        ease: "power3.out",
      },
      0.08
    );

    /* =====================================================
       PHASE 3
       COUPLE MOVES TOWARD EACH OTHER
    ===================================================== */

    timeline.to(
      bride,
      {
        xPercent: brideFinalX,
        duration: 0.42,
        ease: "power2.inOut",
      },
      0.36
    );

    timeline.to(
      groom,
      {
        xPercent: groomFinalX,
        duration: 0.42,
        ease: "power2.inOut",
      },
      0.36
    );

    /* =====================================================
       PHASE 4
       GOLDEN GLOW
    ===================================================== */

    timeline.to(
      glow,
      {
        opacity: 1,
        scale: 1,
        duration: 0.32,
        ease: "power2.out",
      },
      0.28
    );

    /* =====================================================
       PHASE 5
       SIDE LIGHTS
    ===================================================== */

    timeline.to(
      lights,
      {
        opacity: 1,
        duration: 0.28,
        ease: "power2.out",
      },
      0.38
    );

    /* =====================================================
       PHASE 6
       GARLAND REVEAL
    ===================================================== */

    timeline.to(
      garland,
      {
        xPercent: -50,

        opacity: 1,

        scale: isSmallMobile
          ? 0.58
          : isMobile
            ? 0.66
            : 0.82,

        y: 0,

        duration: 0.38,

        ease: "back.out(1.5)",
      },
      0.65
    );

    /* =====================================================
       PHASE 7
       OM SYMBOL
    ===================================================== */

    timeline.to(
      symbol,
      {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "back.out(1.7)",
      },
      0.82
    );

    /* =====================================================
       PHASE 8
       PETALS
    ===================================================== */

    petals.forEach((petal, index) => {
      timeline.to(
        petal,
        {
          opacity: 0.85,

          y: isMobile
            ? 15 + index * 8
            : 35 + index * 12,

          duration: 0.35,

          ease: "power1.out",
        },
        0.82 + index * 0.04
      );
    });

    /* =====================================================
       PHASE 9
       BOTTOM MESSAGE
    ===================================================== */

    timeline.to(
      bottom,
      {
        opacity: 1,

        y: 0,

        duration: 0.28,

        ease: "power3.out",
      },
      1.02
    );

    /* =====================================================
       AMBIENT BRIDE FLOAT
       
       IMPORTANT:
       Do NOT animate Y here because the scroll timeline
       already controls the important transform state.
    ===================================================== */

    gsap.to(bride, {
      rotation: 0.5,

      duration: 3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      transformOrigin: "bottom center",
    });

    /* =====================================================
       AMBIENT GROOM FLOAT
    ===================================================== */

    gsap.to(groom, {
      rotation: -0.5,

      duration: 3.3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      transformOrigin: "bottom center",
    });

    /* =====================================================
       GARLAND FLOAT
       
       Use scale/rotation instead of Y so it does not
       conflict with ScrollTrigger's Y animation.
    ===================================================== */

    gsap.to(garland, {
      rotation: 2,

      scale: isMobile
        ? 0.68
        : 0.84,

      duration: 2.5,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      transformOrigin: "center center",
    });

    /* =====================================================
       PETAL FLOATING
    ===================================================== */

    petals.forEach((petal, index) => {
      gsap.to(petal, {
        x: index % 2 === 0
          ? 12
          : -12,

        rotation:
          index % 2 === 0
            ? 7
            : -7,

        duration:
          3 + index * 0.4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: index * 0.25,
      });
    });

    /* =====================================================
       REFRESH SCROLLTRIGGER
    ===================================================== */

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, section);

  /* =====================================================
     CLEANUP
  ===================================================== */

  return () => {
    context.revert();
  };
}