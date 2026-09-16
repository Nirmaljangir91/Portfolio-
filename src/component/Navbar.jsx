import { useLayoutEffect, useRef } from "react";
import { navbarAnimation } from "../Animations/Navbar.animations";

const Navbar = () => {
  const navbarRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const logoRef = useRef(null);

  const addToLinks = (element) => {
    if (element && !linksRef.current.includes(element)) {
      linksRef.current.push(element);
    }
  };

  useLayoutEffect(() => {
    const ctx = navbarAnimation(
      navbarRef.current,
      linksRef.current,
      buttonRef.current,
      logoRef.current
    );

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="
        fixed
        left-1/2
        top-4
        z-50
        flex
        w-[90%]
        max-w-6xl
        -translate-x-1/2
        items-center
        justify-between
        rounded-2xl
        border
        border-white/20
        bg-white/10
        px-6
        py-4
        shadow-lg
        backdrop-blur-xl
      "
    >
      {/* Logo */}

      <a
        ref={logoRef}
        href="/"
        className="
          text-xl
          font-bold
          text-white
          transition-opacity
          duration-300
          hover:opacity-70
        "
      >
        Nirmal.
      </a>

      {/* Navigation */}

      <div className="hidden items-center gap-8 md:flex">
        <a
          ref={addToLinks}
          href="/"
          className="
            text-white
            transition-colors
            duration-300
            hover:text-gray-300
          "
        >
          Home
        </a>

        <a
          ref={addToLinks}
          href="#about"
          className="
            text-white
            transition-colors
            duration-300
            hover:text-gray-300
          "
        >
          About
        </a>

        <a
          ref={addToLinks}
          href="#projects"
          className="
            text-white
            transition-colors
            duration-300
            hover:text-gray-300
          "
        >
          Projects
        </a>
      </div>

      {/* Let's Talk */}

      <a
        ref={buttonRef}
        href="#contact"
        className="
          rounded-full
          bg-white
          px-5
          py-2
          font-medium
          text-black
          transition-all
          duration-300
          hover:scale-105
          hover:bg-white/90
          active:scale-95
        "
      >
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;