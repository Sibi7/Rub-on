$(document).ready(function () {

    var modal = $('.myModal');
    var modalas1 = $('.modalas1');
    var btn = $('.myBtn');
    var btn1 = $('.myBtn1');
    var span = $('.close')[0];
    //console.log(modal);

// When the user clicks on the button, open the modal
    $('.myBtn').click(function () {
        modal.show();
    });
    $('.myBtn1').click(function () {
        modalas1.show();
    });

// When the user clicks on <span> (x), close the modal
    $('.close').click(function () {
        modal.hide();
    });

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.hide();
        }
    }
    // open edit-accordion
    $('.edit-accordion').click(function (event) {
        $(this).next('.edit-accordion-list').slideToggle();
        return false;
    });
    $("body").click(function (e) {
        if ($(e.target).closest(".edit-accordion-list").length == 0) $(".edit-accordion-list").hide("slow");
    });
// close edit-accordion


    $(".owl-model").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: true,
        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        items: 6,
        dots: false,
        singleItem: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 6,
                nav: true,
                loop: true
            },
            1200: {
                items: 6,
                nav: true,
                loop: true
            }
        }
    });
    $(".owl-model-specials").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: true,
        navigation: true,
        /*navigationText: true,*/
        pagination: true,
        items: 4,
        dots: false,
        singleItem: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                loop: true
            }
        }

    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'

        // autoplay: true
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
        verticalSwiping: true
    });
// open help-category menu
    $('#cssmenu li.has-sub > a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('.has-sub>a').append('<span class="holder"></span>');
    // close
// open all-shops-category menu
    $('#cssmenu-1 li.has-sub > a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('.has-sub>a').append('<span class="holder"></span>');
    if (document.getElementById('cssmenu-1')) {
        $('.open').each(function () {
            $(this).find('ul').slideDown();
        });
    }
    // close
});

/* выбор города */
$(document).ready(function () {
    $('.delivery_list').click(function () {
        $(".cities_list").slideToggle('fast');
    });
    $('ul.cities_list li').click(function () {
        var tx = $(this).html();
        var tv = $(this).attr('alt');
        $(".cities_list").slideUp('fast');
        $(".delivery_list span").html(tx);
        $(".delivery_text").html(tv);
    });
});
// $(document).ready(function () {
//     $('.delivery_list1').click(function () {
//         $(".cities_list1").slideToggle('fast');
//     });F
//     $('ul.cities_list1 li').click(function () {
//         var tx = $(this).html();
//         var tv = $(this).attr('alt');
//         $(".cities_list1").slideUp('fast');
//         $(".delivery_list1 .select-category").html(tx);
//         $(".delivery_text1").html(tv);
//     });
// });

$(function () {
    $(".heading-change").click(function (e) {
        e.preventDefault();
        $(".heading-change").removeClass('active');
        $(this).addClass('active');
    })
});


$(document).ready(function () {
    $('.fancybox-thumb').fancybox({
        prevEffect: 'fade',
        nextEffect: 'fade',
        closeBtn: true,
        arrows: true,
        nextClick: true,
        helpers: {
            thumbs: {
                width: 40,
                height: 40

            }
        }
    });
    // карта
    var map;
    ymaps.ready(function () {
        if ($('#map').length > 0) {
            map = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            });
        }
    });

    if (window.innerWidth > 992) {
        $(window).scroll(function () {

            if ($(this).scrollTop() >= 253) {
                $('.adpage').addClass('fixed_addpage');
            }
            else {
                $('.adpage').removeClass('fixed_addpage');
            }
        });
    }


    /*sidebar*/

    var windowWidth = $(window).width();
    if (windowWidth > 770) {
        if ($('.ad-charasteristics').length > 0) {
            $(window).scroll(function () {
                var sb_m;
                if (window.innerWidth < 992) {
                    sb_m = 10;
                } else {
                    sb_m = 50;
                }

                /* отступ сверху и снизу */
                var mb = 300;
                /* высота подвала с запасом */
                var st = $(window).scrollTop();
                var sb = $(".ad-charasteristics");
                var sbi = $(".ad-charasteristics-form");
                var sb_ot = sb.offset().top;
                var sbi_ot = sbi.offset().top;
                var sb_h = sb.height();

                if (sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
                    if (st > sb_ot) {
                        var h = Math.round(st - sb_ot) + sb_m;
                        sb.css({"paddingTop": h});
                    }
                    else {
                        sb.css({"paddingTop": 0});
                    }
                }
            });
        }
    }
    $('.ad-charasteristics__mob-btn').click(function (event) {
        $('.ad-charasteristics-form').slideToggle();
    });

    if ($('.news__right').length > 0) {
        $(window).scroll(function () {
            var sb_m_n = 0;
            /* отступ сверху и снизу */
            var mb_n = 300;
            /* высота подвала с запасом */
            var st_n = $(window).scrollTop();
            var sb_n = $(".news__right");
            var sbi_n = $(".other-news");
            var sb_ot_n = sb_n.offset().top;
            var sbi_ot_n = sbi_n.offset().top;
            var sb_h_n = sb_n.height();
            if (sb_h_n + $(document).scrollTop() + sb_m_n + mb_n < $(document).height()) {
                if (st_n > sb_ot_n) {
                    var h = Math.round(st_n - sb_ot_n) + sb_m_n;
                    sb_n.css({"paddingTop": h});
                }
                else {
                    sb_n.css({"paddingTop": 0});
                }
            }

        });
    }

    if ($('.all-shops__content_left').length > 0) {
        $(window).scroll(function () {
            var sb_m_n = 50;
            /* отступ сверху и снизу */
            var mb_n = 300;
            /* высота подвала с запасом */
            var st_n = $(window).scrollTop();
            var sb_n = $(".all-shops__content_left");
            var sbi_n = $("#cssmenu-1");
            var sb_ot_n = sb_n.offset().top;
            var sbi_ot_n = sbi_n.offset().top;
            var sb_h_n = sb_n.height();
            if (sb_h_n + $(document).scrollTop() + sb_m_n + mb_n < $(document).height()) {
                if (st_n > sb_ot_n) {
                    var h = Math.round(st_n - sb_ot_n) + sb_m_n;
                    sb_n.css({"paddingTop": h});
                }
                else {
                    sb_n.css({"paddingTop": 0});
                }
            }

        });
    }
    /*sidebar*/

    // open anchor
    $('.smoothScroll').click(function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    // close anchor


    /*modal reclama page*/
    var overlay = $('#overlay');
    var close = $('.modal_close, #overlay');

    $('.open_modals').click(function (event) { // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        var div = $(this).attr('href');
        overlay.fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function () { // пoсле выпoлнения предъидущей aнимaции
                $(div)
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });

    $(".open_modal2").click(function (event) { // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        var div = $(this).attr('href');
        overlay.fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function () { // пoсле выпoлнения предъидущей aнимaции
                $('.modals_div')
                    .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function () { // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                        }
                    );

                $('#callback-form-thx')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });

    });
    close.click(function () { // лoвим клик пo крестику или oверлэю
        $('.modals_div, .modals_di')
            .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                function () { // пoсле этoгo
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });
    /*modal reclama page*/

    /* scroll button*/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            $('.scrollup_button').addClass('fixed_scrollup');
        }
        else {
            $('.scrollup_button').removeClass('fixed_scrollup');
        }
    });


    $('.scrollup_button').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    /* scroll button*/

    /*gamburger*/
    var windowWidth = $(window).width();

    $(".toggle_mnu").click(function () {
        $(".sandwich").toggleClass("active");
    });

    if (windowWidth < 769) {
        $(".home-menu a").click(function () {
            $(".home-menu").fadeOut(600);
            $(".sandwich").toggleClass("active").append("<span>");
        });

        $(".toggle_mnu").click(function () {
            if ($(".home-menu").is(":visible")) {
                $(".home-menu").fadeOut(600);
                $(".home-menu li a").removeClass("fadeInUp animated");
            } else {
                $(".home-menu").fadeIn(600);
                $(".home-menu li a").addClass("fadeInUp animated");
            }
        });
    }
    /*gamburger*/
    $(".help-category-menu").click(function () {
        $(".help-category-menu-hide").slideToggle();
    });

    function fixOwlSlider() {
        var sliders = document.querySelectorAll('.owl-stage');
        for (var i=0; i<sliders.length; i++) {
            var width = parseInt(sliders[i].style.width, 10);
            sliders[i].style.width = width + 1 + 'px'
        }
    }
    fixOwlSlider()

    $(document).on('click', '.mob-search-btn', function () {
        $(".header__bottom-home").slideToggle('slow');
    });
});

