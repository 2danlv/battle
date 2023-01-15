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
    $('a[href*="#"]').on('click', function(e) {
            var j_e = $($(this).attr('href'));
            e.preventDefault();
            // scroll to position
            if (j_e.length > 0) {
                e.preventDefault();

                let pos_ele = j_e.offset().top;

                $('html, body').stop().animate({ scrollTop: pos_ele }, 800);
            }
        });
    var hero_Slider = $('.hero .owl-carousel');
        hero_Slider.owlCarousel({
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
        var map_Slider = $('.group-map .owl-carousel');
        map_Slider.owlCarousel({
          center: true,
          loop: true,
          autoplay:true,
          items: 1,
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
        var partner_Slider = $('.partner-list .owl-carousel');
        partner_Slider.owlCarousel({
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