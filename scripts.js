// alert("Hello! I am an alert box!!");


$( document ).ready(function() {
    console.log( "ready!" );
});


$(document).ready(function() {
    $("#header").hide(); //hide your div initially
    var topOfempty = $("#empty").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfempty) { //scrolled past the other div?
            $("#header").show(); //reached the desired point -- show div
        }
    });
    $(window).scroll(function() {
        if($(window).scrollTop() < topOfempty) { //scrolled past the other div?
            $("#header").hide(); //reached the desired point -- show div
        }
    });
});


$("a.more").click(function(){
  $("span.hidden").css("display", "block");
  $("a.more").css("display", "none");
  $("a.less").css("display", "inline");
  $(".content").css("padding-top","2%");
  $(".feature-photo#profile").css("margin-top","35px");
});


// $("a.less").click(function(){
//   $("span.hidden").css("display", "none");
//   $("a.less").css("display", "none");
//   $("a.more").css("display", "inline");
// });