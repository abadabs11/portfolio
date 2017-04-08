$("a.more").click(function(){
  $("span.hidden").css("display", "block");
  $("a.more").css("display", "none");
  $("a.less").css("display", "inline");
  $(".icons").css("display","block");
  $(".text").css("margin-top","0");
  $(".feature-photo#profile").css("margin-top","-2%");
});

$("a.less").click(function(){
  $("span.hidden").css("display", "none");
  $("a.more").css("display", "inline");
  $("a.less").css("display", "none");
  // $(".icons").css("animation", "fade-out 1s ease-in-out .5s backwards");
  $(".text").css("margin-top","70px");
  $(".feature-photo#profile").css("margin-top","initial");
  $(".icons").css("display", "none");
});



$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});





$(window).scroll(function(){
    if( $(window).scrollTop() > 20) {
        $(".team").css("opacity", "1");
    } else {
        $(".team").css("opacity","0");
    }
});




