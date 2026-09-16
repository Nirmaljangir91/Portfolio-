import gsap from "gsap";

export const navbarAnimation = (navbar, links, button, logo) => {
  const tl = gsap.timeline();

  tl.fromTo(
    navbar,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }
  );

tl.fromTo(
    logo,
    {
      x: -50,
      opacity: 0,
    },{
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }
  ),
  tl.fromTo(
    links,
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.4"
  );

  tl.fromTo(
    button,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "-=0.3"
  );

  return tl;
};