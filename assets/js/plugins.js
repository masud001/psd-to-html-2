// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
// owl carousel 1
$(document).ready(function(){
  $('.carousel-1').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:5
        }
    }
});

  var owl = $('.carousel-1');
  owl.owlCarousel();
  // Go to the next item
  $('.next-btn-1').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.prev-Btn-1').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })


// owl carousel 2
  $('.carousel-2').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});
  var owl2 = $('.carousel-2');
  owl2.owlCarousel();
  // Go to the next item
  $('.next-btn-2').click(function() {
      owl2.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.prev-Btn-2').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl2.trigger('prev.owl.carousel', [300]);
  })



});