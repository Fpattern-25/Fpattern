$(function () {

    "use strict";

    /***************************

    swup

    ***************************/
    const options = {
        containers: ['#swupMain', '#swupMenu'],
        animateHistoryBrowsing: true,
        linkSelector: 'a:not([data-no-swup])',
        animationSelector: '[class="fpattern-main-transition"]'
    };
    const swup = new Swup(options);

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /***************************

    color variables

    ***************************/

    var accent = 'rgba(255, 152, 0, 1)';
    var dark = '#000';
    var light = '#fff';

    /***************************

    preloader
    
    ***************************/

    var timeline = gsap.timeline();

    timeline.to(".fpattern-preloader-animation", {
        opacity: 1,
    });

    timeline.fromTo(
        ".fpattern-animation-1 .fpattern-h3", {
            y: "30px",
            opacity: 0
        }, {
            y: "0px",
            opacity: 1,
            stagger: 0.4
        },
    );

    timeline.to(".fpattern-animation-1 .fpattern-h3", {
        opacity: 0,
        y: '-30',
    }, "+=.3");

    timeline.fromTo(".fpattern-reveal-box", 0.1, {
        opacity: 0,
    }, {
        opacity: 1,
        x: '-30',
    });

    timeline.to(".fpattern-reveal-box", 0.45, {
        width: "100%",
        x: 0,
    }, "+=.1");
    timeline.to(".fpattern-reveal-box", {
        right: "0"
    });
    timeline.to(".fpattern-reveal-box", 0.3, {
        width: "0%"
    });
    timeline.fromTo(".fpattern-animation-2 .fpattern-h3", {
        opacity: 0,
    }, {
        opacity: 1,
    }, "-=.5");
    timeline.to(".fpattern-animation-2 .fpattern-h3", 0.6, {
        opacity: 0,
        y: '-30'
    }, "+=.5");
    timeline.to(".fpattern-preloader", 0.8, {
        opacity: 0,
        ease: 'sine',
    }, "+=.2");
    timeline.fromTo(".fpattern-up", 0.8, {
        opacity: 0,
        y: 40,
        scale: .98,
        ease: 'sine',

    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        onComplete: function () {
            $('.fpattern-preloader').addClass("fpattern-hidden");
        },
    }, "-=1");
    /***************************

    anchor scroll

    ***************************/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        var offset = 0;

        if ($(window).width() < 1200) {
            offset = 90;
        }

        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 400);
    });
    /***************************

    append

    ***************************/
    $(document).ready(function () {
        $(".fpattern-arrow").clone().appendTo(".fpattern-arrow-place");
        $(".fpattern-dodecahedron").clone().appendTo(".fpattern-animation");
        $(".fpattern-lines").clone().appendTo(".fpattern-lines-place");
        $(".fpattern-main-menu ul li.fpattern-active > a").clone().appendTo(".fpattern-current-page");
    });
    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".fpattern-accordion-group");
    let menus = gsap.utils.toArray(".fpattern-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".fpattern-accordion-menu");
        let box = element.querySelector(".fpattern-accordion-content");
        let symbol = element.querySelector(".fpattern-symbol");
        let minusElement = element.querySelector(".fpattern-minus");
        let plusElement = element.querySelector(".fpattern-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.4,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(symbol, {
                background: accent,
                ease: "none",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    back to top

    ***************************/
    const btt = document.querySelector(".fpattern-back-to-top .fpattern-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });
    /***************************

    cursor

    ***************************/
    const cursor = document.querySelector('.fpattern-ball');

    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
    });

    document.addEventListener('pointermove', movecursor);

    function movecursor(e) {
        gsap.to(cursor, {
            duration: 0.6,
            ease: 'sine',
            x: e.clientX,
            y: e.clientY,
        });
    }

    $('.fpattern-drag, .fpattern-more, .fpattern-choose').mouseover(function () {
        gsap.to($(cursor), .2, {
            width: 90,
            height: 90,
            opacity: 1,
            ease: 'sine',
        });
    });

    $('.fpattern-drag, .fpattern-more, .fpattern-choose').mouseleave(function () {
        gsap.to($(cursor), .2, {
            width: 20,
            height: 20,
            opacity: .1,
            ease: 'sine',
        });
    });

    $('.fpattern-accent-cursor').mouseover(function () {
        gsap.to($(cursor), .2, {
            background: accent,
            ease: 'sine',
        });
        $(cursor).addClass('fpattern-accent');
    });

    $('.fpattern-accent-cursor').mouseleave(function () {
        gsap.to($(cursor), .2, {
            background: dark,
            ease: 'sine',
        });
        $(cursor).removeClass('fpattern-accent');
    });

    $('.fpattern-drag').mouseover(function () {
        gsap.to($('.fpattern-ball .fpattern-icon-1'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.fpattern-drag').mouseleave(function () {
        gsap.to($('.fpattern-ball .fpattern-icon-1'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.fpattern-more').mouseover(function () {
        gsap.to($('.fpattern-ball .fpattern-more-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.fpattern-more').mouseleave(function () {
        gsap.to($('.fpattern-ball .fpattern-more-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('.fpattern-choose').mouseover(function () {
        gsap.to($('.fpattern-ball .fpattern-choose-text'), .2, {
            scale: '1',
            ease: 'sine',
        });
    });

    $('.fpattern-choose').mouseleave(function () {
        gsap.to($('.fpattern-ball .fpattern-choose-text'), .2, {
            scale: '0',
            ease: 'sine',
        });
    });

    $('a:not(".fpattern-choose , .fpattern-more , .fpattern-drag , .fpattern-accent-cursor"), input , textarea, .fpattern-accordion-menu').mouseover(function () {
        gsap.to($(cursor), .2, {
            scale: 0,
            ease: 'sine',
        });
        gsap.to($('.fpattern-ball svg'), .2, {
            scale: 0,
        });
    });

    $('a:not(".fpattern-choose , .fpattern-more , .fpattern-drag , .fpattern-accent-cursor"), input, textarea, .fpattern-accordion-menu').mouseleave(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });

        gsap.to($('.fpattern-ball svg'), .2, {
            scale: 1,
        });
    });

    $('body').mousedown(function () {
        gsap.to($(cursor), .2, {
            scale: .1,
            ease: 'sine',
        });
    });
    $('body').mouseup(function () {
        gsap.to($(cursor), .2, {
            scale: 1,
            ease: 'sine',
        });
    });
    /***************************

     menu

    ***************************/
    $('.fpattern-menu-btn').on("click", function () {
        $('.fpattern-menu-btn').toggleClass('fpattern-active');
        $('.fpattern-menu').toggleClass('fpattern-active');
        $('.fpattern-menu-frame').toggleClass('fpattern-active');
    });
    /***************************

    main menu

    ***************************/
    $('.fpattern-has-children a').on('click', function () {
        $('.fpattern-has-children ul').removeClass('fpattern-active');
        $('.fpattern-has-children a').removeClass('fpattern-active');
        $(this).toggleClass('fpattern-active');
        $(this).next().toggleClass('fpattern-active');
    });
    /***************************

    progressbar

    ***************************/
    gsap.to('.fpattern-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });
    /***************************

    scroll animations

    ***************************/

    const appearance = document.querySelectorAll(".fpattern-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',

        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .4,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const scaleImage = document.querySelectorAll(".fpattern-scale");

    scaleImage.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const parallaxImage = document.querySelectorAll(".fpattern-parallax");


    if ($(window).width() > 960) {
        parallaxImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    const rotate = document.querySelectorAll(".fpattern-rotate");

    rotate.forEach((section) => {
        var value = $(section).data("value");
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });
    /***************************

    fancybox

    ***************************/
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
        loop: false,
        protect: true
    });
    $.fancybox.defaults.hash = false;
    /***************************

    reviews slider

    ***************************/

    var menu = ['<div class="fpattern-custom-dot fpattern-slide-1"></div>', '<div class="fpattern-custom-dot fpattern-slide-2"></div>', '<div class="fpattern-custom-dot fpattern-slide-3"></div>', '<div class="fpattern-custom-dot fpattern-slide-4"></div>', '<div class="fpattern-custom-dot fpattern-slide-5"></div>', '<div class="fpattern-custom-dot fpattern-slide-6"></div>', '<div class="fpattern-custom-dot fpattern-slide-7"></div>']
    var mySwiper = new Swiper('.fpattern-reviews-slider', {
        // If we need pagination
        pagination: {
            el: '.fpattern-revi-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            nextEl: '.fpattern-revi-next',
            prevEl: '.fpattern-revi-prev',
        },
    })

    /***************************

    infinite slider

    ***************************/
    var swiper = new Swiper('.fpattern-infinite-show', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
        },
    });

    /***************************

    portfolio slider

    ***************************/
    var swiper = new Swiper('.fpattern-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.fpattern-portfolio-next',
            prevEl: '.fpattern-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    1 item slider

    ***************************/
    var swiper = new Swiper('.fpattern-1-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.fpattern-portfolio-next',
            prevEl: '.fpattern-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    2 item slider

    ***************************/
    var swiper = new Swiper('.fpattern-2-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.fpattern-portfolio-next',
            prevEl: '.fpattern-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
    document.addEventListener("swup:contentReplaced", function () {

        $('html, body').animate({
            scrollTop: 0,
        }, 0);

        gsap.to('.fpattern-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });
        /***************************

         menu

        ***************************/
        $('.fpattern-menu-btn').removeClass('fpattern-active');
        $('.fpattern-menu').removeClass('fpattern-active');
        $('.fpattern-menu-frame').removeClass('fpattern-active');
        /***************************

        append

        ***************************/
        $(document).ready(function () {
            $(".fpattern-arrow-place .fpattern-arrow, .fpattern-animation .fpattern-dodecahedron, .fpattern-current-page a").remove();
            $(".fpattern-arrow").clone().appendTo(".fpattern-arrow-place");
            $(".fpattern-dodecahedron").clone().appendTo(".fpattern-animation");
            $(".fpattern-lines").clone().appendTo(".fpattern-lines-place");
            $(".fpattern-main-menu ul li.fpattern-active > a").clone().appendTo(".fpattern-current-page");
        });
        /***************************

        accordion

        ***************************/

        let groups = gsap.utils.toArray(".fpattern-accordion-group");
        let menus = gsap.utils.toArray(".fpattern-accordion-menu");
        let menuToggles = groups.map(createAnimation);

        menus.forEach((menu) => {
            menu.addEventListener("click", () => toggleMenu(menu));
        });

        function toggleMenu(clickedMenu) {
            menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        }

        function createAnimation(element) {
            let menu = element.querySelector(".fpattern-accordion-menu");
            let box = element.querySelector(".fpattern-accordion-content");
            let symbol = element.querySelector(".fpattern-symbol");
            let minusElement = element.querySelector(".fpattern-minus");
            let plusElement = element.querySelector(".fpattern-plus");

            gsap.set(box, {
                height: "auto",
            });

            let animation = gsap
                .timeline()
                .from(box, {
                    height: 0,
                    duration: 0.4,
                    ease: "sine"
                })
                .from(minusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(plusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(symbol, {
                    background: accent,
                    ease: "none",
                }, 0)
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }

        /***************************

        cursor

        ***************************/

        $('.fpattern-drag, .fpattern-more, .fpattern-choose').mouseover(function () {
            gsap.to($(cursor), .2, {
                width: 90,
                height: 90,
                opacity: 1,
                ease: 'sine',
            });
        });

        $('.fpattern-drag, .fpattern-more, .fpattern-choose').mouseleave(function () {
            gsap.to($(cursor), .2, {
                width: 20,
                height: 20,
                opacity: .1,
                ease: 'sine',
            });
        });

        $('.fpattern-accent-cursor').mouseover(function () {
            gsap.to($(cursor), .2, {
                background: accent,
                ease: 'sine',
            });
            $(cursor).addClass('fpattern-accent');
        });

        $('.fpattern-accent-cursor').mouseleave(function () {
            gsap.to($(cursor), .2, {
                background: dark,
                ease: 'sine',
            });
            $(cursor).removeClass('fpattern-accent');
        });

        $('.fpattern-drag').mouseover(function () {
            gsap.to($('.fpattern-ball .fpattern-icon-1'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.fpattern-drag').mouseleave(function () {
            gsap.to($('.fpattern-ball .fpattern-icon-1'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.fpattern-more').mouseover(function () {
            gsap.to($('.fpattern-ball .fpattern-more-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.fpattern-more').mouseleave(function () {
            gsap.to($('.fpattern-ball .fpattern-more-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('.fpattern-choose').mouseover(function () {
            gsap.to($('.fpattern-ball .fpattern-choose-text'), .2, {
                scale: '1',
                ease: 'sine',
            });
        });

        $('.fpattern-choose').mouseleave(function () {
            gsap.to($('.fpattern-ball .fpattern-choose-text'), .2, {
                scale: '0',
                ease: 'sine',
            });
        });

        $('a:not(".fpattern-choose , .fpattern-more , .fpattern-drag , .fpattern-accent-cursor"), input , textarea, .fpattern-accordion-menu').mouseover(function () {
            gsap.to($(cursor), .2, {
                scale: 0,
                ease: 'sine',
            });
            gsap.to($('.fpattern-ball svg'), .2, {
                scale: 0,
            });
        });

        $('a:not(".fpattern-choose , .fpattern-more , .fpattern-drag , .fpattern-accent-cursor"), input, textarea, .fpattern-accordion-menu').mouseleave(function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });

            gsap.to($('.fpattern-ball svg'), .2, {
                scale: 1,
            });
        });

        $('body').mousedown(function () {
            gsap.to($(cursor), .2, {
                scale: .1,
                ease: 'sine',
            });
        });
        $('body').mouseup(function () {
            gsap.to($(cursor), .2, {
                scale: 1,
                ease: 'sine',
            });
        });
        /***************************

        main menu

        ***************************/
        $('.fpattern-has-children a').on('click', function () {
            $('.fpattern-has-children ul').removeClass('fpattern-active');
            $('.fpattern-has-children a').removeClass('fpattern-active');
            $(this).toggleClass('fpattern-active');
            $(this).next().toggleClass('fpattern-active');
        });
        /***************************

        scroll animations

        ***************************/

        const appearance = document.querySelectorAll(".fpattern-up");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".fpattern-scale");

        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".fpattern-parallax");


        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,

                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".fpattern-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
        /***************************

        fancybox

        ***************************/
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
            loop: false,
            protect: true
        });
        $.fancybox.defaults.hash = false;
        /***************************

        reviews slider

        ***************************/

        var menu = ['<div class="fpattern-custom-dot fpattern-slide-1"></div>', '<div class="fpattern-custom-dot fpattern-slide-2"></div>', '<div class="fpattern-custom-dot fpattern-slide-3"></div>', '<div class="fpattern-custom-dot fpattern-slide-4"></div>', '<div class="fpattern-custom-dot fpattern-slide-5"></div>', '<div class="fpattern-custom-dot fpattern-slide-6"></div>', '<div class="fpattern-custom-dot fpattern-slide-7"></div>']
        var mySwiper = new Swiper('.fpattern-reviews-slider', {
            // If we need pagination
            pagination: {
                el: '.fpattern-revi-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
            speed: 800,
            effect: 'fade',
            parallax: true,
            navigation: {
                nextEl: '.fpattern-revi-next',
                prevEl: '.fpattern-revi-prev',
            },
        })

        /***************************

        infinite slider

        ***************************/
        var swiper = new Swiper('.fpattern-infinite-show', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 5000,
            autoplay: true,
            autoplay: {
                delay: 0,
            },
            loop: true,
            freeMode: true,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });

        /***************************

        portfolio slider

        ***************************/
        var swiper = new Swiper('.fpattern-portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            parallax: true,
            mousewheel: {
                enable: true
            },
            navigation: {
                nextEl: '.fpattern-portfolio-next',
                prevEl: '.fpattern-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        1 item slider

        ***************************/
        var swiper = new Swiper('.fpattern-1-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.fpattern-portfolio-next',
                prevEl: '.fpattern-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        2 item slider

        ***************************/
        var swiper = new Swiper('.fpattern-2-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.fpattern-portfolio-next',
                prevEl: '.fpattern-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });

    });

});
