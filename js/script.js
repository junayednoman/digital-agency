	$(document).ready(function(){
     $('.venobox').venobox(); 
     
     // carousel
     $('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        480:{
        	items:2
        },
        600:{
            items:2
        },
        768:{
        	items:3
        },
        1000:{
            items:3
        }
    }
	})
     
     // go to top
    $(window).scroll(function() {
      var dictance = $(window).scrollTop();
     $('.text').text(dictance);

      if (dictance > 700) {
        $('.t_top').fadeIn();
      }
      else{
         $('.t_top').fadeOut();
      };
    });
      $('.t_top').on('click', function(){
        $('html').animate( {scrollTop :0 } );
      });

});
