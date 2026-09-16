import { useLayoutEffect, useRef, useState } from "react";
import { contactAnimation } from "../Animations/Contact.animation";

const Contact = () => {
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useLayoutEffect(() => {
    return contactAnimation(contactRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="
        contact-section
        relative
        isolate
        overflow-hidden
        bg-[#080808]
        px-5
        py-28
        text-white
        sm:px-6
        sm:py-36
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          contact-grid
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          [background-size:70px_70px]
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      />

      {/* =====================================================
          GLOWS
      ====================================================== */}

      <div
        className="
          contact-glow
          contact-glow-1
          pointer-events-none
          absolute
          left-[-15%]
          top-[15%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-600/10
          blur-[140px]
        "
      />

      <div
        className="
          contact-glow
          contact-glow-2
          pointer-events-none
          absolute
          bottom-[-10%]
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

        <div className="contact-heading mb-16 text-center sm:mb-20">
          <div className="contact-eyebrow mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-purple-400/60" />

            <span className="text-[11px] uppercase tracking-[0.35em] text-purple-300/60">
              Get In Touch
            </span>

            <span className="h-px w-10 bg-purple-400/60" />
          </div>

          <h2
            className="
              contact-title
              text-5xl
              font-bold
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Let's build
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
              something.
            </span>
          </h2>

          <p
            className="
              contact-subtitle
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-white/40
              sm:text-lg
            "
          >
            Have an idea, project, or opportunity? I'd love to hear about it.
            Send me a message and let's turn your idea into something real.
          </p>
        </div>

        {/* =================================================
            CONTACT CONTENT
        ================================================== */}

        <div
          className="
            contact-content
            grid
            gap-6
            lg:grid-cols-[0.75fr_1.25fr]
          "
        >
          {/* =================================================
              LEFT — CONTACT INFO
          ================================================== */}

          <div
            className="
              contact-info
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-gradient-to-br
              from-white/[0.055]
              to-white/[0.015]
              p-7
              shadow-[0_30px_100px_rgba(0,0,0,0.3)]
              backdrop-blur-xl
              sm:p-9
              lg:p-10
            "
          >
            {/* Decorative glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-80px]
                top-[-80px]
                h-52
                w-52
                rounded-full
                bg-purple-600/10
                blur-[80px]
              "
            />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                Contact
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-white/90
                  sm:text-4xl
                "
              >
                Have a project
                <br />
                in mind?
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/35">
                Whether you're looking for a developer, have a project idea,
                or simply want to connect, feel free to reach out.
              </p>

              {/* Availability */}

              <div
                className="
                  mt-9
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  px-4
                  py-3
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>

                <span className="text-xs text-white/45">
                  Available for opportunities
                </span>
              </div>

              {/* Contact details */}

              <div className="mt-10 space-y-5">
                {/* Email */}

                <a
                  href="mailto:your-email@example.com"
                  className="
                    contact-detail
                    group
                    flex
                    items-center
                    gap-4
                    transition-colors
                    duration-300
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      text-sm
                      text-purple-300/70
                      transition-all
                      duration-300
                      group-hover:border-purple-400/20
                      group-hover:bg-purple-500/10
                    "
                  >
                    @
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/55 transition-colors group-hover:text-white/80">
                      your-email@example.com
                    </p>
                  </div>
                </a>

                {/* Location */}

                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      text-sm
                      text-purple-300/70
                    "
                  >
                    ◎
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/55">
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}

              <div className="mt-10 border-t border-white/[0.06] pt-7">
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
                  Connect
                </p>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-2
                      text-xs
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-white/15
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-2
                      text-xs
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-white/15
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    LinkedIn
                  </a>

                  <a
                    href="mailto:your-email@example.com"
                    className="
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-4
                      py-2
                      text-xs
                      text-white/40
                      transition-all
                      duration-300
                      hover:border-white/15
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <div
            className="
              contact-form-wrapper
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.08]
              bg-gradient-to-br
              from-white/[0.055]
              to-white/[0.015]
              p-7
              shadow-[0_30px_100px_rgba(0,0,0,0.3)]
              backdrop-blur-xl
              sm:p-9
              lg:p-10
            "
          >
            {/* Top glow */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-purple-600/10
                blur-[100px]
              "
            />

            <form
              onSubmit={handleSubmit}
              className="contact-form relative z-10"
            >
              {/* Name */}

              <div className="contact-field">
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/15
                    transition-all
                    duration-300
                    focus:border-purple-400/30
                    focus:bg-purple-500/[0.025]
                    focus:ring-1
                    focus:ring-purple-400/10
                  "
                />
              </div>

              {/* Email */}

              <div className="contact-field mt-5">
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="
                    h-14
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-4
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/15
                    transition-all
                    duration-300
                    focus:border-purple-400/30
                    focus:bg-purple-500/[0.025]
                    focus:ring-1
                    focus:ring-purple-400/10
                  "
                />
              </div>

              {/* Message */}

              <div className="contact-field mt-5">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="
                    min-h-[160px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-white/15
                    transition-all
                    duration-300
                    focus:border-purple-400/30
                    focus:bg-purple-500/[0.025]
                    focus:ring-1
                    focus:ring-purple-400/10
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  contact-submit
                  group
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  bg-white
                  px-5
                  py-4
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/90
                  hover:shadow-[0_15px_40px_rgba(255,255,255,0.08)]
                  active:translate-y-0
                "
              >
                <span>Send Message</span>

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            contact-footer
            mt-20
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Nirmal. All rights reserved.
          </p>

          <p className="text-xs text-white/20">
            Designed & built with React + GSAP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;