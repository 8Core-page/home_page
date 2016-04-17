/*jQuery(document).ready(function($) {

   $(".scroll a, .navbar-brand, .gototop").click(function(event)
   {
   alert('Que pedo');
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
   $(".scroll li").removeClass('active');
   $(this).parents('li').toggleClass('active');
   });
 });*/
/*
$("#a").click(function() {
   var offset = 20; //Offset of 20px

   $('html, body').animate({
       scrollTop: $("#clientesSec").offset().top + offset
   }, 2000);
});*/


$(document).ready(function() {
    "use-strict";

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
