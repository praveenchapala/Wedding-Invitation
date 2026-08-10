import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createRSVPAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const content = section.querySelector(
      ".rsvp-content"
    );

    const glow = section.querySelector(
      ".rsvp-glow"
    );

    const ornaments = section.querySelectorAll(
      ".rsvp-ornament"
    );

    const eyebrow = section.querySelector(
      ".rsvp-eyebrow"
    );

    const title = section.querySelector(
      ".rsvp-content h2"
    );

    const divider = section.querySelector(
      ".rsvp-divider"
    );

    const form = section.querySelector(
      ".rsvp-form"
    );

    const fields = section.querySelectorAll(
      ".rsvp-field"
    );

    const submit = section.querySelector(
      ".rsvp-submit"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    if (
      !content ||
      !glow ||
      !eyebrow ||
      !title ||
      !divider
    ) {
      return;
    }

    /* =================================================
       INITIAL STATES
    ================================================= */

    gsap.set(content, {
      opacity: 0,
      y: 50,
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.65,
    });

    gsap.set(ornaments, {
      opacity: 0,
      scale: 0.6,
    });

    gsap.set(eyebrow, {
      opacity: 0,
      y: 20,
    });

    gsap.set(title, {
      opacity: 0,
      y: 25,
    });

    gsap.set(divider, {
      opacity: 0,
      scaleX: 0.5,
    });

    gsap.set(fields, {
      opacity: 0,
      y: 20,
    });

    if (submit) {
      gsap.set(submit, {
        opacity: 0,
        y: 20,
      });
    }

    /* =================================================
       SCROLL TIMELINE
    ================================================= */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=120%"
          : "+=135%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =================================================
       MAIN CONTENT
    ================================================= */

    timeline.to(
      content,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      },
      0
    );

    /* =================================================
       GLOW
    ================================================= */

    timeline.to(
      glow,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    /* =================================================
       ORNAMENTS
    ================================================= */

    timeline.to(
      ornaments,
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.3,
        ease: "back.out(1.5)",
      },
      0.1
    );

    /* =================================================
       EYEBROW
    ================================================= */

    timeline.to(
      eyebrow,
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: "power3.out",
      },
      0.15
    );

    /* =================================================
       TITLE
    ================================================= */

    timeline.to(
      title,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      },
      0.25
    );

    /* =================================================
       DIVIDER
    ================================================= */

    timeline.to(
      divider,
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out",
      },
      0.4
    );

    /* =================================================
       FORM FIELDS
    ================================================= */

    if (form) {
      timeline.to(
        fields,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.5
      );

      if (submit) {
        timeline.to(
          submit,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
          },
          0.85
        );
      }
    }

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
       ORNAMENT FLOAT
    ================================================= */

    ornaments.forEach(
      (ornament, index) => {
        gsap.to(ornament, {
          y:
            index === 0
              ? -8
              : 8,

          rotation:
            index === 0
              ? 4
              : -4,

          duration:
            3 + index * 0.5,

          repeat: -1,

          yoyo: true,

          ease: "sine.inOut",

          delay: index * 0.4,
        });
      }
    );

    /* =================================================
       REFRESH
    ================================================= */

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, section);

  return () => {
    context.revert();
  };
}