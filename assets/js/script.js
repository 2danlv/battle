jQuery(document).ready(function($) {
    $('.c-head').on('click', function(e) {
        var item = $(this);
        var parent_item = item.parents('.c-expand');
        parent_item.toggleClass('expanded');
        if (parent_item.hasClass('expanded')) {
            parent_item.find('.c-content').slideDown(800);
        } else {
            parent_item.find('.c-content').slideUp(500);
        }
            //parent_item.find('.c-group-content').slideToggle(800);
        });
    var brandSlider = $('.hero .owl-carousel');
        brandSlider.owlCarousel({
          center: true,
          loop: true,
          autoplay:true,
          items: 3,
           smartSpeed: 500,
           nav: true,
           mouseDrag: false,
           touchDrag: false,
           navText: [$(''),$('')],
           responsive : {
            0 : {
               touchDrag: true,
            }
          }
      });
        var brandSlider = $('.partner-list .owl-carousel');
        brandSlider.owlCarousel({
          loop: true,
          items: 6,
          autoplay:true,
          smartSpeed: 300,
          nav: false,
          dot: true,
          mouseDrag: false,
          touchDrag: false,
          responsive : {
    // breakpoint from 0 up
    0 : {
      items: 2,
      nav: true,
      dots: false,
      touchDrag: true,
    },
    // breakpoint from 480 up
    480 : {
      items: 3,
      nav: true,
      dots: false,
      touchDrag: true,
    },
    // breakpoint from 768 up
    768 : {
      items: 6
    }
  }
});
});