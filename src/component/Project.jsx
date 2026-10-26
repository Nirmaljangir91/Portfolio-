import { useLayoutEffect, useRef } from "react";
import { projectsAnimation } from "../Animations/Projects.animation";

const projects = [
  {
    number: "01",
    category: "AI / Full Stack",
    title: "AI Project",
    subtitle: "Intelligent Software Platform",
    description:
      "Developed an AI-focused project as part of practical software development work. Organized the project codebase to support maintainable development and future enhancements, while focusing on implementing application functionality, seamless API integration, and an elevated user experience.",
    bulletPoints: [
      "Developed an AI-focused project as part of practical software development work.",
      "Organized codebase to support maintainable development and future enhancements.",
      "Focused on implementing application functionality and improving the user experience."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Tailwind CSS"
    ],
    accent: "purple",
    logo: "/ai_project_logo.jpg",
    github: "https://github.com/Nirmaljangir91",
    live: "https://nirmal-s-portfolio-eight.vercel.app",
    floatingTech: ["React.js", "AI APIs"],
  },
  {
    number: "02",
    category: "Full Stack / SaaS",
    title: "Business Appointments",
    subtitle: "Appointment Booking System",
    description:
      "Developed a business appointment-booking application focused on simplifying appointment management. Worked on application structure and features for a user-friendly booking experience, and designed the project for further development of business appointment workflows.",
    bulletPoints: [
      "Developed an appointment-booking application focused on simplifying appointment management.",
      "Worked on application structure and features for a user-friendly booking experience.",
      "Designed the project architecture for further development of business appointment workflows."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS"
    ],
    accent: "blue",
    logo: "/appointment_booking_logo.jpg",
    github: "https://github.com/Nirmaljangir91",
    live: "https://nirmal-s-portfolio-eight.vercel.app",
    floatingTech: ["Node.js", "MongoDB"],
  },
];

const accentGlow = {
  purple: "bg-purple-600",
  blue: "bg-blue-600",
  pink: "bg-pink-600",
  green: "bg-green-600",
};

const Projects = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    return projectsAnimation(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section relative isolate overflow-hidden bg-[#080808] px-5 py-28 text-white sm:px-6 sm:py-36 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          projects-grid
          pointer-events-none
          absolute inset-0
          opacity-40
          [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          [background-size:70px_70px]
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      />

      <div
        className="
          projects-glow
          projects-glow-1
          pointer-events-none
          absolute
          left-[-10%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/10
          blur-[150px]
        "
      />

      <div
        className="
          projects-glow
          projects-glow-2
          pointer-events-none
          absolute
          bottom-[10%]
          right-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/10
          blur-[150px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            projects-heading
            mb-20
            grid
            gap-8
            lg:mb-24
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
          "
        >
          <div>
            <div className="projects-eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400/60" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-purple-300/60">
                Featured Projects
              </span>
            </div>

            <h2
              className="
                projects-title
                text-5xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Things I've
              <br />

              <span className="bg-gradient-to-r from-white via-white/70 to-white/20 bg-clip-text text-transparent">
                built.
              </span>
            </h2>
          </div>

          <div className="projects-intro lg:pb-2">
            <p className="max-w-lg text-base leading-7 text-white/40 sm:text-lg">
              Featured full-stack applications showcasing MERN development,
              AI integration, clean codebase architecture, and responsive user experiences.
            </p>
          </div>
        </div>

        {/* =================================================
            PROJECTS
        ================================================== */}

        <div className="projects-list flex flex-col gap-16 sm:gap-24 lg:gap-28">
          {projects.map((project) => (
            <article
              key={project.number}
              className="
                project-card
                group
                relative
                w-full
                opacity-0
              "
            >
              {/* =================================================
                  CARD
              ================================================== */}

              <div
                className="
                  project-card-inner
                  grid
                  min-h-[520px]
                  w-full
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/[0.08]
                  bg-gradient-to-br
                  from-white/[0.055]
                  to-white/[0.015]
                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:border-purple-400/[0.22]
                  group-hover:shadow-[0_35px_120px_rgba(0,0,0,0.45),0_0_80px_rgba(168,85,247,0.06)]
                  lg:grid-cols-[1.15fr_0.85fr]
                "
              >
                {/* =================================================
                    LEFT — VISUAL
                ================================================== */}

                <div
                  className="
                    project-visual
                    relative
                    flex
                    min-h-[360px]
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-white/[0.06]
                    bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_55%)]
                    [perspective:1200px]
                    sm:min-h-[430px]
                    lg:min-h-[520px]
                    lg:border-b-0
                    lg:border-r
                  "
                >
                  {/* Visual grid */}

                  <div
                    className="
                      project-visual-grid
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-50
                      [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
                      [background-size:45px_45px]
                      [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]
                    "
                  />

                  {/* Dynamic glow */}

                  <div
                    className={`
                      project-visual-glow
                      ${accentGlow[project.accent]}
                      pointer-events-none
                      absolute
                      h-[280px]
                      w-[280px]
                      rounded-full
                      opacity-30
                      blur-[90px]
                    `}
                  />

                  {/* Big project number */}

                  <div
                    className="
                      project-big-number
                      pointer-events-none
                      absolute
                      left-6
                      top-5
                      select-none
                      text-[5rem]
                      font-extrabold
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.025]
                      sm:left-8
                      sm:text-[7rem]
                      lg:text-[9rem]
                    "
                  >
                    {project.number}
                  </div>

                  {/* =================================================
                      BROWSER WITH LOGO SHOWCASE
                  ================================================== */}

                  <div
                    className="
                      project-browser
                      relative
                      z-10
                      w-[84%]
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-white/[0.12]
                      bg-[#080808]/90
                      shadow-[0_30px_70px_rgba(0,0,0,0.55),0_0_50px_rgba(168,85,247,0.06)]
                      [transform-style:preserve-3d]
                      backdrop-blur-xl
                      sm:w-[78%]
                    "
                  >
                    {/* Browser top */}

                    <div
                      className="
                        project-browser-top
                        flex
                        h-[42px]
                        items-center
                        gap-3.5
                        border-b
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-3.5
                      "
                    >
                      <div className="flex gap-1.5">
                        <span className="browser-dot h-[7px] w-[7px] rounded-full bg-red-400/40" />
                        <span className="browser-dot h-[7px] w-[7px] rounded-full bg-yellow-400/40" />
                        <span className="browser-dot h-[7px] w-[7px] rounded-full bg-green-400/40" />
                      </div>

                      <div
                        className="
                          browser-url
                          flex-1
                          overflow-hidden
                          text-ellipsis
                          whitespace-nowrap
                          text-[9px]
                          tracking-wide
                          text-white/30
                        "
                      >
                        nirmal.portfolio/{project.title.toLowerCase().replaceAll(" ", "-")}
                      </div>
                    </div>

                    {/* Browser content */}

                    <div className="project-browser-content p-4 sm:p-5">
                      {/* Browser Header with Project Logo */}

                      <div className="fake-header mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="fake-logo relative h-8 w-8 overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-md">
                            <img
                              src={project.logo}
                              alt={project.title}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-white/90 leading-none">
                              {project.title}
                            </p>
                            <span className="text-[8px] uppercase tracking-wider text-purple-300/60">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/10 px-2 py-0.5 text-[8px] text-green-300">
                          <span className="h-1 w-1 rounded-full bg-green-400 animate-pulse" />
                          <span>Active</span>
                        </div>
                      </div>

                      {/* Main Showcase with Logo Feature */}

                      <div className="rounded-xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-4">
                        <div className="flex items-center gap-4">
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                            <img
                              src={project.logo}
                              alt={project.title}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-white/80">
                              {project.subtitle}
                            </p>
                            <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-white/40">
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Interactive mini-stats */}

                        <div className="mt-3.5 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-3">
                          <div className="rounded-lg bg-white/[0.03] p-1.5 text-center">
                            <p className="text-[9px] font-semibold text-white/80">MERN</p>
                            <p className="text-[7px] uppercase tracking-wider text-white/30">Architecture</p>
                          </div>
                          <div className="rounded-lg bg-white/[0.03] p-1.5 text-center">
                            <p className="text-[9px] font-semibold text-purple-300">REST</p>
                            <p className="text-[7px] uppercase tracking-wider text-white/30">APIs</p>
                          </div>
                          <div className="rounded-lg bg-white/[0.03] p-1.5 text-center">
                            <p className="text-[9px] font-semibold text-green-300">100%</p>
                            <p className="text-[7px] uppercase tracking-wider text-white/30">Responsive</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      FLOATING TECHNOLOGY
                  ================================================== */}

                  <div
                    className="
                      project-floating-tech
                      project-floating-tech-1
                      absolute
                      right-[5%]
                      top-[15%]
                      z-20
                      whitespace-nowrap
                      rounded-full
                      border
                      border-white/[0.09]
                      bg-white/[0.055]
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-medium
                      text-white/55
                      shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                      backdrop-blur-xl
                      sm:right-[12%]
                      sm:px-3
                      sm:py-2
                      sm:text-[10px]
                    "
                  >
                    {project.floatingTech[0]}
                  </div>

                  <div
                    className="
                      project-floating-tech
                      project-floating-tech-2
                      absolute
                      bottom-[15%]
                      left-[5%]
                      z-20
                      whitespace-nowrap
                      rounded-full
                      border
                      border-white/[0.09]
                      bg-white/[0.055]
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-medium
                      text-white/55
                      shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                      backdrop-blur-xl
                      sm:bottom-[17%]
                      sm:left-[10%]
                      sm:px-3
                      sm:py-2
                      sm:text-[10px]
                    "
                  >
                    {project.floatingTech[1]}
                  </div>
                </div>

                {/* =================================================
                    RIGHT — INFORMATION
                ================================================== */}

                <div
                  className="
                    project-info
                    flex
                    flex-col
                    justify-center
                    px-6
                    py-10
                    sm:px-10
                    sm:py-12
                    lg:px-[55px]
                    lg:py-[60px]
                  "
                >
                  {/* Meta with Project Logo badge */}

                  <div className="project-meta mb-5 flex items-center gap-3.5">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 shadow-md">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="project-index font-mono text-[11px] text-purple-300/70">
                          {project.number}
                        </span>

                        <span className="text-white/20">·</span>

                        <span
                          className="
                            project-category
                            rounded-full
                            border
                            border-white/[0.07]
                            bg-white/[0.035]
                            px-2.5
                            py-1
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-white/45
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      <p className="text-[11px] text-purple-300/60 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      project-title
                      text-[2.2rem]
                      font-bold
                      leading-[0.95]
                      tracking-[-0.05em]
                      text-white/[0.93]
                      sm:text-5xl
                      lg:text-[3.2rem]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      project-description
                      mt-5
                      max-w-xl
                      text-sm
                      leading-[1.8]
                      text-white/[0.5]
                      sm:text-[15px]
                    "
                  >
                    {project.description}
                  </p>

                  {/* Bullet points from resume */}

                  <ul className="mt-4 space-y-2 text-xs leading-5 text-white/55">
                    {project.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}

                  <div className="project-tech-list mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          project-tech
                          rounded-lg
                          border
                          border-white/[0.07]
                          bg-white/[0.025]
                          px-2.5
                          py-1.5
                          text-[10px]
                          text-white/[0.55]
                          transition-all
                          duration-300
                          hover:border-purple-400/25
                          hover:bg-purple-500/[0.08]
                          hover:text-purple-200/[0.85]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="project-actions mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        project-link
                        project-live
                        group/link
                        inline-flex
                        min-w-[130px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        bg-white
                        px-[17px]
                        py-3
                        text-xs
                        text-black
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-white/90
                        sm:w-auto
                      "
                    >
                      <span>Live Portfolio</span>

                      <span
                        className="
                          project-arrow
                          text-[15px]
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                      >
                        ↗
                      </span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        project-link
                        project-github
                        inline-flex
                        min-w-[130px]
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.035]
                        px-[17px]
                        py-3
                        text-xs
                        text-white/70
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/20
                        hover:bg-white/[0.07]
                        hover:text-white
                        sm:w-auto
                      "
                    >
                      <span>GitHub Repository</span>

                      <span
                        className="
                          project-arrow
                          text-[15px]
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================== */}

        <div
          className="
            projects-footer
            mt-20
            flex
            flex-col
            items-start
            justify-between
            gap-6
            border-t
            border-white/[0.08]
            pt-8
            sm:mt-24
            sm:flex-row
            sm:items-center
          "
        >
          <p className="text-sm text-white/35">
            More projects available on GitHub.
          </p>

          <a
            href="https://github.com/Nirmaljangir91"
            target="_blank"
            rel="noreferrer"
            className="
              github-button
              group
              flex
              items-center
              gap-3
              text-sm
              text-white/70
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Explore GitHub (@Nirmaljangir91)</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;