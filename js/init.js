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

$('#headerwrap').backstretch([
  "images/bg1.gif"/*
      , "images/bg2.jpg"
      , "images/bg3.jpg"*/
]/*, {duration: 3000, fade: 750}*/);

$('#headerwrap2').css('height', windowsHeight + 'px');

$('#headerwrap2').backstretch(["images/bg1.jpg"]);
var indiceActual = 0;
var textos = [
  "The music box"/*,
    "Background 2",
    "Background 3"*/
];
var first = true;
var ButtonPressed = false;
$('#Backgrounds').css('height', windowsHeight + 'px');

$('#Backgrounds').backstretch([
  "images/Background1.jpg"/*
      , "images/bg2.jpg"
      , "images/bg3.jpg"*/
]);

function actualizarTexto() {
  // para hacer transición suave (opcional)
  $('#banner-text').fadeOut(300, function () {
    $(this).text(textos[indiceActual]).fadeIn(300);
  });
}

$('#banner-text').text(textos[indiceActual]); // texto inicial
/*
$('#prev').on('click', function () {
  $('#Backgrounds').backstretch("prev");
  indiceActual = (indiceActual - 1 + textos.length) % textos.length; // retrocede
  ButtonPressed=true;
});

$('#next').on('click', function () {
  $('#Backgrounds').backstretch("next");
  indiceActual = (indiceActual + 1) % textos.length; // avanza
  ButtonPressed=true;
});
*/
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

  $("#logo-slider").owlCarousel({
    items: 6,
    pagination: true,
    navigationText: [
      "<i class='el-icon-chevron-left icon-white'></i>",
      "<i class='el-icon-chevron-right icon-white'></i>"
    ]
  });

  $("#portfolio-carousel").owlCarousel({
    items: 3,
    pagination: false,
    navigation: true,
    navigationText: [
      "<i class='el-icon-chevron-left icon-white'></i>",
      "<i class='el-icon-chevron-right icon-white'></i>"
    ]
  });

  $('.launch-lb').magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade'
  });

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
