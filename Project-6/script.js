const scroll = new LocomotiveScroll({
  el: document.querySelector(`.main`),
  smooth: true,
});

let tl = gsap.timeline();

tl.to(".page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to(".page1", {
  y: "0vh",
  duration: 1,
  delay: 1,
});

tl.to(".page1", {
  rotate: 360,
  duration: 0.7,
  scale: 1,
});

const h2Element = document.querySelector(".page4-right h2");
const arrow = h2Element.querySelector(".arrow");
const text = h2Element.querySelector(".text");

// Animation on hover
h2Element.addEventListener("mouseenter", () => {
  gsap.to(arrow, {
     left: "45%",
     duration: 0.3 
    }); // Slide arrow to center
  gsap.to(text, {
     x: "170%",
    duration: 0.3 
    }); // Slide text out to the right
});

// Animation on mouse leave
h2Element.addEventListener("mouseleave", () => {
  gsap.to(arrow, { left: "-100%", duration: 0.3 }); // Hide arrow off-screen
  gsap.to(text, { x: "0%", duration: 0.3 }); // Reset text to center
});
