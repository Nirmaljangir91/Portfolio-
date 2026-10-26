import { useLayoutEffect, useRef } from "react";
import { initAboutAnimation } from "../Animations/About.animation";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "RESTful APIs",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Git & GitHub",
  "Vite",
  "CRUD Operations",
  "Authentication",
  "Responsive UI"
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
        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CARD */}
          <div
            className="about-left group relative"
            data-card
          >
            {/* Glow border */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-transparent to-purple-400/10 opacity-60 blur-[1px]" />

            <div className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-10">
              {/* Top label */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />

                  <span className="text-sm font-medium tracking-wider text-white/50">
                    PROFILE & BACKGROUND
                  </span>
                </div>
                <span className="text-xs font-mono text-purple-300/70">
                  01 / 02
                </span>
              </div>

              <p className="about-description text-base leading-8 text-white/70">
                I'm <strong className="text-white font-semibold">Nirmal Jangid</strong>, a motivated MERN Stack Developer with hands-on experience building full-stack web applications using <strong className="text-purple-300 font-medium">MongoDB, Express.js, React.js, and Node.js</strong>.
              </p>

              <p className="about-description mt-4 text-sm leading-7 text-white/60">
                Skilled in developing responsive user interfaces, building secure RESTful APIs, integrating frontend and backend systems, and managing databases with MongoDB and Mongoose. I have a strong interest in problem-solving, writing clean and maintainable code, and developing scalable, user-friendly web applications.
              </p>

              {/* Work Experience Section */}
              <div className="about-description mt-6 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">
                    MERN Stack Developer
                  </h4>
                  <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-medium text-purple-300">
                    6 Months
                  </span>
                </div>
                <p className="mt-1 text-xs text-purple-300/70">
                  Grass Solution
                </p>
                <ul className="mt-3 space-y-2 text-xs leading-5 text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▹</span>
                    <span>Developed responsive user interfaces and integrated frontend components with RESTful APIs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▹</span>
                    <span>Assisted with MongoDB database operations and backend application functionality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">▹</span>
                    <span>Conducted debugging, testing, and continuous code improvements using Git and GitHub.</span>
                  </li>
                </ul>
              </div>

              {/* Education Section */}
              <div className="about-description mt-5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-white">
                    Bikaner Technical University (BTU)
                  </h4>
                  <span className="text-xs text-white/40">B.Tech</span>
                </div>
                <p className="mt-1 text-xs text-purple-300/70">
                  Bachelor of Technology in Computer Science
                </p>
                <div className="mt-3 border-t border-white/[0.05] pt-3 text-xs text-white/45">
                  <p>• Pragati Shikshan Sansthan Sr. Sec. School, Sikar — Senior Secondary (Class XII)</p>
                  <p className="mt-1">• Pragati Shikshan Sansthan Sr. Sec. School, Sikar — Secondary (Class X)</p>
                </div>
              </div>

              {/* Quote */}
              <div className="about-quote mt-6 border-l-2 border-purple-400/60 pl-5">
                <p className="text-sm italic leading-6 text-white/45">
                  "Driven by clean code, practical problem-solving, and continuous learning."
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
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm tracking-wider text-white/40">
                    TECHNICAL EXPERTISE
                  </span>

                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300">
                    Available for Work
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Full-Stack MERN
                  <br />
                  <span className="text-purple-300">Specialist.</span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  Focusing on responsive UI engineering, RESTful API architecture, MongoDB schemas, and reliable error handling.
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-item rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/60 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-400/15 hover:text-purple-200"
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
                <span className="text-3xl font-bold text-white">6 Mo</span>

                <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                  Grass Solution Exp
                </p>
              </div>

              <div
                className="about-stat rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                data-card
              >
                <span className="text-3xl font-bold text-purple-300">
                  B.Tech
                </span>

                <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                  CSE · BTU
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
