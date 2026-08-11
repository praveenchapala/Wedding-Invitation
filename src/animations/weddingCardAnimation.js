import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createWeddingCardAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    const header = section.querySelector(
      ".wedding-card-header"
    );

    const stage = section.querySelector(
      ".wedding-card-stage"
    );

    const envelope = section.querySelector(
      ".wedding-envelope"
    );

    const flap = section.querySelector(
      ".wedding-envelope-flap"
    );

    const card = section.querySelector(
      ".wedding-card-paper"
    );

    const glow = section.querySelector(
      ".wedding-card-glow"
    );

    const finalMessage = section.querySelector(
      ".wedding-card-final-message"
    );

    const instruction = section.querySelector(
      ".wedding-card-instruction"
    );

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    if (
      !header ||
      !stage ||
      !envelope ||
      !flap ||
      !card ||
      !glow ||
      !finalMessage
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

    gsap.set(glow, {
      opacity: 0,
      scale: 0.7,
    });

    gsap.set(envelope, {
      opacity: 0,
      y: 80,
      scale: isMobile ? 0.75 : 0.85,
    });

    gsap.set(card, {
      opacity: 0,
      y: isMobile ? 80 : 120,
      scale: isMobile ? 0.72 : 0.78,
      zIndex: 2,
    });

    gsap.set(flap, {
      rotationX: 0,
      transformOrigin: "50% 0%",
      zIndex: 5,
    });

    gsap.set(finalMessage, {
      opacity: 0,
      y: 40,
    });

    if (instruction) {
      gsap.set(instruction, {
        opacity: 0,
      });
    }

    /* =====================================================
       SCROLL TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=180%"
          : "+=220%",

        scrub: 0.8,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    /* =====================================================
       1. HEADER REVEAL
    ===================================================== */

    timeline.to(
      header,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      0
    );

    /* =====================================================
       2. GLOW
    ===================================================== */

    timeline.to(
      glow,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      0.1
    );

    /* =====================================================
       3. ENVELOPE ENTERS
    ===================================================== */

    timeline.to(
      envelope,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0.35
    );

    /* =====================================================
       4. CARD APPEARS BEHIND FLAP
    ===================================================== */

    timeline.to(
      card,
      {
        opacity: 1,
        y: 0,
        scale: isMobile ? 0.76 : 0.82,
        duration: 1,
        ease: "power2.out",
      },
      0.9
    );

    /* =====================================================
       5. ENVELOPE FLAP OPENS
    ===================================================== */

    timeline.to(
      flap,
      {
        rotationX: -180,
        duration: 1.2,
        ease: "power2.inOut",
      },
      1.35
    );

    /* =====================================================
       6. CARD RISES OUT
    ===================================================== */

    timeline.to(
      card,
      {
        y: isMobile ? -170 : -230,

        scale: isMobile ? 0.82 : 0.88,

        duration: 1.8,

        ease: "power3.out",
      },
      2.05
    );

    /* =====================================================
       7. ENVELOPE FADES BACK
    ===================================================== */

    timeline.to(
      envelope,
      {
        opacity: 0.35,
        duration: 0.8,
        ease: "power2.out",
      },
      2.65
    );

    /* =====================================================
       8. CARD BECOMES THE FOCUS
    ===================================================== */

    timeline.to(
      card,
      {
        scale: isMobile ? 0.88 : 0.95,
        y: isMobile ? -190 : -250,

        duration: 1.4,

        ease: "power2.out",
      },
      2.8
    );

    /* =====================================================
       9. FINAL MESSAGE
    ===================================================== */

    timeline.to(
      finalMessage,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      3.7
    );

    /* =====================================================
       10. INSTRUCTION FADES
    ===================================================== */

    if (instruction) {
      timeline.to(
        instruction,
        {
          opacity: 0,
          duration: 0.5,
        },
        1
      );
    }

    /* =====================================================
       AMBIENT GLOW
    ===================================================== */

    gsap.to(glow, {
      scale: 1.08,
      opacity: 0.8,

      duration: 4,

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