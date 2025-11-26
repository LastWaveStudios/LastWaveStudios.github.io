jQuery(document).ready(function () {

  var navHeight = jQuery('.navbar-fixed-top').height();

  jQuery('body').scrollspy({
    target: '#navbar-main',
    offset: 200
  });

  jQuery('#navbar-main [href=#]').click(function (e) {
    e.preventDefault()
  });

});

jQuery(document).ready(function () {
  jQuery('body').scrollspy('refresh')
});

jQuery('.navbar-default').addClass('opaqued');

function Back() {
  window.history.back();
}
let cmAngle = 0;
const cmMembers = 6;
const cmCarousel = document.getElementById('cm-carousel');

function rotateCMCarousel(direction) {
  const step = 360 / cmMembers;
  cmAngle += step * direction * -1;
  cmCarousel.style.transform = `rotateY(${cmAngle}deg)`;
}

var windowsHeight = $(window).height();
$('#headerwrap').css('height', windowsHeight + 'px');

if ($('#headerwrap').data('backstretch')) {
  $('#headerwrap').backstretch('destroy');
}


var indiceActual = 0;
var textos = [
  "The music box"/*,
    "Background 2",
    "Background 3"*/
];
var first = true;
var ButtonPressed = false;
$('#Backgrounds').css('height', windowsHeight + 'px');


function actualizarTexto() {
  // para hacer transición suave (opcional)
  $('#banner-text').fadeOut(300, function () {
    $(this).text(textos[indiceActual]).fadeIn(300);
  });
}

$('#banner-text').text(textos[indiceActual]); // texto inicial

$('#Backgrounds').on('backstretch.after', function (e, instance, index) {
  if (first) {
    first = false
    return;
  }
  if (!ButtonPressed) {
    indiceActual = (indiceActual + 1) % textos.length; // avanza
  } else {
    ButtonPressed = false;
  }
  actualizarTexto();

});
jQuery(document).ready(function () {

  jQuery('.service-icon-wrapper, .fade-up, .fade-down, .team-image-wrapper').addClass('no-display');

  jQuery('.service-icon-wrapper').one('inview', function () {
    jQuery(this).addClass('animated bounceIn');
  });

  jQuery('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  jQuery('#single-post-nav a').tooltip();

  jQuery('.team-image-wrapper').one('inview', function () {
    jQuery(this).addClass('animated bounceIn');
  });

  jQuery('.fade-up').one('inview', function () {
    jQuery(this).addClass('animated fadeInUp');
  });

  jQuery('.fade-down').one('inview', function () {
    jQuery(this).addClass('animated fadeInDown');
  });

  var serviceWidth = $('.service-icon-wrapper').width() + 30;
  $('.service-icon-wrapper .icon').css('line-height', serviceWidth + 'px');

  $("body").niceScroll({
    cursorcolor: '#202020',
    cursorwidth: 15,
    cursorborderradius: 0,
    cursorborder: '0px solid #fff'
  });
});

$(window).scroll(function () {
  if (jQuery('body').hasClass('single')) {
    var scroll_pos = 0;
    $(document).scroll(function () {
      var windowsHeight = $(window).height();
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 300) {
        $(".navbar-default").css('background-color', 'rgba(255,255,255,1.0)');
        $('.navbar-default').removeClass('opaqued');
      } else {
        $(".navbar-default").css('background-color', 'rgba(255,255,255,0.0)');
        $('.navbar-default').addClass('opaqued');
      }
    });
  } else {
    var scroll_pos = 0;
    $(document).scroll(function () {
      var windowsHeight = $(window).height();
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > windowsHeight) {
        $(".navbar-default").css('background-color', 'rgba(255,255,255,1.0)');
        $('.navbar-default').removeClass('opaqued');
      } else {
        $(".navbar-default").css('background-color', 'rgba(255,255,255,0.0)');
        $('.navbar-default').addClass('opaqued');
      }
    });
  }

});

//$(document).ready(function(){
//$(document).scroll(function() {
//var windowsHeight = $(window).height();
//var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / windowsHeight, 0.9);
//var channel = Math.round(alpha * 255);
//$(".navbar-default").css('background-color', 'rgb(' + channel + ',' + channel + ',' + channel + ')');
//});
//});
