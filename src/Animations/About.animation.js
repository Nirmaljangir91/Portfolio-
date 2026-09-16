import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimation = (section) => {
  if (!section) return;

  // Store native event cleanup functions here.
  const cleanupFunctions = [];

  const ctx = gsap.context(() => {
    const title = section.querySelector(".about-title");
    const smallTitle = section.querySelector(".about-small-title");
    const line = section.querySelector(".about-line");

    const left = section.querySelector(".about-left");
    const right = section.querySelector(".about-right");

    const descriptions = section.querySelectorAll(".about-description");
    const skills = section.querySelectorAll(".skill-item");
    const stats = section.querySelectorAll(".about-stat");

    const glows = section.querySelectorAll(".about-glow");

    /*
    --------------------------------
    INITIAL STATES
    --------------------------------
    */

    gsap.set(title, {
      y: 80,
      opacity: 0,
    });

    gsap.set(smallTitle, {
      y: 30,
      opacity: 0,
    });

    gsap.set(line, {
      scaleX: 0,
      transformOrigin: "center",
    });

    gsap.set(left, {
      x: -100,
      opacity: 0,
      rotateY: 8,
      transformPerspective: 1000,
    });

    gsap.set(right, {
      x: 100,
      opacity: 0,
      rotateY: -8,
      transformPerspective: 1000,
    });

    gsap.set(descriptions, {
      y: 25,
      opacity: 0,
    });

    gsap.set(skills, {
      y: 20,
      opacity: 0,
      scale: 0.8,
    });

    gsap.set(stats, {
      y: 30,
      opacity: 0,
    });

    /*
    --------------------------------
    SCROLL ANIMATION
    --------------------------------
    */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .to(smallTitle, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      })

      .to(
        title,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.3"
      )

      .to(
        line,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5"
      )

      .to(
        left,
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.2"
      )

      .to(
        right,
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.8"
      )

      .to(
        descriptions,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.5"
      )

      .to(
        skills,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )

      .to(
        stats,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.2"
      );

    /*
    --------------------------------
    FLOATING GLOW
    --------------------------------
    */

    gsap.to(glows, {
      x: 80,
      y: -40,
      scale: 1.15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1,
    });

    /*
    --------------------------------
    MOUSE 3D CARD EFFECT
    --------------------------------
    */

    const cards = section.querySelectorAll("[data-card]");

    cards.forEach((card) => {
      const xTo = gsap.quickTo(card, "rotationY", {
        duration: 0.5,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(card, "rotationX", {
        duration: 0.5,
        ease: "power3.out",
      });

      const moveX = gsap.quickTo(card, "x", {
        duration: 0.5,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(card, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const rect = card.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((mouseX - centerX) / centerX) * 4;
        const rotateX = ((mouseY - centerY) / centerY) * -4;

        const moveAmountX = ((mouseX - centerX) / centerX) * 3;
        const moveAmountY = ((mouseY - centerY) / centerY) * 3;

        xTo(rotateY);
        yTo(rotateX);

        moveX(moveAmountX);
        moveY(moveAmountY);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
        moveX(0);
        moveY(0);
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Save cleanup functions.
      cleanupFunctions.push(() => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    });
  }, section);

  /*
  --------------------------------
  CLEANUP
  --------------------------------
  */

  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
    ctx.revert();
  };
};