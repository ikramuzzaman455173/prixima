
$(document).ready(function () {
$("#heroSlider").owlCarousel({
  loop: true,
//   margin: 10,
  nav: true,
    items: 1,
    //slider speed smooth
    smartSpeed: 1000,
    //dots hide
    dots: false,
    //TEXT ADD
    navText: ['PREV', 'NEXT'],
    //default settings:
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:false,
  responsive: {
    0:{
      nav:false
    },
    768: {
      nav:true,
    }
  },

}),

  $("#project-slider").owlCarousel({
    loop: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    autoplay: true,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  }),
$("#review-slider").owlCarousel({
  loop: true,
  smartSpeed: 1000,
  dots: true,
  autoplay:true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  items:1,
  responsive: {},
});
});