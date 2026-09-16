import { useLayoutEffect, useRef } from "react";
import { skillsAnimation } from "../Animations/Skills.animation";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Tailwind CSS",
  "GSAP",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "REST API",
  "Vite",
];

const SkillsMarquee = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return skillsAnimation(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skills-section relative overflow-hidden border-y border-white/[0.06] bg-[#080808] py-8"
    >
      {/* Background glow */}

      <div className="skills-glow pointer-events-none absolute left-1/2 top-1/2 h-40 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

      {/* Top label */}

      <div className="relative z-10 mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-white/10" />

        <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
          Technologies I Work With
        </span>

        <span className="h-px w-10 bg-white/10" />
      </div>

      {/* Marquee */}

      <div className="skills-marquee relative flex overflow-hidden">

        {/* Left fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#080808] to-transparent" />

        {/* Right fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#080808] to-transparent" />

        {/* Track */}

        <div className="skills-track flex w-max">

          {/* First set */}

          <div className="skills-group flex items-center">

            {skills.map((skill, index) => (
              <div
                key={`first-${skill}`}
                className="skill-item group flex items-center"
              >
                <span className="skill-name whitespace-nowrap text-2xl font-semibold tracking-tight text-white/35 transition-colors duration-300 group-hover:text-white/80 sm:text-3xl"
                >
                  {skill}
                </span>

                <span className="skill-separator mx-8 text-purple-400/40">
                  ✦
                </span>
              </div>
            ))}

          </div>

          {/* Exact duplicate for seamless infinite loop */}

          <div
            className="skills-group flex items-center"
            aria-hidden="true"
          >

            {skills.map((skill, index) => (
              <div
                key={`second-${skill}`}
                className="skill-item group flex items-center"
              >
                <span className="skill-name whitespace-nowrap text-2xl font-semibold tracking-tight text-white/35 transition-colors duration-300 group-hover:text-white/80 sm:text-3xl"
                >
                  {skill}
                </span>

                <span className="skill-separator mx-8 text-purple-400/40">
                  ✦
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;