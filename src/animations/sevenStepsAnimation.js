import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createSevenStepsAnimation(section) {
  if (!section) {
    return () => {};
  }

  const context = gsap.context(() => {
    /* =====================================================
       ELEMENTS
    ===================================================== */

    const background = section.querySelector(
      ".seven-steps-background"
    );

    const intro = section.querySelector(
      ".seven-steps-intro"
    );

    const counter = section.querySelector(
      ".seven-steps-counter"
    );

    const currentCounter = section.querySelector(
      ".seven-steps-current"
    );

    const stage = section.querySelector(
      ".seven-steps-stage"
    );

    const label = section.querySelector(
      ".seven-steps-label"
    );

    const labelNumber = section.querySelector(
      ".seven-steps-label-number"
    );

    const labelTitle = section.querySelector(
      ".seven-steps-label-title"
    );

    const labelDescription = section.querySelector(
      ".seven-steps-label-description"
    );

    const progressDots = section.querySelectorAll(
      ".seven-step-dot"
    );

    const progressLines = section.querySelectorAll(
      ".seven-step-line"
    );

    const scrollIndicator = section.querySelector(
      ".seven-steps-scroll"
    );

    const finalMessage = section.querySelector(
      ".seven-steps-final"
    );

    const couples = gsap.utils.toArray(
      ".seven-steps-couple",
      section
    );

    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
      !background ||
      !intro ||
      !counter ||
      !currentCounter ||
      !stage ||
      !label ||
      !labelNumber ||
      !labelTitle ||
      !labelDescription ||
      !finalMessage ||
      couples.length !== 7
    ) {
      return;
    }

    /* =====================================================
       STEP CONTENT
    ===================================================== */

    const steps = [
      {
        number: "01",
        title: "A Promise",
        description:
          "Beginning a journey together,\nhand in hand.",
      },

      {
        number: "02",
        title: "A Commitment",
        description:
          "Walking forward together,\nwith love and trust.",
      },

      {
        number: "03",
        title: "A Shared Journey",
        description:
          "Two paths come together\nas one.",
      },

      {
        number: "04",
        title: "A Sacred Bond",
        description:
          "Side by side,\nthrough every moment.",
      },

      {
        number: "05",
        title: "A Life Together",
        description:
          "Growing together,\nwith every step.",
      },

      {
        number: "06",
        title: "A Promise Renewed",
        description:
          "One more step toward\na lifetime together.",
      },

      {
        number: "07",
        title: "Forever",
        description:
          "Seven steps.\nOne beautiful journey.",
      },
    ];

    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(couples, {
      autoAlpha: 0,
      scale: 0.96,
      y: 25,
    });

    gsap.set(couples[0], {
      autoAlpha: 1,
      scale: 1,
      y: 0,
    });

    gsap.set(finalMessage, {
      autoAlpha: 0,
      y: 40,
    });

    gsap.set(scrollIndicator, {
      autoAlpha: 1,
    });

    /* =====================================================
       STEP POSITIONING
    ===================================================== */

    const isMobile = window.matchMedia(
      "(max-width: 768px)"
    ).matches;

    const positions = isMobile
      ? [
          { x: 0, y: 20 },
          { x: 8, y: 10 },
          { x: -5, y: 0 },
          { x: 6, y: -8 },
          { x: -4, y: -16 },
          { x: 5, y: -24 },
          { x: 0, y: -32 },
        ]
      : [
          { x: -180, y: 40 },
          { x: -120, y: 25 },
          { x: -60, y: 10 },
          { x: 0, y: 0 },
          { x: 60, y: -10 },
          { x: 120, y: -25 },
          { x: 180, y: -40 },
        ];

    /* =====================================================
       SET EACH COUPLE POSITION
    ===================================================== */

    couples.forEach((couple, index) => {
      gsap.set(couple, {
        x: positions[index].x,
        y: positions[index].y,
      });
    });

    /* =====================================================
       STEP UPDATE
    ===================================================== */

    let currentStep = 0;

    function updateStep(stepIndex) {
      if (stepIndex === currentStep) {
        return;
      }

      currentStep = stepIndex;

      const step = steps[stepIndex];

      /* -----------------------------------------------
         Counter
      ------------------------------------------------ */

      currentCounter.textContent = step.number;

      /* -----------------------------------------------
         Label
      ------------------------------------------------ */

      gsap.to(label, {
        autoAlpha: 0,
        y: 12,
        duration: 0.15,
        overwrite: true,
        onComplete: () => {
          labelNumber.textContent = `Step ${step.number}`;
          labelTitle.textContent = step.title;

          labelDescription.innerHTML =
            step.description.replace(/\n/g, "<br />");

          gsap.to(label, {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });

      /* -----------------------------------------------
         Progress dots
      ------------------------------------------------ */

      progressDots.forEach((dot, index) => {
        dot.classList.toggle(
          "active",
          index <= stepIndex
        );
      });

      /* -----------------------------------------------
         Progress lines
      ------------------------------------------------ */

      progressLines.forEach((line, index) => {
        line.classList.toggle(
          "active",
          index < stepIndex
        );
      });
    }

    /* =====================================================
       MAIN SCROLL TIMELINE
    ===================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: isMobile
          ? "+=500%"
          : "+=700%",

        scrub: 1,

        pin: true,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          /*
            Convert scroll progress into
            seven individual steps.
          */

          const progress = self.progress;

          const stepIndex = Math.min(
            6,
            Math.floor(progress * 7)
          );

          updateStep(stepIndex);
        },
      },
    });

    /* =====================================================
       INTRO
    ===================================================== */

    timeline.to(
      intro,
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.12,
        ease: "power2.out",
      },
      0
    );

    timeline.to(
      scrollIndicator,
      {
        autoAlpha: 0,
        y: 20,
        duration: 0.08,
      },
      0
    );

    /* =====================================================
       BACKGROUND MOVEMENT
    ===================================================== */

    timeline.to(
      background,
      {
        scale: 1.08,
        y: -25,
        duration: 1,
        ease: "none",
      },
      0
    );

    /* =====================================================
       COUPLE STEP TRANSITIONS
    ===================================================== */

    couples.forEach((couple, index) => {
      if (index === 0) {
        return;
      }

      const previousCouple = couples[index - 1];

      const position = positions[index];

      /*
        Fade previous pose out.
      */

      timeline.to(
        previousCouple,
        {
          autoAlpha: 0,
          scale: 0.98,
          duration: 0.08,
          ease: "power1.inOut",
        }
      );

      /*
        Bring next pose in.

        Because every pose represents the same
        couple at a different point in the journey,
        this produces a controlled walking effect.
      */

      timeline.fromTo(
        couple,
        {
          autoAlpha: 0,
          scale: 0.94,
          x: position.x - (isMobile ? 8 : 25),
          y: position.y + 15,
        },
        {
          autoAlpha: 1,
          scale: 1,
          x: position.x,
          y: position.y,
          duration: 0.12,
          ease: "power2.out",
        }
      );

      /*
        Small breathing movement while
        the couple settles into the step.
      */

      timeline.to(
        couple,
        {
          scale: 1.015,
          duration: 0.06,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        }
      );
    });

    /* =====================================================
       FINAL MOMENT
    ===================================================== */

    timeline.to(
      stage,
      {
        scale: 1.04,
        duration: 0.12,
        ease: "power2.out",
      }
    );

    timeline.to(
      finalMessage,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.16,
        ease: "power3.out",
      }
    );

    /* =====================================================
       FINAL COUPLE GLOW
    ===================================================== */

    timeline.to(
      couples[6],
      {
        scale: 1.035,
        duration: 0.15,
        ease: "sine.inOut",
      }
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