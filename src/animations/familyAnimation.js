import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createFamilyAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const content = section.querySelector(
      ".family-content"
    );

    const glow = section.querySelector(
      ".family-glow"
    );

    const ornaments = section.querySelectorAll(
      ".family-ornament"
    );

    const divider = section.querySelector(
      ".family-divider"
    );

    const invitation = section.querySelector(
      ".family-invitation"
    );

    const couple = section.querySelector(
      ".family-couple"
    );

    const message = section.querySelector(
      ".family-message"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    if (
      !content ||
      !glow ||
      !divider ||
      !invitation ||
      !couple ||
      !message
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
      scale: 0.6,
    });

    gsap.set(ornaments, {
      opacity: 0,
      scale: 0.7,
    });

    gsap.set(divider, {
      opacity: 0,
      scaleX: 0.5,
    });

    gsap.set(invitation, {
      opacity: 0,
      y: 25,
    });

    gsap.set(couple, {
      opacity: 0,
      y: 35,
    });

    gsap.set(message, {
      opacity: 0,
      y: 25,
    });

    /* =================================================
       SCROLL TIMELINE
    ================================================= */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=115%"
          : "+=135%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =================================================
       CONTENT
    ================================================= */

    timeline.to(
      content,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0
    );

    /* =================================================
       GOLDEN GLOW
    ================================================= */

    timeline.to(
      glow,
      {
        opacity: 1,
        scale: 1,
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
        ease: "back.out(1.5)",
      },
      0.15
    );

    /* =================================================
       DIVIDER
    ================================================= */

    timeline.to(
      divider,
      {
        opacity: 1,
        scaleX: 1,
        ease: "power2.out",
      },
      0.25
    );

    /* =================================================
       INVITATION
    ================================================= */

    timeline.to(
      invitation,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.35
    );

    /* =================================================
       COUPLE NAMES
    ================================================= */

    timeline.to(
      couple,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.5
    );

    /* =================================================
       FINAL MESSAGE
    ================================================= */

    timeline.to(
      message,
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
      },
      0.7
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
       ORNAMENT FLOAT
    ================================================= */

    ornaments.forEach((ornament, index) => {
      gsap.to(ornament, {
        y: index === 0 ? -8 : 8,

        rotation:
          index === 0 ? 4 : -4,

        duration: 3 + index,

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