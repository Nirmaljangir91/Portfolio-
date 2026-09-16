    import gsap from "gsap";

export const skillsAnimation = (container) => {
  if (!container) {
    return () => {};
  }

  const ctx = gsap.context(() => {
    const track = container.querySelector(".skills-track");

    const groups = container.querySelectorAll(".skills-group");

    const items = container.querySelectorAll(".skill-item");

    const glow = container.querySelector(".skills-glow");

    /*
    ==========================================================
    INITIAL STATE
    ==========================================================
    */

    gsap.set(container, {
      opacity: 0,
      y: 30,
    });

    gsap.set(items, {
      opacity: 0,
      y: 15,
    });

    /*
    ==========================================================
    ENTRANCE ANIMATION
    ==========================================================
    */

    const intro = gsap.timeline();

    intro.to(container, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    intro.to(
      items,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.035,
        ease: "power3.out",
      },
      "-=0.4"
    );

    /*
    ==========================================================
    INFINITE MARQUEE
    ==========================================================
    
    Because the second group is an exact duplicate of the
    first group, moving the track by exactly one group width
    creates a seamless loop.
    ==========================================================
    */

    if (groups.length >= 2) {
      const groupWidth = groups[0].offsetWidth;

      gsap.to(track, {
        x: -groupWidth,
        duration: 28,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((value) => {
            return parseFloat(value) % groupWidth;
          }),
        },
      });
    }

    /*
    ==========================================================
    BACKGROUND GLOW
    ==========================================================
    */

    gsap.to(glow, {
      scale: 1.3,
      opacity: 0.7,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /*
    ==========================================================
    HOVER EFFECT
    ==========================================================
    */

    items.forEach((item) => {
      const name = item.querySelector(".skill-name");
      const separator = item.querySelector(".skill-separator");

      item.addEventListener("mouseenter", () => {
        gsap.to(name, {
          y: -3,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(separator, {
          scale: 1.4,
          rotate: 90,
          duration: 0.3,
          ease: "back.out(2)",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(name, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(separator, {
          scale: 1,
          rotate: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, container);

  /*
  ============================================================
  CLEANUP
  ============================================================
  */

  return () => {
    ctx.revert();
  };
};