import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createTempleAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    /* =====================================================
       ELEMENTS
    ===================================================== */

    const artwork = section.querySelector(".temple-image");
    const overlay = section.querySelector(".temple-overlay");
    const content = section.querySelector(".temple-content");

    const leftBell = section.querySelector(".temple-bell-left");
    const rightBell = section.querySelector(".temple-bell-right");

    const leftFlowers = section.querySelector(
      ".temple-flowers-left"
    );

    const rightFlowers = section.querySelector(
      ".temple-flowers-right"
    );

    const diya = section.querySelector(".temple-diya");

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(artwork, {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
    });

    /*
      IMPORTANT:
      Do NOT animate x on the content.

      The content is horizontally centered using:
      left: 50%
      transform: translateX(-50%)

      GSAP will only animate y and opacity.
    */

    gsap.set(content, {
      xPercent: -50,
      y: 0,
      opacity: 1,
    });

    /* =====================================================
       AMBIENT BELL ANIMATION
    ===================================================== */

    gsap.to(leftBell, {
      rotation: 3,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "top center",
    });

    gsap.to(rightBell, {
      rotation: -3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "top center",
    });

    /* =====================================================
       FLOWER AMBIENT MOTION
    ===================================================== */

    gsap.to(leftFlowers, {
      y: -10,
      rotation: 1.5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(rightFlowers, {
      y: -8,
      rotation: -1.5,
      duration: 3.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* =====================================================
       DIYA AMBIENT MOTION
    ===================================================== */

    gsap.to(diya, {
      y: -4,
      scale: 1.03,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* =====================================================
       SCROLL TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=110%"
          : "+=150%",

        scrub: 1,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       TEMPLE MOVEMENT
    ===================================================== */

    timeline.to(
      artwork,
      {
        yPercent: -50,
        xPercent: -50,

        y: isMobile ? -70 : -140,

        scale: isMobile ? 1.16 : 1.12,

        ease: "none",
      },
      0
    );

    /* =====================================================
       TEXT MOVEMENT

       IMPORTANT:
       xPercent remains -50 so the content stays centered.
    ===================================================== */

    timeline.to(
      content,
      {
        xPercent: -50,

        y: isMobile ? -90 : -150,

        opacity: 0,

        ease: "none",
      },
      0
    );

    /* =====================================================
       OVERLAY
    ===================================================== */

    timeline.to(
      overlay,
      {
        opacity: 0.85,

        ease: "none",
      },
      0
    );

    /* =====================================================
       BELLS
    ===================================================== */

    timeline.to(
      leftBell,
      {
        y: isMobile ? -50 : -90,

        rotation: -5,

        ease: "none",
      },
      0
    );

    timeline.to(
      rightBell,
      {
        y: isMobile ? -40 : -80,

        rotation: 5,

        ease: "none",
      },
      0
    );

    /* =====================================================
       FLOWERS
    ===================================================== */

    timeline.to(
      leftFlowers,
      {
        y: isMobile ? -35 : -70,

        opacity: 0,

        ease: "none",
      },
      0
    );

    timeline.to(
      rightFlowers,
      {
        y: isMobile ? -35 : -70,

        opacity: 0,

        ease: "none",
      },
      0
    );

    /* =====================================================
       DIYA
    ===================================================== */

    timeline.to(
      diya,
      {
        y: isMobile ? -25 : -50,

        opacity: 0,

        ease: "none",
      },
      0
    );
  }, section);

  return () => {
    context.revert();
  };
}