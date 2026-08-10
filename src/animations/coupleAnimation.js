import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createCoupleAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const bride = section.querySelector(".couple-bride");
    const groom = section.querySelector(".couple-groom");
    const garland = section.querySelector(".couple-garland");
    const content = section.querySelector(".couple-content");
    const glow = section.querySelector(".couple-glow");
    const particles = section.querySelector(".couple-particles");

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

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

    gsap.set(bride, {
      xPercent: -120,
      opacity: 0,
    });

    gsap.set(groom, {
      xPercent: 120,
      opacity: 0,
    });

    gsap.set(garland, {
      scale: 0.5,
      opacity: 0,
      y: 25,
    });

    gsap.set(content, {
      opacity: 0,
      y: 30,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.65,
    });

    gsap.set(particles, {
      opacity: 0,
    });

    /* =====================================================
       MAIN TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=125%"
          : "+=160%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       COUPLE ENTER
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
       COUPLE MOVE TOWARD CENTER
    ===================================================== */

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
       GARLAND
    ===================================================== */

    timeline.to(
      garland,
      {
        scale: isMobile ? 0.78 : 0.85,
        opacity: 1,
        y: 0,
        ease: "back.out(1.4)",
      },
      0.65
    );

    /* =====================================================
       TITLE
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
       AMBIENT FLOAT
    ===================================================== */

    gsap.to(bride, {
      y: -6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(groom, {
      y: -5,
      duration: 3.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(garland, {
      rotation: 2,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    ScrollTrigger.refresh();
  }, section);

  return () => {
    context.revert();
  };
}