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

    const reception = section.querySelector(
      ".timeline-reception"
    );

    const muhurtham = section.querySelector(
      ".timeline-muhurtham"
    );

    const connector = section.querySelector(
      ".timeline-connector"
    );

    const connectorLine = section.querySelectorAll(
      ".connector-line"
    );

    const connectorSymbol = section.querySelector(
      ".connector-symbol"
    );

    const venue = section.querySelector(
      ".timeline-venue"
    );

    const glow = section.querySelector(
      ".timeline-glow"
    );

    const particles = section.querySelector(
      ".timeline-particles"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
      !header ||
      !reception ||
      !muhurtham ||
      !connector ||
      !connectorSymbol ||
      !venue ||
      !glow ||
      !particles
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

    gsap.set(reception, {
      opacity: 0,
      x: isMobile ? 0 : -100,
      y: isMobile ? 50 : 0,
    });

    gsap.set(muhurtham, {
      opacity: 0,
      x: isMobile ? 0 : 100,
      y: isMobile ? 50 : 0,
    });

    gsap.set(connector, {
      opacity: 0,
    });

    gsap.set(connectorLine, {
      scaleX: 0,
      transformOrigin: "center center",
    });

    gsap.set(connectorSymbol, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(venue, {
      opacity: 0,
      y: 50,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.6,
    });

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
          ? "+=145%"
          : "+=160%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       PHASE 1
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
       PHASE 2
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
       PHASE 3
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
       PHASE 4
       RECEPTION
    ===================================================== */

    timeline.to(
      reception,
      {
        opacity: 1,
        x: 0,
        y: 0,
        ease: "power3.out",
      },
      0.3
    );

    /* =====================================================
       PHASE 5
       MUHURTHAM
    ===================================================== */

    timeline.to(
      muhurtham,
      {
        opacity: 1,
        x: 0,
        y: 0,
        ease: "power3.out",
      },
      0.45
    );

    /* =====================================================
       PHASE 6
       CONNECTOR
    ===================================================== */

    timeline.to(
      connector,
      {
        opacity: 1,
        ease: "power2.out",
      },
      0.55
    );

    timeline.to(
      connectorLine,
      {
        scaleX: 1,
        stagger: 0.1,
        ease: "power2.inOut",
      },
      0.6
    );

    timeline.to(
      connectorSymbol,
      {
        opacity: 1,
        scale: 1,
        ease: "back.out(1.5)",
      },
      0.68
    );

    /* =====================================================
       PHASE 7
       VENUE
    ===================================================== */

    timeline.to(
      venue,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.82
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
       AMBIENT CONNECTOR SYMBOL
    ===================================================== */

    gsap.to(connectorSymbol, {
      rotation: 5,

      duration: 3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    /* =====================================================
       PARTICLE MOTION
    ===================================================== */

    const particleElements =
      section.querySelectorAll(
        ".timeline-particles span"
      );

    particleElements.forEach(
      (particle, index) => {
        gsap.to(particle, {
          y:
            index % 2 === 0
              ? -15
              : 15,

          x:
            index % 2 === 0
              ? 8
              : -8,

          opacity:
            index % 2 === 0
              ? 0.9
              : 0.45,

          duration:
            3 + index * 0.25,

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