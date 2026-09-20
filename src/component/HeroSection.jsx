import { useLayoutEffect, useRef } from "react";
import { heroAnimation } from "../Animations/Hero.animation";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    return heroAnimation(heroRef.current);
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="hero-glow hero-glow-main pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="hero-glow hero-glow-small pointer-events-none absolute right-[5%] top-[15%] h-[250px] w-[250px] rounded-full bg-violet-500/10 blur-[100px]" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="hero-content">

            {/* Availability */}

            <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-white/60 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              Available for opportunities
            </div>

            <p className="hero-subtitle mb-5 text-xs uppercase tracking-[0.35em] text-purple-300/60 sm:text-sm">
              MERN Stack Developer Intern
            </p>

            {/* Title */}

            <div className="overflow-hidden">
              <h1 className="hero-title text-5xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                Building
                <br />

                <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                  digital
                </span>

                <br />

                <span className="text-white/90">
                  experiences.
                </span>
              </h1>
            </div>

            {/* Description */}

            <p className="hero-description mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              I design and build modern, scalable web applications
              with clean interfaces, powerful interactions, and
              meaningful user experiences.
            </p>

            {/* Buttons */}

            <div className="hero-buttons mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="hero-button group rounded-full bg-white px-7 py-3.5 font-medium text-black transition-transform duration-300 hover:-translate-y-1"
              >
                <span>
                  View Projects
                </span>

                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="hero-button rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                Contact Me
              </a>

            </div>

            {/* Technologies */}

            <div className="hero-tech mt-12 flex flex-wrap items-center gap-4 text-xs text-white/25">

              <span>React</span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>Node.js</span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>MongoDB</span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>GSAP</span>

            </div>

          </div>

          {/* =================================================
              RIGHT PROFILE
          ================================================== */}

          <div className="hero-visual relative mx-auto flex h-[520px] w-full max-w-[500px] items-center justify-center">

            {/* Main glow */}

            <div className="profile-glow pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-purple-600/20 blur-[110px]" />

            {/* Outer rings */}

            <div className="profile-ring absolute h-[410px] w-[410px] rounded-full border border-purple-400/10" />

            <div className="profile-ring-2 absolute h-[455px] w-[455px] rounded-full border border-white/[0.035]" />

            <div className="profile-orbit absolute h-[375px] w-[375px] rounded-full border border-dashed border-purple-300/10" />

            {/* =================================================
                PROFILE CIRCLE
            ================================================== */}

            <div
              data-profile-card
              className="profile-card relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-white/15 bg-white/[0.05] p-3 shadow-2xl backdrop-blur-xl"
            >

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-purple-950 via-[#17101f] to-black">

                {/* Inner glow */}

                <div className="profile-inner-glow absolute h-48 w-48 rounded-full bg-purple-500/20 blur-[70px]" />

                {/* Initial */}

                <div className="profile-initial relative select-none text-[9rem] font-bold leading-none tracking-[-0.08em] text-white/90">
                  N
                </div>

                {/* Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Name */}

                <div className="absolute bottom-8 left-0 right-0 text-center">

                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                    Engineer
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-white/90">
                    Nirmal.
                  </h2>

                </div>

              </div>

              {/* Glowing dot */}

              <div className="profile-dot absolute right-3 top-16 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)]" />

            </div>

            {/* =================================================
                MERN CARD
            ================================================== */}

            <div className="hero-floating absolute right-0 top-16 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-xl backdrop-blur-xl">

              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Stack
              </div>

              <div className="mt-1 font-medium text-white/80">
                MERN + GSAP
              </div>

            </div>

            {/* =================================================
                BUILDING CARD
            ================================================== */}

            <div className="hero-mini-card absolute bottom-8 left-0 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-xl backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  {"</>"}
                </div>

                <div>

                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Currently
                  </p>

                  <p className="text-sm text-white/70">
                    Building
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                STAR
            ================================================== */}

            <div className="hero-circle absolute bottom-20 right-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl">

              <span className="text-xl text-purple-300">
                ✦
              </span>

            </div>

            {/* =================================================
                TECH ORBS
            ================================================== */}

            <div className="profile-tech profile-tech-1 absolute left-[14%] top-[20%]">
              JS
            </div>

            <div className="profile-tech profile-tech-2 absolute bottom-[19%] right-[14%]">
              R
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">

        <span className="text-[10px] uppercase tracking-[0.35em] text-white/25">
          Scroll
        </span>

        <div className="h-10 w-px overflow-hidden bg-white/10">

          <div className="scroll-line h-full w-full bg-gradient-to-b from-transparent via-white/70 to-transparent" />

        </div>

      </div>

    </section>
  );
};

export default Hero;