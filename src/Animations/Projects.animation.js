import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsAnimation = (container) => {
  if (!container) {
    return () => {};
  }

  const ctx = gsap.context(() => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const heading = container.querySelector(
      ".projects-heading"
    );

    const cards = container.querySelectorAll(
      ".project-card"
    );

    const footer = container.querySelector(
      ".projects-footer"
    );

    const glow1 = container.querySelector(
      ".projects-glow-1"
    );

    const glow2 = container.querySelector(
      ".projects-glow-2"
    );


    /* =====================================================
       INITIAL STATES
    ====================================================== */

    gsap.set(heading, {
      opacity: 0,
      y: 70,
    });

    gsap.set(cards, {
      opacity: 0,
      y: 100,
    });

    gsap.set(footer, {
      opacity: 0,
      y: 30,
    });


    /* =====================================================
       HEADER REVEAL
    ====================================================== */

    gsap.to(heading, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: heading,
        start: "top 85%",
        once: true,
      },
    });


    /* =====================================================
       PROJECT CARD REVEAL
    ====================================================== */

    cards.forEach((card, index) => {

      const visual = card.querySelector(
        ".project-visual"
      );

      const info = card.querySelector(
        ".project-info"
      );

      const title = card.querySelector(
        ".project-title"
      );

      const description = card.querySelector(
        ".project-description"
      );

      const tech = card.querySelectorAll(
        ".project-tech"
      );

      const actions = card.querySelector(
        ".project-actions"
      );

      const browser = card.querySelector(
        ".project-browser"
      );

      const floatingTech =
        card.querySelectorAll(
          ".project-floating-tech"
        );


      /* -----------------------------------------------
         Card
      ------------------------------------------------ */

      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,

        ease: "power4.out",

        delay: index * 0.05,

        scrollTrigger: {
          trigger: card,
          start: "top 82%",
          once: true,
        },
      });


      /* -----------------------------------------------
         Visual
      ------------------------------------------------ */

      gsap.fromTo(
        visual,

        {
          x: -50,
          opacity: 0,
          scale: 0.94,
        },

        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 78%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Browser
      ------------------------------------------------ */

      gsap.fromTo(
        browser,

        {
          y: 50,
          rotateX: 12,
          scale: 0.9,
        },

        {
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Information
      ------------------------------------------------ */

      gsap.fromTo(
        info,

        {
          x: 50,
          opacity: 0,
        },

        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 78%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Title
      ------------------------------------------------ */

      gsap.fromTo(
        title,

        {
          y: 25,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 72%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Description
      ------------------------------------------------ */

      gsap.fromTo(
        description,

        {
          y: 20,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Tech pills
      ------------------------------------------------ */

      gsap.fromTo(
        tech,

        {
          y: 15,
          opacity: 0,
          scale: 0.9,
        },

        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: "back.out(1.5)",

          scrollTrigger: {
            trigger: card,
            start: "top 68%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Actions
      ------------------------------------------------ */

      gsap.fromTo(
        actions,

        {
          y: 20,
          opacity: 0,
        },

        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",

          scrollTrigger: {
            trigger: card,
            start: "top 65%",
            once: true,
          },
        }
      );


      /* -----------------------------------------------
         Floating technology badges
      ------------------------------------------------ */

      gsap.fromTo(
        floatingTech,

        {
          scale: 0,
          opacity: 0,
        },

        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.7)",

          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            once: true,
          },
        }
      );


      /* =================================================
         CARD HOVER
      ================================================== */

      const handleEnter = () => {

        gsap.to(card, {
          y: -8,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(browser, {
          y: -8,
          scale: 1.025,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(floatingTech, {
          y: -6,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        });
      };


      const handleLeave = () => {

        gsap.to(card, {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(browser, {
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.to(floatingTech, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      };


      card.addEventListener(
        "mouseenter",
        handleEnter
      );

      card.addEventListener(
        "mouseleave",
        handleLeave
      );


      /*
      =====================================================
      MOUSE TILT
      =====================================================
      */

      const handleMouseMove = (event) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const centerX =
          rect.width / 2;

        const centerY =
          rect.height / 2;

        const rotateY =
          ((x - centerX) / centerX) * 2.5;

        const rotateX =
          ((y - centerY) / centerY) * -2.5;

        gsap.to(browser, {
          rotateX,
          rotateY,
          duration: 0.4,
          ease: "power2.out",
        });
      };


      const handleMouseLeaveTilt = () => {

        gsap.to(browser, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      };


      card.addEventListener(
        "mousemove",
        handleMouseMove
      );

      card.addEventListener(
        "mouseleave",
        handleMouseLeaveTilt
      );


      /*
      =====================================================
      STORE CLEANUP
      =====================================================
      */

      card._projectCleanup = () => {

        card.removeEventListener(
          "mouseenter",
          handleEnter
        );

        card.removeEventListener(
          "mouseleave",
          handleLeave
        );

        card.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        card.removeEventListener(
          "mouseleave",
          handleMouseLeaveTilt
        );
      };

    });


    /* =====================================================
       BACKGROUND GLOWS
    ====================================================== */

    gsap.to(glow1, {
      x: 100,
      y: 100,
      scale: 1.2,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    gsap.to(glow2, {
      x: -100,
      y: -80,
      scale: 1.15,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    /* =====================================================
       FOOTER
    ====================================================== */

    gsap.to(footer, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",

      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        once: true,
      },
    });

  }, container);


  /* ========================================================
     CLEANUP
  ========================================================= */

  return () => {

    const cards =
      container.querySelectorAll(
        ".project-card"
      );

    cards.forEach((card) => {
      card._projectCleanup?.();
    });

    ctx.revert();
  };
};