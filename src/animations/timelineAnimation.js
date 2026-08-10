import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createTimelineAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = section.querySelector(
      ".timeline-header"
    );

    const line = section.querySelector(
      ".timeline-line"
    );

    const reception = section.querySelector(
      ".timeline-event-reception"
    );

    const muhurtham = section.querySelector(
      ".timeline-event-muhurtham"
    );

    const venue = section.querySelector(
      ".timeline-venue"
    );

    const bottom = section.querySelector(
      ".timeline-bottom"
    );

    const glow = section.querySelector(
      ".timeline-glow"
    );

    const lights = section.querySelectorAll(
      ".timeline-light"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
      !header ||
      !line ||
      !reception ||
      !muhurtham ||
      !venue ||
      !bottom ||
      !glow
    ) {
      return;
    }

    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(header, {
      opacity: 0,
      y: 50,
    });

    gsap.set(line, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(reception, {
      opacity: 0,
      x: isMobile ? -40 : -80,
    });

    gsap.set(muhurtham, {
      opacity: 0,
      x: isMobile ? 40 : 80,
    });

    gsap.set(venue, {
      opacity: 0,
      y: 50,
    });

    gsap.set(bottom, {
      opacity: 0,
      y: 30,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.6,
    });

    gsap.set(lights, {
      opacity: 0,
    });

    /* =====================================================
       SCROLL TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=170%"
          : "+=155%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       HEADER
    ===================================================== */

    timeline.to(
      header,
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
      0.05
    );

    /* =====================================================
       AMBIENT LIGHTS
    ===================================================== */

    timeline.to(
      lights,
      {
        opacity: 1,
        ease: "power2.out",
      },
      0.1
    );

    /* =====================================================
       TIMELINE LINE
    ===================================================== */

    timeline.to(
      line,
      {
        scaleY: 1,
        ease: "none",
      },
      0.2
    );

    /* =====================================================
       RECEPTION
    ===================================================== */

    timeline.to(
      reception,
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
      },
      0.3
    );

    /* =====================================================
       MUHURTHAM
    ===================================================== */

    timeline.to(
      muhurtham,
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
      },
      0.55
    );

    /* =====================================================
       VENUE
    ===================================================== */

    timeline.to(
      venue,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.8
    );

    /* =====================================================
       BOTTOM MESSAGE
    ===================================================== */

    timeline.to(
      bottom,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      1
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
       LIGHT FLOAT
    ===================================================== */

    lights.forEach((light, index) => {
      gsap.to(light, {
        y: index === 0 ? -15 : -10,

        x: index === 0 ? 8 : -8,

        duration: 3 + index * 0.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });
    });

    /* =====================================================
       REFRESH
    ===================================================== */

    ScrollTrigger.refresh();
  }, section);

  return () => {
    context.revert();
  };
}