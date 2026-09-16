import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const contactAnimation = (container) => {
  if (!container) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const heading = container.querySelector(".contact-heading");
    const content = container.querySelector(".contact-content");
    const info = container.querySelector(".contact-info");
    const formWrapper = container.querySelector(".contact-form-wrapper");
    const fields = container.querySelectorAll(".contact-field");
    const submit = container.querySelector(".contact-submit");
    const footer = container.querySelector(".contact-footer");

    const glow1 = container.querySelector(".contact-glow-1");
    const glow2 = container.querySelector(".contact-glow-2");

    /* ============================================
       INITIAL STATES
    ============================================ */

    gsap.set(heading, {
      opacity: 0,
      y: 70,
    });

    gsap.set(content, {
      opacity: 0,
      y: 60,
    });

    gsap.set(info, {
      x: -50,
      opacity: 0,
    });

    gsap.set(formWrapper, {
      x: 50,
      opacity: 0,
    });

    gsap.set(fields, {
      y: 20,
      opacity: 0,
    });

    gsap.set(submit, {
      y: 20,
      opacity: 0,
    });

    gsap.set(footer, {
      opacity: 0,
      y: 25,
    });

    /* ============================================
       HEADER
    ============================================ */

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

    /* ============================================
       CONTACT CONTENT
    ============================================ */

    gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",

      scrollTrigger: {
        trigger: content,
        start: "top 82%",
        once: true,
      },
    });

    /* ============================================
       LEFT CARD
    ============================================ */

    gsap.to(info, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: content,
        start: "top 80%",
        once: true,
      },
    });

    /* ============================================
       FORM CARD
    ============================================ */

    gsap.to(formWrapper, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.12,
      ease: "power4.out",

      scrollTrigger: {
        trigger: content,
        start: "top 80%",
        once: true,
      },
    });

    /* ============================================
       FORM FIELDS
    ============================================ */

    gsap.to(fields, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: formWrapper,
        start: "top 75%",
        once: true,
      },
    });

    /* ============================================
       SUBMIT BUTTON
    ============================================ */

    gsap.to(submit, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay: 0.25,
      ease: "back.out(1.4)",

      scrollTrigger: {
        trigger: formWrapper,
        start: "top 70%",
        once: true,
      },
    });

    /* ============================================
       FOOTER
    ============================================ */

    gsap.to(footer, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",

      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        once: true,
      },
    });

    /* ============================================
       BACKGROUND GLOWS
    ============================================ */

    gsap.to(glow1, {
      x: 100,
      y: 80,
      scale: 1.15,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glow2, {
      x: -100,
      y: -80,
      scale: 1.2,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* ============================================
       INPUT FOCUS ANIMATION
    ============================================ */

    const inputs = container.querySelectorAll(
      "input, textarea"
    );

    const focusAnimations = [];

    inputs.forEach((input) => {
      const handleFocus = () => {
        gsap.to(input, {
          y: -2,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const handleBlur = () => {
        gsap.to(input, {
          y: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);

      focusAnimations.push({
        input,
        handleFocus,
        handleBlur,
      });
    });

    /* ============================================
       CLEANUP
    ============================================ */

    return () => {
      focusAnimations.forEach(
        ({ input, handleFocus, handleBlur }) => {
          input.removeEventListener("focus", handleFocus);
          input.removeEventListener("blur", handleBlur);
        }
      );
    };
  }, container);

  return () => {
    ctx.revert();
  };
};