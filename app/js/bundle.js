!function(t){t("body").fadeIn(1500),AOS.init({disable:"mobile",duration:2e3,once:!0}),t(".banner-slider").slick({infinite:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1}),t(".gallery-box").click(function(e){e.preventDefault();var i=t(this).children("figure").children("img").attr("src"),a=t(this).children("p").text();t("body").addClass("active-popup"),t(".product-popup").addClass("active"),t(".product-popup img").attr("src",i),t(".product-popup h6").text(a)}),t(".product-popup").click(function(){t(this).removeClass("active"),t("body").removeClass("active-popup")}),t('.navigation li a[href*="#"]').click(function(e){e.preventDefault(),e.stopPropagation(),t(this).parents("ul").addClass("active"),t(".navigation-bar").addClass("active"),t("body").addClass("active-popup");var i=t(this).attr("href");t(i).addClass("active"),setTimeout(function(){t("header .btn-close").addClass("active"),t(".navigation-bar .inner-menu").fadeIn(),t(".navigation-bar").addClass("showtime")},700),t(i).siblings("ul").removeClass("active")}),t(".navigation-bar").click(function(e){e.stopPropagation()}),t('.navigation li a[href*="#"]').hover(function(){var e=t(this).attr("href");t(e).addClass("active"),t(e).siblings("ul").removeClass("active"),t(this).addClass("active"),t(this).parent().siblings().children().removeClass("active"),t(".inner-submenu").removeClass("active"),t(".inner-submenu ul").removeClass("active"),t(".navigation-bar").removeClass("active-menu")}),t(".has-children a").hover(function(){t(".navigation-bar").addClass("active-menu");var e=t(this).attr("href");t(e).siblings("ul").removeClass("active"),t(e).addClass("active"),setTimeout(function(){t(".inner-submenu").addClass("active")},500)}),t(".has-children a").click(function(e){e.preventDefault(),t(".navigation-bar").fadeIn();var i=t(this).attr("href");t(i).siblings("ul").fadeOut(),t(i).fadeIn(),t(this).parents("ul").fadeOut(),t(".inner-submenu").fadeIn()}),t("header .btn-close").click(function(e){t(this).removeClass("active"),t(".navigation ul").removeClass("active"),t(".navigation-bar").removeClass("active active-menu showtime"),t(".inner-submenu ul").removeClass("active"),t("body").removeClass("active-popup"),t(".inner-submenu").removeClass("active"),t(".navigation-bar .inner-menu").fadeOut()}),t("body").click(function(){t(".navigation ul").removeClass("active"),t(".navigation-bar").removeClass("active active-menu showtime"),t("header .btn-close").removeClass("active"),t("body").removeClass("active-popup"),t(".navigation-bar .inner-menu").fadeOut()}),t(".journal-section .more-btn").click(function(){t(this).siblings(".slide-section").stop().slideToggle(),t(this).toggleClass("active"),t(this).hasClass("active")?t(this).text("Close"):t(this).text("More")}),t(".journalBox-section .blog-box").slice(0,6).show(),t(".journalBox-section .blog-box").slice(0,6).css("opacity","1"),t(".journalBox-section .load-btn").click(function(){var e=t(this);e.parents().siblings(".blog-box").slideDown(),setTimeout(function(){e.parents().siblings(".blog-box").css("transition","all 1s")},250),e.fadeOut(),setTimeout(function(){t(".journalBox-section .blog-box").css("opacity","1")},500)}),t(".contact-form .inner-box").click(function(){t(this).toggleClass("active"),t(this).siblings(".toggle-section").fadeToggle()}),t(".contact-form .form-section .box-head").click(function(e){e.stopPropagation(),t(this).addClass("active"),t(this).siblings(".form-box").fadeIn()}),t(".contact-form .form-section .btn-close").click(function(e){e.stopPropagation(),t(this).parents(".box-head").removeClass("active"),t(this).parents(".box-head").siblings(".form-box").fadeOut()}),t(".toggle-btn").click(function(e){e.stopPropagation(),t(this).toggleClass("active"),t(".navigation-bar").toggleClass("active"),t(".mobile-nav").addClass("active")}),t('.mobile-nav li a[href*="#"]').click(function(e){e.preventDefault();var i=t(this).attr("href");t(i).fadeIn(),t(i).siblings().fadeOut(),t(".inner-brand").addClass("active")}),t(".navigation-bar").on("click",".inner-brand.active",function(e){t(".inner-menu ul").fadeOut(),t(".inner-menu ul.mobile-nav").fadeIn(),t(this).removeClass("active"),e.preventDefault()}),t(".form-group .form-control").focusin(function(){t(this).siblings("label").addClass("active")}),t(".form-group .form-control").focusout(function(){var e=t(this);""==e.val()&&e.siblings("label").removeClass("active")}),t(".filterBtn-section .filter-btn").click(function(e){e.preventDefault(),t(this).toggleClass("active"),t(".filter-category").slideToggle()});var i=t(window).scrollTop();t(window).scroll(function(){0<t(window).scrollTop()?t("header").addClass("fixed"):t("header").removeClass("fixed")}),t(window).scroll(function(){var e=t(window).scrollTop();i<e?t("header").removeClass("up"):t("header").addClass("up"),i=e}),t(".booking-btn").click(function(e){e.preventDefault(),e.stopPropagation(),t("body").addClass("active-popup"),t(".booking-popup").addClass("active")}),t(".booking-popup .btn-close").click(function(e){e.preventDefault(),t(".booking-popup").removeClass("active"),t("body").removeClass("active-popup"),t(".booking-popup .popup-container:first").show().siblings().hide()}),t(".booking-wrap a.colmn-box").click(function(e){e.preventDefault();var i=t(this).attr("href");t(i).show().siblings().hide()}),t(".select-box h3").click(function(){t(this).siblings("ul").toggleClass("active")}),t(".select-box li a").click(function(e){e.preventDefault();var i=t(this).attr("href");t(i).show().siblings().hide(),t(this).parents("ul").removeClass("active")}),t(".slider-section").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}(jQuery);