import { useLayoutEffect, useRef } from "react";
import { initAboutAnimation } from "../Animations/About.animation";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "GSAP",
];

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = initAboutAnimation(sectionRef.current);

    return cleanup;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section relative overflow-hidden bg-[#080808] py-24 text-white sm:py-32"
    >
      {/* Background Elements */}
      <div className="about-grid pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="about-glow about-glow-1 pointer-events-none absolute left-[20%] top-[35%] h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="about-glow about-glow-2 pointer-events-none absolute bottom-[10%] right-[10%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="about-small-title mb-3 text-sm font-medium uppercase tracking-[0.35em] text-purple-300/70">
            Get to know me
          </p>

          <h2 className="about-title text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            About Me
          </h2>

          <div className="about-line mx-auto mt-6 h-[2px] w-20 bg-purple-400" />
        </div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CARD */}
          <div
            className="about-left group relative"
            data-card
          >
            {/* Glow border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-transparent to-purple-400/10 opacity-60 blur-[1px]" />

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-10">
              {/* Top label */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />

                <span className="text-sm font-medium tracking-wider text-white/50">
                  ABOUT / 01
                </span>
              </div>

              <p className="about-description text-base leading-8 text-white/60 sm:text-lg">
                I'm Nirmal, an engineering student and aspiring full-stack
                developer who enjoys turning ideas into modern, interactive web
                experiences.
              </p>

              <p className="about-description mt-5 text-base leading-8 text-white/60 sm:text-lg">
                I work primarily with React, JavaScript, Tailwind CSS, GSAP,
                Node.js, and Express.js, with a strong interest in frontend
                development, UI/UX, animations, and responsive applications.
              </p>

              <p className="about-description mt-5 text-base leading-8 text-white/60 sm:text-lg">
                I believe the best way to learn software development is by
                building. That's why I continuously experiment with new
                technologies, create practical projects, and challenge myself
                to improve both my technical and problem-solving skills.
              </p>

              {/* Quote */}
              <div className="about-quote mt-8 border-l border-purple-400/60 pl-5">
                <p className="text-sm italic leading-6 text-white/40">
                  "Build. Break. Learn. Improve."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-right flex flex-col gap-6">
            {/* Developer Card */}
            <div
              className="about-profile group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-8"
              data-card
            >
              {/* Animated gradient */}
              <div className="profile-gradient pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl transition-all duration-500 group-hover:bg-purple-500/30" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm tracking-wider text-white/40">
                    DEVELOPER / 02
                  </span>

                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300">
                    Available
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Building digital
                  <br />
                  <span className="text-purple-300">experiences.</span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                  Focused on creating modern interfaces, smooth interactions,
                  and scalable full-stack applications.
                </p>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-item rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/50 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="about-stat rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                data-card
              >
                <span className="text-3xl font-bold text-white">MERN</span>

                <p className="mt-2 text-xs uppercase tracking-widest text-white/30">
                  Full Stack
                </p>
              </div>

              <div
                className="about-stat rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                data-card
              >
                <span className="text-3xl font-bold text-purple-300">
                  GSAP
                </span>

                <p className="mt-2 text-xs uppercase tracking-widest text-white/30">
                  Animation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;