import { useLayoutEffect, useRef } from "react";
import { projectsAnimation } from "../Animations/Projects.animation";

const projects = [
  {
    number: "01",
    category: "AI / Full Stack",
    title: "AI Learning Visualizer",
    description:
      "Transform notes and complex topics into interactive visual learning experiences using AI-generated explanations, diagrams, and structured content.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI API"],
    accent: "purple",
    github: "#",
    live: "#",
  },
  {
    number: "02",
    category: "Full Stack",
    title: "Event Management",
    description:
      "A complete event management platform connecting users, organizers, and administrators with event discovery, registration, management, and authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    accent: "blue",
    github: "#",
    live: "#",
  },
  {
    number: "03",
    category: "AI / Productivity",
    title: "AI Resume Analyzer",
    description:
      "Analyze resumes against job descriptions and provide structured feedback on skills, missing keywords, experience, and improvement opportunities.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI API"],
    accent: "pink",
    github: "#",
    live: "#",
  },
  {
    number: "04",
    category: "Real-Time Application",
    title: "CollabSpace",
    description:
      "A real-time collaboration platform where users can create workspaces, share tasks, communicate, and work together through synchronized updates.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    accent: "green",
    github: "#",
    live: "#",
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
                Selected Work
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
              A collection of experiments and applications focused on solving
              real problems through modern full-stack development, AI, and
              interactive interfaces.
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
                      BROWSER
                  ================================================== */}

                  <div
                    className="
                      project-browser
                      relative
                      z-10
                      w-[82%]
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-white/[0.12]
                      bg-[#080808]/90
                      shadow-[0_30px_70px_rgba(0,0,0,0.55),0_0_50px_rgba(168,85,247,0.06)]
                      [transform-style:preserve-3d]
                      backdrop-blur-xl
                      sm:w-[76%]
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
                        <span className="browser-dot h-[7px] w-[7px] rounded-full bg-white/[0.18]" />
                        <span className="browser-dot h-[7px] w-[7px] rounded-full bg-white/[0.18]" />
                        <span className="browser-dot h-[7px] w-[7px] rounded-full bg-white/[0.18]" />
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
                          text-white/20
                        "
                      >
                        {project.title.toLowerCase().replaceAll(" ", "-")}
                      </div>
                    </div>

                    {/* Browser content */}

                    <div className="project-browser-content p-3 sm:p-[18px]">
                      {/* Fake header */}

                      <div className="fake-header mb-[18px] flex items-center justify-between">
                        <div
                          className="
                            fake-logo
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            bg-purple-500/15
                            text-[11px]
                            font-bold
                            text-purple-300/80
                          "
                        >
                          {project.title.charAt(0)}
                        </div>

                        <div className="fake-header-lines flex gap-1.5">
                          <span className="h-1 w-6 rounded-full bg-white/[0.08]" />
                          <span className="h-1 w-6 rounded-full bg-white/[0.08]" />
                          <span className="h-1 w-6 rounded-full bg-white/[0.08]" />
                        </div>
                      </div>

                      {/* Dashboard */}

                      <div
                        className="
                          fake-dashboard
                          grid
                          grid-cols-[30px_1fr]
                          gap-2
                          sm:grid-cols-[50px_1fr]
                          sm:gap-3.5
                        "
                      >
                        {/* Sidebar */}

                        <div className="fake-sidebar flex flex-col items-center gap-3 pt-2">
                          <span
                            className="
                              active
                              h-[18px]
                              w-[18px]
                              rounded-md
                              bg-purple-500/30
                              shadow-[0_0_20px_rgba(168,85,247,0.15)]
                            "
                          />

                          <span className="h-[18px] w-[18px] rounded-md bg-white/[0.06]" />
                          <span className="h-[18px] w-[18px] rounded-md bg-white/[0.06]" />
                          <span className="h-[18px] w-[18px] rounded-md bg-white/[0.06]" />
                        </div>

                        {/* Main */}

                        <div className="fake-main min-w-0">
                          <div className="fake-main-title mb-4 h-[9px] w-[45%] rounded-full bg-white/[0.15]" />

                          {/* Small cards */}

                          <div className="fake-cards mb-3.5 grid grid-cols-3 gap-2">
                            <span className="h-[45px] rounded-[10px] border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.015] sm:h-[65px]" />

                            <span className="h-[45px] rounded-[10px] border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.015] sm:h-[65px]" />

                            <span className="h-[45px] rounded-[10px] border border-white/[0.06] bg-gradient-to-br from-white/[0.06] to-white/[0.015] sm:h-[65px]" />
                          </div>

                          {/* Chart */}

                          <div
                            className="
                              fake-chart
                              relative
                              h-[70px]
                              overflow-hidden
                              rounded-xl
                              border
                              border-white/[0.06]
                              bg-gradient-to-b
                              from-purple-500/[0.07]
                              to-transparent
                              sm:h-[105px]
                            "
                          >
                            <div className="chart-line chart-1 absolute left-[8%] top-[70%] h-[2px] w-[45%] origin-left rotate-[-15deg] rounded-full bg-purple-300/55" />

                            <div className="chart-line chart-2 absolute left-[48%] top-[58%] h-[2px] w-[30%] origin-left rotate-[15deg] rounded-full bg-purple-300/55" />

                            <div className="chart-line chart-3 absolute left-[70%] top-[65%] h-[2px] w-[25%] origin-left rotate-[-28deg] rounded-full bg-purple-300/55" />

                            <div className="chart-line chart-4 absolute left-[82%] top-[50%] h-[2px] w-[20%] origin-left rotate-[18deg] rounded-full bg-purple-300/55" />
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
                    React
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
                    {project.technologies[2]}
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
                  {/* Meta */}

                  <div className="project-meta mb-5 flex items-center gap-3.5">
                    <span className="project-index font-mono text-[11px] text-purple-300/70">
                      {project.number}
                    </span>

                    <span
                      className="
                        project-category
                        rounded-full
                        border
                        border-white/[0.07]
                        bg-white/[0.035]
                        px-2.5
                        py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/35
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      project-title
                      text-[2.3rem]
                      font-bold
                      leading-[0.95]
                      tracking-[-0.05em]
                      text-white/[0.93]
                      sm:text-5xl
                      lg:text-[3.6rem]
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      project-description
                      mt-6
                      max-w-xl
                      text-sm
                      leading-[1.8]
                      text-white/[0.38]
                      sm:text-[15px]
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="project-tech-list mt-7 flex flex-wrap gap-2">
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
                          text-white/[0.42]
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
                      <span>Live Project</span>

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
                        text-white/55
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-white/20
                        hover:bg-white/[0.07]
                        hover:text-white
                        sm:w-auto
                      "
                    >
                      <span>GitHub</span>

                      <span
                        className="
                          project-arrow
                          text-[15px]
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
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
          <p className="text-sm text-white/30">
            More projects coming soon.
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              github-button
              group
              flex
              items-center
              gap-3
              text-sm
              text-white/60
              transition-colors
              duration-300
              hover:text-white
            "
          >
            <span>Explore GitHub</span>

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