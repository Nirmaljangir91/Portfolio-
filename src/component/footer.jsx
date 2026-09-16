import { useLayoutEffect, useRef } from "react";
import { footerAnimation } from "../Animations/Footer.animation";

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    return footerAnimation(footerRef.current);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="
        footer-section
        relative
        overflow-hidden
        bg-[#080808]
        px-5
        pb-8
        pt-20
        text-white
        sm:px-6
        sm:pt-24
      "
    >
      {/* =====================================================
          TOP GLOW
      ====================================================== */}

      <div
        className="
          footer-glow
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.08]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            BIG CTA
        ================================================== */}

        <div
          className="
            footer-cta
            flex
            flex-col
            items-start
            justify-between
            gap-8
            border-b
            border-white/[0.07]
            pb-16
            lg:flex-row
            lg:items-end
          "
        >
          <div>
            <p
              className="
                footer-label
                mb-5
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-purple-300/50
              "
            >
              Let's connect
            </p>

            <h2
              className="
                footer-title
                max-w-4xl
                text-4xl
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Let's create
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-white/70
                  to-white/20
                  bg-clip-text
                  text-transparent
                "
              >
                something great.
              </span>
            </h2>
          </div>

          {/* Back to top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              footer-top-button
              group
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.1]
              bg-white/[0.035]
              text-white/50
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-400/30
              hover:bg-purple-500/10
              hover:text-white
            "
          >
            <span
              className="
                text-xl
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            >
              ↑
            </span>
          </button>
        </div>

        {/* =================================================
            NAVIGATION
        ================================================== */}

        <div
          className="
            footer-middle
            grid
            gap-12
            py-12
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]
          "
        >
          {/* Brand */}

          <div className="footer-brand">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  text-sm
                  font-bold
                  text-white/80
                "
              >
                N
              </div>

              <div>
                <h3 className="text-base font-semibold text-white/85">
                  Nirmal.
                </h3>

                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/20">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/30">
              Building modern web experiences with clean interfaces,
              thoughtful interactions, and scalable technologies.
            </p>
          </div>

          {/* Navigation */}

          <div className="footer-column">
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/20
              "
            >
              Navigation
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="
                  footer-link
                  w-fit
                  text-sm
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                About
              </a>

              <a
                href="#projects"
                className="
                  footer-link
                  w-fit
                  text-sm
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Projects
              </a>

              <a
                href="#contact"
                className="
                  footer-link
                  w-fit
                  text-sm
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}

          <div className="footer-column">
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/20
              "
            >
              Social
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  footer-link
                  w-fit
                  text-sm
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="
                  footer-link
                  w-fit
                  text-sm
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:your-email@example.com"
                className="
                  footer-link
                  w-fit
                  text-sm
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Stack */}

          <div className="footer-column">
            <p
              className="
                mb-4
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white/20
              "
            >
              Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "GSAP"].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    text-white/35
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <div
          className="
            footer-bottom
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/[0.06]
            pt-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Nirmal. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-white/20">
            <span>Made with</span>

            <span className="text-purple-300/60">♥</span>

            <span>and lots of code.</span>
          </div>

          <p className="text-[11px] text-white/20">
            React · Tailwind · GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;