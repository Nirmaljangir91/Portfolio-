import gsap from "gsap";

export const heroAnimation = (container) => {
  if (!container) {
    return () => {};
  }

  /*
  ============================================================
  ELEMENTS
  ============================================================
  */

  const badge = container.querySelector(".hero-badge");

  const subtitle = container.querySelector(".hero-subtitle");

  const title = container.querySelector(".hero-title");

  const description = container.querySelector(
    ".hero-description"
  );

  const buttons = container.querySelectorAll(
    ".hero-button"
  );

  const tech = container.querySelector(".hero-tech");

  const profileCard = container.querySelector(
    ".profile-card"
  );

  const profileInitial = container.querySelector(
    ".profile-initial"
  );

  const profileGlow = container.querySelector(
    ".profile-glow"
  );

  const profileInnerGlow = container.querySelector(
    ".profile-inner-glow"
  );

  const profileRing = container.querySelector(
    ".profile-ring"
  );

  const profileRing2 = container.querySelector(
    ".profile-ring-2"
  );

  const profileOrbit = container.querySelector(
    ".profile-orbit"
  );

  const profileDot = container.querySelector(
    ".profile-dot"
  );

  const profileTech = container.querySelectorAll(
    ".profile-tech"
  );

  const floating = container.querySelector(
    ".hero-floating"
  );

  const miniCard = container.querySelector(
    ".hero-mini-card"
  );

  const circle = container.querySelector(
    ".hero-circle"
  );

  const glowMain = container.querySelector(
    ".hero-glow-main"
  );

  const glowSmall = container.querySelector(
    ".hero-glow-small"
  );

  const scroll = container.querySelector(
    ".hero-scroll"
  );

  const scrollLine = container.querySelector(
    ".scroll-line"
  );


  /*
  ============================================================
  GSAP CONTEXT
  ============================================================
  */

  const ctx = gsap.context(() => {

    /*
    ==========================================================
    INITIAL STATES
    ==========================================================
    */

    gsap.set(
      [
        badge,
        subtitle,
        title,
        description,
        buttons,
        tech,
        profileCard,
        floating,
        miniCard,
        circle,
        scroll,
      ],
      {
        opacity: 0,
      }
    );


    /* LEFT SIDE */

    gsap.set(badge, {
      y: 25,
    });

    gsap.set(subtitle, {
      y: 30,
    });

    gsap.set(title, {
      y: 100,
      rotateX: 15,
      transformPerspective: 1000,
    });

    gsap.set(description, {
      y: 35,
    });

    gsap.set(buttons, {
      y: 25,
      scale: 0.9,
    });

    gsap.set(tech, {
      y: 20,
    });


    /* PROFILE */

    gsap.set(profileCard, {
      x: 120,
      y: 30,
      scale: 0.7,
      rotateY: 20,
      rotateZ: 5,
      transformPerspective: 1200,
    });

    gsap.set(profileInitial, {
      scale: 0.5,
      opacity: 0,
    });

    gsap.set(
      [
        profileRing,
        profileRing2,
        profileOrbit,
      ],
      {
        scale: 0.7,
        opacity: 0,
      }
    );

    gsap.set(profileGlow, {
      scale: 0.5,
      opacity: 0,
    });

    gsap.set(profileInnerGlow, {
      scale: 0.5,
      opacity: 0,
    });

    gsap.set(profileDot, {
      scale: 0,
      opacity: 0,
    });

    gsap.set(profileTech, {
      scale: 0,
      opacity: 0,
    });

    gsap.set(
      [floating, miniCard],
      {
        scale: 0.6,
        y: 30,
      }
    );

    gsap.set(circle, {
      scale: 0,
      rotate: -90,
    });


    /*
    ==========================================================
    INTRO TIMELINE
    ==========================================================
    */

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });


    /* Badge */

    tl.to(badge, {
      y: 0,
      opacity: 1,
      duration: 0.7,
    })


      /* Subtitle */

      .to(
        subtitle,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.35"
      )


      /* Title */

      .to(
        title,
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
        },
        "-=0.25"
      )


      /* Description */

      .to(
        description,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.5"
      )


      /* Buttons */

      .to(
        buttons,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "back.out(1.5)",
        },
        "-=0.4"
      )


      /* Tech */

      .to(
        tech,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.3"
      )


      /* Profile */

      .to(
        profileCard,
        {
          x: 0,
          y: 0,
          scale: 1,
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=1.1"
      )


      /* N */

      .to(
        profileInitial,
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )


      /* Rings */

      .to(
        [
          profileRing,
          profileRing2,
          profileOrbit,
        ],
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.8"
      )


      /* Main glow */

      .to(
        profileGlow,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        },
        "-=0.8"
      )


      /* Inner glow */

      .to(
        profileInnerGlow,
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.8"
      )


      /* Floating cards */

      .to(
        [floating, miniCard],
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )


      /* Star */

      .to(
        circle,
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )


      /* Dot */

      .to(
        profileDot,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)",
        },
        "-=0.4"
      )


      /* Tech orbs */

      .to(
        profileTech,
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )


      /* Scroll */

      .to(
        scroll,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.2"
      );


    /*
    ==========================================================
    CONTINUOUS BACKGROUND ANIMATION
    ==========================================================
    */

    gsap.to(glowMain, {
      scale: 1.2,
      opacity: 0.7,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    gsap.to(glowSmall, {
      x: -80,
      y: 60,
      scale: 1.2,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    /*
    ==========================================================
    PROFILE GLOW
    ==========================================================
    */

    gsap.to(profileGlow, {
      scale: 1.15,
      opacity: 0.65,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    /*
    ==========================================================
    INNER GLOW
    ==========================================================
    */

    gsap.to(profileInnerGlow, {
      scale: 1.4,
      opacity: 0.5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    /*
    ==========================================================
    ROTATING RINGS
    ==========================================================
    */

    gsap.to(profileRing, {
      rotate: 360,
      duration: 18,
      repeat: -1,
      ease: "none",
    });


    gsap.to(profileRing2, {
      rotate: -360,
      duration: 25,
      repeat: -1,
      ease: "none",
    });


    gsap.to(profileOrbit, {
      rotate: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
    });


    /*
    ==========================================================
    DOT
    ==========================================================
    */

    gsap.to(profileDot, {
      scale: 1.5,
      opacity: 0.5,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    /*
    ==========================================================
    FLOATING CARDS
    ==========================================================
    */

    gsap.to(floating, {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    gsap.to(miniCard, {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });


    /*
    ==========================================================
    STAR
    ==========================================================
    */

    gsap.to(circle, {
      y: -12,
      rotate: "+=360",
      duration: 6,
      repeat: -1,
      ease: "none",
    });


    /*
    ==========================================================
    SCROLL LINE
    ==========================================================
    */

    gsap.fromTo(
      scrollLine,
      {
        yPercent: -100,
      },
      {
        yPercent: 100,
        duration: 1.5,
        repeat: -1,
        ease: "power2.inOut",
      }
    );

  }, container);


  /*
  ============================================================
  MOUSE EFFECT
  ============================================================
  
  IMPORTANT:
  This is intentionally OUTSIDE gsap.context().
  
  At this point `ctx` already exists, so there is no
  "Cannot access ctx before initialization" problem.
  ============================================================
  */

  let handleMouseMove;
  let handleMouseLeave;

  if (profileCard) {

    const rotateX = gsap.quickTo(
      profileCard,
      "rotationX",
      {
        duration: 0.5,
        ease: "power3.out",
      }
    );

    const rotateY = gsap.quickTo(
      profileCard,
      "rotationY",
      {
        duration: 0.5,
        ease: "power3.out",
      }
    );

    const moveX = gsap.quickTo(
      profileCard,
      "x",
      {
        duration: 0.5,
        ease: "power3.out",
      }
    );

    const moveY = gsap.quickTo(
      profileCard,
      "y",
      {
        duration: 0.5,
        ease: "power3.out",
      }
    );


    handleMouseMove = (event) => {

      const rect =
        profileCard.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const percentX =
        (x - centerX) / centerX;

      const percentY =
        (y - centerY) / centerY;


      rotateY(percentX * 8);

      rotateX(percentY * -8);

      moveX(percentX * 5);

      moveY(percentY * 5);
    };


    handleMouseLeave = () => {

      rotateX(0);

      rotateY(0);

      moveX(0);

      moveY(0);
    };


    profileCard.addEventListener(
      "mousemove",
      handleMouseMove
    );

    profileCard.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
  }


  /*
  ============================================================
  CLEANUP
  ============================================================
  */

  return () => {

    if (profileCard && handleMouseMove) {
      profileCard.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    }

    if (profileCard && handleMouseLeave) {
      profileCard.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }

    ctx.revert();
  };
};