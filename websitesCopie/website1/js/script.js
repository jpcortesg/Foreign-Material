$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) {
      $('.navbar').addClass('sticky');
      $(".gotop").fadeIn();
    }
    else {
      $('.navbar').removeClass('sticky');
      $(".gotop").fadeOut();
    }
  });

  $('.gotop').click(function(){
    scroll(0,0);
  })

  $('.menu-toggler').click(function(){
    $(this).toggleClass('active');
    $('.navbar-menu').toggleClass('active');
  })

  $('.works').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
  })
});