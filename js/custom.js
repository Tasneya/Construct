$(function () {
	//Back-top

	$('.back-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	});

	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 20) {
			$('.back-top').fadeIn(500);
		} else {
			$('.back-top').fadeOut(500);
		}

	});

	//preloader
	$(window).on('load', function () {
		$('.preloader').delay(500).fadeOut(500);
	});

	//light2
	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 200) {
			$('.navbar').addClass('light2');
		} else {
			$('.navbar').removeClass('light2');
		}

	});

	//play video
	$(document).ready(function () {
		$('.venobox').venobox();
	});

	//animation scroll js
	var html_body = $('html, body');
	$('.navbar-light .navbar-nav .nav-link').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 0
				}, 1500);
				return false;
			}
		}
	});

	//bg video 
	jQuery(".player").YTPlayer();

	// counter js
	$('.counter').counterUp({
		delay: 5,
		time: 1500
	});

	//slick slider
	$('.team-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		nextArrow: '.fa-long-arrow-right',
		prevArrow: '.fa-long-arrow-left',
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
    }
	,
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
    }
  ]
	});

	$('.Honey').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		nextArrow: '.fa-arrow-right',
		prevArrow: '.fa-arrow-left',


		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
    }]
	});
	//typed js 

	$(".typed").typed({
		strings: ["CONSTRUCTION <br> BUSINESS.", "We Are Available For Any Construction Works.", "We Build Your Dream.", "We Renovate Your Home With Heart 💛"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {}
	});

});
