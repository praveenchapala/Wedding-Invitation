import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createTempleAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const artwork = section.querySelector(".temple-image");
    const overlay = section.querySelector(".temple-overlay");
    const content = section.querySelector(".temple-content");

    const leftBell = section.querySelector(".temple-bell-left");
    const rightBell = section.querySelector(".temple-bell-right");

    const leftFlowers = section.querySelector(".temple-flowers-left");
    const rightFlowers = section.querySelector(".temple-flowers-right");

    const diya = section.querySelector(".temple-diya");

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    if (
      !artwork ||
      !overlay ||
      !content ||
      !leftBell ||
      !rightBell ||
      !leftFlowers ||
      !rightFlowers ||
      !diya
    ) {
      return;
    }

    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(artwork, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: isMobile ? 1.08 : 1.02,
    });

    gsap.set(content, {
      xPercent: -50,
      y: 0,
      opacity: 1,
    });

    /* =====================================================
       AMBIENT DECORATION
    ===================================================== */

    // LEFT BELL
    gsap.to(leftBell, {
      rotation: 3,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "top center",
    });

    // RIGHT BELL
    gsap.to(rightBell, {
      rotation: -3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "top center",
    });

    /* =====================================================
       FLOWERS

       Both flowers now have IDENTICAL behaviour.
       The right flower no longer rotates.
    ===================================================== */

    gsap.to(leftFlowers, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(rightFlowers, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* =====================================================
       DIYA
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
          ? "+=90%"
          : "+=140%",

        scrub: 0.8,

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
        y: isMobile ? -35 : -100,
        scale: isMobile ? 1.13 : 1.10,
        ease: "none",
      },
      0
    );

    /* =====================================================
       TEXT EXIT
    ===================================================== */

    timeline.to(
      content,
      {
        y: isMobile ? -55 : -120,
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
        opacity: 0.82,
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
        y: isMobile ? -30 : -70,
        rotation: -4,
        ease: "none",
      },
      0
    );

    timeline.to(
      rightBell,
      {
        y: isMobile ? -25 : -60,
        rotation: 4,
        ease: "none",
      },
      0
    );

    /* =====================================================
       FLOWERS

       Both flowers move upward and fade out together.
       No rotation is applied to either flower.
    ===================================================== */

    timeline.to(
      leftFlowers,
      {
        y: isMobile ? -20 : -55,
        opacity: 0,
        ease: "none",
      },
      0
    );

    timeline.to(
      rightFlowers,
      {
        y: isMobile ? -20 : -55,
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
        y: isMobile ? -15 : -40,
        opacity: 0,
        ease: "none",
      },
      0
    );

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