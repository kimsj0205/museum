

var swiper = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 'auto',
  loop: true,
  allowTouchMove: false
});


// famous-painting
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".box:nth-child(odd)").forEach(item => {
  gsap.to(item, {
      yPercent:50,
      ease: "none",
      duration: 0.1,
      scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
      }
  });
});
gsap.utils.toArray(".box:nth-child(even)").forEach(item => {
  gsap.to(item, {
      yPercent:150,
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
      }
  });
});

var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});