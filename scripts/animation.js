const tl = gsap.timeline({defaults: {
  duration: 0.75,
  ease: "elastic.out(1, 0.3)"
}});


tl.fromTo('header', {y: 100}, {y: 0, duration: 2});