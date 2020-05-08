$(document).ready(function(){
  $('.header_slider_active').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      animateOut:'fadeOut',
      animateIn:'fadeIn',
      autoplayHoverPause: true,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
  /*aos*/
  AOS.init({
      duration:2000,

  });
/*testimonial carousel*/
  $('.testimonial_active ').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause: true,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

  /*about slider*/
  $('.about_slider_active').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      animateOut:'fadeOut',
      animateIn:'fadeIn',
      autoplayHoverPause: true,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

  /*gellary area*/
  $('.gellary_slider_active').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      animateOut:'fadeOut',
      animateIn:'fadeIn',
      autoplayHoverPause: true,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  /*scroll button*/
  $(window).scroll(function(){
  if($(this).scrollTop() > 800){
    $('#topBtn').fadeIn();
  }else {
    $('#topBtn').fadeOut();
  }
})
  $('#topBtn').click(function(){
    $('html,body').animate({
      scrollTop: 0},800);
  });

  /*typer js*/
  $("#example").typer({
    typeSpeed: 120,
  backspaceSpeed: 20,
  backspaceDelay: 1200,
  repeatDelay: 1000,
  repeat: true,
  autoStart: true,
  startDelay: 100,
  strings: [
    "Jony CmT",
    "Design Foundation",
    "I'm Web Designer ,",
    "Wordpress Developer",
  ]
});
});
function openNav() {
  document.getElementById('myNav').style.width="100%";
}
function closeNav() {
  document.getElementById('myNav').style.width="0%";
}
/*loader*/
var Preloader=document.getElementById("pageLoader");
function myFunction(){
  Preloader.style.display="none"}
