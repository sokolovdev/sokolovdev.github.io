(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$('document').ready(function () {
    $('.photos__body').slick({
        arrows: false,
        fade: true,
        cssEase: 'ease',
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                fade: false,
                settings: "unslick"
            }
        ]
    });
    for( i=1; i < 63; i++){
        $('.popup__body').append('<img data-src=\"/img/photos/' + i + '.jpg\">');
    }

    function __lI(el) {
        var imgP = new Image();

        imgP.src = el.dataset.src;
        imgP.onload = function () {
            $(el).attr('src', $(el).data('src'));
            $(el).addClass('loaded');

        };


    }

    var image = document.querySelectorAll('.popup img');


    $('.callPopup').on('click', function () {
        $('body').addClass('show-popup');
        setTimeout(function () {
            $(image).each(function () {
                __lI(this);
            })

        }, 1)

    })
    $('.popup__close').on('click', function () {
        $('body').removeClass('show-popup');
        setTimeout(function () {
            $('.popup img').attr('src','');
        }, 300)

    })


    $('.header__button').on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('show-menu');
    })


    $(".menu__item--main").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});



},{}]},{},[1]);
