$(window).load(function() {
    animaHome();
    menuPrincipal();

});

function animaHome() {
  $(".loader").fadeOut("slow");
  $(".menu-home").addClass("menu-home-key");
  $(".linha-home").addClass("linha-home-key");
  $(".barra-lateral").addClass("barra-lateral-key");
  $(".texto-1").addClass("texto-1-anima");
  $(".texto-2").addClass("texto-2-anima");
  $(".texto-3").addClass("texto-3-anima");
  $(".texto-4").addClass("texto-4-anima");
  $("#Fill-22,#Fill-26,#Fill-28,#Fill-29,#Fill-30").addClass("anima-ilustra-fade");
  $("path,polygon,g").addClass("anima-ilustra-traco");
}

function menuPrincipal() {
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
          window.location.hash = target;
      });
  });
}

$(function() {
  var fundo = $('aside');

  $('.menu-haburguer').click(function() {
    fundo.addClass('aberto');
    fundo.removeClass('fechado');
  });

  $('.outro-fechar').click(function() {
    fundo.removeClass('aberto');
    fundo.addClass('fechado');
  });

});

$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = $(".section-home");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }
});




// function functionName() {
//
//   // 1. Create a variable
//   var $box = $('#box');
//
//   // 2. Create a First .to() Tween
//   // TweenLite.to($box, 0.7, {left: 0, x: 0});
//
//   // 3. Create a .from() Tween
//   // TweenLite.from($box, 2, {x: '-=200px', autoAlpha: 0});
//
//   // 4. Create a .set() Tween
//   //TweenLite.set($box, {x: '-=200px', scale: 0.3});
//   //TweenLite.set($box, {x: '+=100px', scale: 0.6});
//   //TweenLite.set($box, {x: '-50%', scale: 1});
//
//   // 5. Create a .fromTo() Tween
//   //TweenLite.fromTo($box, 2, {x: '-=200px'}, {x: 150});
//
//   // 6. Easing
//   TweenLite.fromTo(
//     $box, 2,
//     {x: '-=200px'},
//     {x: 150,
//       ease:Power4.easeInOut,
//       onStart: start,
//       onUpdate: update,
//       onComplete: complete
//     }
//   );
//
//   TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
//   TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
//   TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
//   TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
//   TweenLite.to($box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
//   TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});
//
// }
//
// // 7. Callback functions
// function start(){
//   console.log('start');
// }
//
// function update(){
//   console.log('animating');
// }
//
// function complete(){
//   console.log('end');
// }
