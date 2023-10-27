gsap.from("#page1 > h1,#page1>#find", {
  opacity: 0,
  delay: 0.5,
  duration: 2,
});
gsap.from("#page1 :nth-child(2)", {
  opacity: 0,
  delay: 0.4,
  duration: 1,
  y: 100,
});
gsap.from("#page1 :nth-child(3)", {
  opacity: 0,
  delay: 0.4,
  duration: 1,
  x: 100,
});
gsap.from("#page1 :nth-child(4)", {
  opacity: 0,
  delay: 0.4,
  duration: 1,
  y: -200,
});
