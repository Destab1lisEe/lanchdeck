var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);

var scene3 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);

var scene4 = document.getElementById('scene4');
var parallaxInstance = new Parallax(scene4);

$(".button-startup").hover(function() {
  $('.enter-section__image').toggleClass('active');
});

$(".button-company").hover(function() {
  $('.enter-section__satellite').toggleClass('active');
});

$("button").hover(function() {
  $('.footer__description img').toggleClass('active');
});

$(".rocket-up").hover(function() {
  $('.hero-section .image').toggleClass('active');
});

$(".companys-section__item1 .button").hover(function() {
  $('.companys-section__planet1').toggleClass('active');
});

$(".companys-section__item2 .button").hover(function() {
  $('.companys-section__planet2').toggleClass('active');
});

$(".companys-section__item3 .button").hover(function() {
  $('.companys-section__planet3').toggleClass('active');
});

$(".companys-section__item4 .button").hover(function() {
  $('.companys-section__planet4').toggleClass('active');
});

if (window.screen.width > 1124) {
	$(".sub-menu-activator").hover(function() {
		$('.sub-menu').addClass('active');
	});
	
	// $("header").mouseleave(function() {
	// 	$('.sub-menu').removeClass('active');
	// });

	$(".close").click(function() {
		$('.sub-menu').removeClass('active');
	});

	$(".services-button").click(function() {
		$('.sub-menu').addClass('active');
	});
}

$(".popup__close").click(function() {
	$('.popup').fadeOut();
	$('.wrapper').removeClass('popped');
});

$(".rocket").hover(function() {
  $(this).addClass('active');
});

var swiper = new Swiper(".testimonials-slider", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
    992: {
			allowTouchMove: false,
    }
  }
});

$(function () {
	if (navigator.userAgent.indexOf('Safari') != -1 && 
			navigator.userAgent.indexOf('Chrome') == -1) {
					$("body").addClass("safari");
			}
	});

@import('../files/video.js')