$(".mobile-nav").click(function() {
  // $(this).preventDefault();
  $(this).toggleClass('mobile_active');
  $(".header-nav").toggleClass('mobile-nav_active');
  $("body").toggleClass('overhidden');
  });

  
$('.header-nav__link').click(function() {
  if ( $('.mobile-nav').hasClass("mobile_active") ) {
    $(".mobile-nav").toggleClass('mobile_active');
    $(".header-nav").toggleClass('mobile-nav_active');
    $("body").toggleClass('overhidden');
  };
});


  // if( $(".mobile-nav").hasClass("mobile_active") )