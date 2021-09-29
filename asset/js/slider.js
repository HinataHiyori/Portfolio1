$(window).on('load resize',function() {
  if (window.innerWidth < 480) {
    $(function(){
      $('.slider').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        fade: true,
      });
    });
  }
});
