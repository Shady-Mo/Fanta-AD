gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
   scrollTrigger: {
      trigger: ".two",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
   },
});

tl.to("#fanta", {
   top: "125%",
   left: "-5%",
}, 'orange');

tl.to("#orange-cut", {
   top: "160%",
   left: "10%",
}, 'orange');

tl.to("#orange", {
   width: "15%",
   top: "175%",
   right: "10%",
}, 'orange');

tl.to("#leaf", {
   top: "90%",
   rotate: "130deg",
   left: "70%"
}, 'orange');

tl.to("#leaf2", {
   top: "110%",
   rotate: "130deg",
   left: "0%"
}, 'orange');

const tl2 = gsap.timeline({
   scrollTrigger: {
      trigger: ".three",
      start: "0% 95%",
      end: "20% 50%",
      scrub: true,
   },
});

tl2.from(".lemon1", {
   rotate: "-90deg",
   left: "-100%",
   top: "110%"
}, 'ca');

tl2.to("#orange-cut", {
   width: "18%",
   left: "41%",
   top: "200%"
}, 'ca');

tl2.to("#fanta", {
   width: "35%",
   top: "215%",
   left: "32.5%",
}, 'ca');