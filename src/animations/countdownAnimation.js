import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createCountdownAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const content = section.querySelector(
      ".countdown-content"
    );

    const glow = section.querySelector(
      ".countdown-glow"
    );

    const particles = section.querySelector(
      ".countdown-particles"
    );

    const units = section.querySelectorAll(
      ".countdown-unit"
    );

    const separators = section.querySelectorAll(
      ".countdown-separator"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
      !content ||
      !glow ||
      !particles
    ) {
      return;
    }

    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(content, {
      opacity: 0,
      y: 60,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.6,
    });

    gsap.set(particles, {
      opacity: 0,
    });

    gsap.set(units, {
      opacity: 0,
      y: 35,
      scale: 0.9,
    });

    gsap.set(separators, {
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
          ? "+=125%"
          : "+=145%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       CONTENT REVEAL
    ===================================================== */

    timeline.to(
      content,
      {
        opacity: 1,

        y: 0,

        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       GOLDEN GLOW
    ===================================================== */

    timeline.to(
      glow,
      {
        opacity: 1,

        scale: 1,

        ease: "power2.out",
      },
      0.1
    );

    /* =====================================================
       PARTICLES
    ===================================================== */

    timeline.to(
      particles,
      {
        opacity: 1,

        ease: "power2.out",
      },
      0.15
    );

    /* =====================================================
       COUNTDOWN UNITS
    ===================================================== */

    timeline.to(
      units,
      {
        opacity: 1,

        y: 0,

        scale: 1,

        stagger: 0.08,

        ease: "back.out(1.4)",
      },
      0.35
    );

    /* =====================================================
       SEPARATORS
    ===================================================== */

    timeline.to(
      separators,
      {
        opacity: 1,

        stagger: 0.08,

        ease: "power2.out",
      },
      0.48
    );

    /* =====================================================
       AMBIENT GLOW
    ===================================================== */

    gsap.to(glow, {
      scale: 1.08,

      duration: 4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    /* =====================================================
       PARTICLE FLOAT
    ===================================================== */

    const particleElements =
      section.querySelectorAll(
        ".countdown-particles span"
      );

    particleElements.forEach(
      (particle, index) => {
        gsap.to(particle, {
          x:
            index % 2 === 0
              ? 10
              : -10,

          y:
            index % 2 === 0
              ? -15
              : 15,

          opacity:
            index % 2 === 0
              ? 0.9
              : 0.4,

          duration:
            3 + index * 0.3,

          repeat: -1,

          yoyo: true,

          ease: "sine.inOut",

          delay: index * 0.2,
        });
      }
    );

    /* =====================================================
       REFRESH
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