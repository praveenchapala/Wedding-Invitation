import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createVenueLocationAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const content = section.querySelector(
      ".venue-location-content"
    );

    const eyebrow = section.querySelector(
      ".venue-location-eyebrow"
    );

    const title = section.querySelector(
      ".venue-location-title"
    );

    const divider = section.querySelector(
      ".venue-location-divider"
    );

    const details = section.querySelector(
      ".venue-location-details"
    );

    const map = section.querySelector(
      ".venue-map-wrapper"
    );

    const button = section.querySelector(
      ".venue-directions-button"
    );

    const bottom = section.querySelector(
      ".venue-location-bottom"
    );

    const glow = section.querySelector(
      ".venue-location-glow"
    );

    const decorations = section.querySelectorAll(
      ".venue-location-decoration"
    );

    if (
      !content ||
      !eyebrow ||
      !title ||
      !divider ||
      !details ||
      !map ||
      !button ||
      !bottom ||
      !glow
    ) {
      return;
    }

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(eyebrow, {
      opacity: 0,
      y: 20,
    });

    gsap.set(title, {
      opacity: 0,
      y: 35,
    });

    gsap.set(divider, {
      opacity: 0,
      scaleX: 0.5,
    });

    gsap.set(details, {
      opacity: 0,
      y: 30,
    });

    gsap.set(map, {
      opacity: 0,
      y: 45,
      scale: 0.96,
    });

    gsap.set(button, {
      opacity: 0,
      y: 25,
    });

    gsap.set(bottom, {
      opacity: 0,
      y: 20,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.7,
    });

    gsap.set(decorations, {
      opacity: 0,
      scale: 0.5,
    });

    /* =================================================
       MAIN SCROLL TIMELINE
    ================================================= */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=110%"
          : "+=125%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =================================================
       HEADER
    ================================================= */

    timeline.to(
      eyebrow,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0
    );

    timeline.to(
      title,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.08
    );

    timeline.to(
      divider,
      {
        opacity: 1,
        scaleX: 1,
        ease: "power2.out",
      },
      0.18
    );

    /* =================================================
       VENUE DETAILS
    ================================================= */

    timeline.to(
      details,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.28
    );

    /* =================================================
       MAP
    ================================================= */

    timeline.to(
      map,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
      },
      0.42
    );

    /* =================================================
       BUTTON
    ================================================= */

    timeline.to(
      button,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.58
    );

    /* =================================================
       BOTTOM MESSAGE
    ================================================= */

    timeline.to(
      bottom,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.68
    );

    /* =================================================
       GLOW
    ================================================= */

    timeline.to(
      glow,
      {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      },
      0.12
    );

    /* =================================================
       DECORATIONS
    ================================================= */

    timeline.to(
      decorations,
      {
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        ease: "back.out(1.5)",
      },
      0.3
    );

    /* =================================================
       AMBIENT GLOW
    ================================================= */

    gsap.to(glow, {
      scale: 1.08,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* =================================================
       DECORATIVE FLOAT
    ================================================= */

    decorations.forEach((decoration, index) => {
      gsap.to(decoration, {
        y: index === 0 ? -10 : 10,
        rotation: index === 0 ? -4 : 4,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    ScrollTrigger.refresh();
  }, section);

  return () => {
    context.revert();
  };
}