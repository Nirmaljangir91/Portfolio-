import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const footerAnimation = (container) => {
  if (!container) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const cta = container.querySelector(".footer-cta");
    const title = container.querySelector(".footer-title");
    const label = container.querySelector(".footer-label");
    const middle = container.querySelector(".footer-middle");
    const brand = container.querySelector(".footer-brand");
    const columns = container.querySelectorAll(".footer-column");
    const links = container.querySelectorAll(".footer-link");
    const topButton = container.querySelector(".footer-top-button");
    const bottom = container.querySelector(".footer-bottom");
    const glow = container.querySelector(".footer-glow");

    /* ============================================
       INITIAL STATES
    ============================================ */

    gsap.set(label, {
      opacity: 0,
      y: 20,
    });

    gsap.set(title, {
      opacity: 0,
      y: 60,
    });

    gsap.set(topButton, {
      opacity: 0,
      scale: 0.7,
    });

    gsap.set(middle, {
      opacity: 0,
      y: 40,
    });

    gsap.set(bottom, {
      opacity: 0,
      y: 20,
    });

    /* ============================================
       CTA
    ============================================ */

    const ctaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: cta,
        start: "top 85%",
        once: true,
      },
    });

    ctaTimeline
      .to(label, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.25"
      )
      .to(
        topButton,
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.55"
      );

    /* ============================================
       MIDDLE CONTENT
    ============================================ */

    gsap.to(middle, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",

      scrollTrigger: {
        trigger: middle,
        start: "top 90%",
        once: true,
      },
    });

    /* ============================================
       BRAND
    ============================================ */

    gsap.fromTo(
      brand,
      {
        opacity: 0,
        x: -25,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",

        scrollTrigger: {
          trigger: middle,
          start: "top 88%",
          once: true,
        },
      }
    );

    /* ============================================
       FOOTER COLUMNS
    ============================================ */

    gsap.fromTo(
      columns,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: middle,
          start: "top 85%",
          once: true,
        },
      }
    );

    /* ============================================
       LINKS HOVER
    ============================================ */

    links.forEach((link) => {
      const handleEnter = () => {
        gsap.to(link, {
          x: 5,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(link, {
          x: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      };

      link.addEventListener("mouseenter", handleEnter);
      link.addEventListener("mouseleave", handleLeave);

      link._footerCleanup = () => {
        link.removeEventListener("mouseenter", handleEnter);
        link.removeEventListener("mouseleave", handleLeave);
      };
    });

    /* ============================================
       GLOW
    ============================================ */

    gsap.to(glow, {
      x: 100,
      scale: 1.15,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* ============================================
       BOTTOM
    ============================================ */

    gsap.to(bottom, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",

      scrollTrigger: {
        trigger: bottom,
        start: "top 95%",
        once: true,
      },
    });
  }, container);

  return () => {
    const links = container.querySelectorAll(".footer-link");

    links.forEach((link) => {
      link._footerCleanup?.();
      delete link._footerCleanup;
    });

    ctx.revert();
  };
};