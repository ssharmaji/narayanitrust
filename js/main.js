
(function ($) {
	$('body').fadeIn(1500);
	AOS.init({
		disable: 'mobile',
		duration: 2000,
		once: true,
	});
	$('.banner-slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:false,
	})
	


	


	$('.gallery-box').click(function (e) {
		e.preventDefault();
		var getImg = $(this).children('figure').children('img').attr('src');
		var getName = $(this).children('p').text();
		$('body').addClass('active-popup');
		$('.product-popup').addClass('active');
		$('.product-popup img').attr('src', getImg);
		$('.product-popup h6').text(getName);
	})
	$('.product-popup').click(function () {
		$(this).removeClass('active');
		$('body').removeClass('active-popup');
	});

	// header navigation dropdown
	$('.navigation li a[href*="#"]').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).parents('ul').addClass('active');
		$('.navigation-bar').addClass('active');
		$('body').addClass('active-popup');
		var getDropDown = $(this).attr('href');
		$(getDropDown).addClass('active');
		setTimeout(function () {
			$('header .btn-close').addClass('active');
			$('.navigation-bar .inner-menu').fadeIn();
			$('.navigation-bar').addClass('showtime');
		}, 700);
		$(getDropDown).siblings('ul').removeClass('active');
	});
	$('.navigation-bar').click(function (e) {
		e.stopPropagation();
	});

	$('.navigation li a[href*="#"]').hover(function () {
		var getDropDown = $(this).attr('href');
		$(getDropDown).addClass('active');
		$(getDropDown).siblings('ul').removeClass('active');
		$(this).addClass('active');
		$(this).parent().siblings().children().removeClass('active');
		$('.inner-submenu').removeClass('active');
		$('.inner-submenu ul').removeClass('active');
		$('.navigation-bar').removeClass('active-menu');
	});
	$('.has-children a').hover(function () {
		$('.navigation-bar').addClass('active-menu');
		var getChilren = $(this).attr('href');
		$(getChilren).siblings('ul').removeClass('active');
		$(getChilren).addClass('active');
		setTimeout(function () {
			$('.inner-submenu').addClass('active');
		}, 500);
	})
	$('.has-children a').click(function (e) {
		e.preventDefault();
		$('.navigation-bar').fadeIn();
		var getChilren = $(this).attr('href');
		$(getChilren).siblings('ul').fadeOut();
		$(getChilren).fadeIn();
		$(this).parents('ul').fadeOut();
		$('.inner-submenu').fadeIn();
		// setTimeout(function () {
		// 	$('.inner-submenu').fadeIn();
		// }, 500);
	})
	$('header .btn-close').click(function (e) {
		$(this).removeClass('active');
		$('.navigation ul').removeClass('active');
		$('.navigation-bar').removeClass('active active-menu showtime');
		$('.inner-submenu ul').removeClass('active');
		$('body').removeClass('active-popup');
		$('.inner-submenu').removeClass('active')
		$('.navigation-bar .inner-menu').fadeOut();
	});
	$('body').click(function () {
		$('.navigation ul').removeClass('active');
		$('.navigation-bar').removeClass('active active-menu showtime');
		$('header .btn-close').removeClass('active');
		$('body').removeClass('active-popup');
		$('.navigation-bar .inner-menu').fadeOut();
	});



	$('.journal-section .more-btn').click(function () {
		$(this).siblings('.slide-section').stop().slideToggle();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).text('Close');
		}
		else {
			$(this).text('More');
		}
	})
	$('.journalBox-section .blog-box').slice(0, 6).show();
	$('.journalBox-section .blog-box').slice(0, 6).css('opacity', '1');
	$('.journalBox-section .load-btn').click(function () {
		var that = $(this)
		that.parents().siblings('.blog-box').slideDown();
		setTimeout(function () {
			that.parents().siblings('.blog-box').css('transition', 'all 1s');
		}, 250);
		that.fadeOut();
		setTimeout(function () {
			$('.journalBox-section .blog-box').css('opacity', '1');
		}, 500);
	});
	$('.contact-form .inner-box').click(function () {
		$(this).toggleClass('active');
		$(this).siblings('.toggle-section').fadeToggle();
	})
	$('.contact-form .form-section .box-head').click(function (e) {
		e.stopPropagation();
		$(this).addClass('active');
		$(this).siblings('.form-box').fadeIn();
	})
	$('.contact-form .form-section .btn-close').click(function (e) {
		e.stopPropagation();
		$(this).parents('.box-head').removeClass('active');
		$(this).parents('.box-head').siblings('.form-box').fadeOut();
	})
	$(".toggle-btn").click(function (e) {
		e.stopPropagation();
		$(this).toggleClass("active");
		$('.navigation-bar').toggleClass('active');
		$('.mobile-nav').addClass('active');
	});
	$('.mobile-nav li a[href*="#"]').click(function (e) {
		e.preventDefault();
		var getSub = $(this).attr('href');
		$(getSub).fadeIn();
		$(getSub).siblings().fadeOut();
		$('.inner-brand').addClass('active');
	})
	$(".navigation-bar").on("click", ".inner-brand.active", function (e) {
		$('.inner-menu ul').fadeOut();
		$('.inner-menu ul.mobile-nav').fadeIn();
		$(this).removeClass('active');
		e.preventDefault();
	});
	// $('.inner-brand.active').click(function (e) {
	// 	$('.inner-menu ul').fadeOut();
	// 	$('.inner-menu ul.mobile-nav').fadeIn();
	// 	e.preventDefault();
	// 	return false;


	// })
	$('.form-group .form-control').focusin(function () {
		$(this).siblings('label').addClass('active')
	})
	$('.form-group .form-control').focusout(function () {
		var that = $(this)

		if (that.val() == '') {
			that.siblings('label').removeClass('active');
		}
	});
	$('.filterBtn-section .filter-btn').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.filter-category').slideToggle();
	});

	var position = $(window).scrollTop();
	// should start at 0
	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
			$('header').addClass('fixed');
		}
		else {
			$('header').removeClass('fixed');
		}
	})
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > position) {
			// console.log('scrollDown');
			$('header').removeClass('up');
		}
		else {
			$('header').addClass('up');
		}
		position = scroll;
	});
	$('.booking-btn').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').addClass('active-popup');
		$('.booking-popup').addClass('active');
	});
	$('.booking-popup .btn-close').click(function (e) {
		e.preventDefault();
		$('.booking-popup').removeClass('active');
		$('body').removeClass('active-popup');
		$('.booking-popup .popup-container:first').show().siblings().hide();
	});
	$('.booking-wrap a.colmn-box').click(function (e) {
		e.preventDefault();
		var getLocation = $(this).attr('href');
		$(getLocation).show().siblings().hide();
	});
	$('.select-box h3').click(function () {
		$(this).siblings('ul').toggleClass('active');
	});
	$('.select-box li a').click(function (e) {
		e.preventDefault();
		var getLocation = $(this).attr('href');
		$(getLocation).show().siblings().hide();
		$(this).parents('ul').removeClass('active');
	})
	$('.slider-section').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// centerPadding: '100px',
		// centerMode: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	})
})(jQuery);

