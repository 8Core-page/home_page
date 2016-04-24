
$(document).ready(function() {
    "use-strict";    
    $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
			$this.html(event.strftime(
				'<div>%D<span>days</span></div>' + 
				'<div>%H<span>hours</span></div>' + 
				'<div>%M<span>minutes</span></div>' +
				'<div>%S<span>seconds</span></div>'
			));
		});
	});

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'

    });
    /*$('a.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 900);
        return false;
      }
    }
  });

    /*Url jumping*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });*/
    //new WOW().init();
    // Animate and WOW Animation
      var wow = new WOW(
          {
              offset: 50,
              live: true
          }
      );
      wow.init();
  });
