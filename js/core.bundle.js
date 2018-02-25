(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
    $('.header__hamburger').on('click', function() {
        $('body').toggleClass('open-menu')
    })
    $('.header__search-button').on('click', function() {
        $('body').addClass('open-search')
    })
    $('.search__close').on('click', function() {
        $('body').removeClass('open-search')
    })

    if ($(window).width() < 1240) {
        var mySwiperSimilar = new Swiper('.similar__slider', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true
        });

    } else {
        if (!(typeof mySwiperSimilar === 'undefined')) {
            $(window).on('resize', function() {
                mySwiperSimilar.destroy();
            })
        }
        $(".similar__item").unwrap();
    }

    if ($(window).width() >= 768) {
        $('.search input').on('focusin', function() {
            $(this).closest('.search').addClass('open');
        })
        $('.search input').on('focusout', function() {
            $(this).closest('.search').removeClass('open');
        })
    }


    $('.form__button').on('click', function() {
        $(this).closest('.form').addClass('send');
    })



    var tagsAll = $('.list--tags .tag').length,
        prefix = '';


    function prefixCount(x) {
        if ((x) % 10 === 1 && x === 1) {
            var prefix = '';
        } else if (x % 10 > 1 && x % 10 < 5 || x > 1 && x < 5) {
            var prefix = 'а';
        } else if (x % 10 >= 5 && x % 10 < 10 || x % 10 === 0) {
            var prefix = 'ов';
        }
        return prefix;

    }

    $('.tags--post').each(function() {
        var tagsPost = $(this).find('.tag').length;
        if (tagsPost > 2) {
            $(this).find('.tag').each(function() {
                if ($(this).index() >= 2) {
                    $(this).hide();
                }
            })
            prefix = prefixCount(tagsPost - 2);
            var appendix = '<li class="tags__item tags__item--more tag"><p>eщё + ' + (tagsPost - 2) /*+ ' тег' + prefix*/ + '</p></li>';

            $(this).append(appendix);
        }
    })


    if (tagsAll > 5) {
        $('.list--tags .tag').each(function() {
            if ($(this).index() > 5) {
                $(this).hide();
            }
        })
        prefix = prefixCount(tagsAll - 6);
        $('.list--tags .list__more-tags').html('eщё + ' + (tagsAll - 6) + ' тег' + prefix);
    }


    $('.list--tags .list__more-tags').on('click', function() {
        if ($(this).html() !== 'скрыть') {
            $('.list--tags .tag').each(function() {
                if ($(this).index() > 5) {
                    $(this).fadeIn(300);
                }
            })
            $(this).html('скрыть');
        } else {
            $('.list--tags .tag').each(function() {
                if ($(this).index() > 5) {
                    $(this).fadeOut(300);
                }
            })
            $(this).html('eщё + ' + (tagsAll - 6) + ' тег' + prefix);
            setTimeout(function() {

            }, 300)

        }

    })

    $('body').on('click', '.tags--post .tags__item--more', function() {
        var count = 0,
            $this = $(this);
        if ($(this).find('p').html() !== 'скрыть') {

            $(this).closest('.tags--post').find('.tag:not(.tags__item--more)').each(function() {

                if ($(this).index() >= 2) {
                    $(this).fadeIn(300);
                    count++;
                }
            })
            console.log(count);
            $(this).find('p').html('скрыть');
        } else {

            $(this).closest('.tags--post').find('.tag:not(.tags__item--more)').each(function() {
                if ($(this).index() >= 2) {
                    $(this).fadeOut(300);
                    count++;
                }
            })
            setTimeout(function() {
                $this.find('p').html('eщё + ' + count /*+ ' тег' + prefix*/ );
            }, 300)

        }

    })
    if ($('.post__body').length > 0) {
        if ($('.post__body').find('p').eq(0).html().length > 140) {
            $('.post__body').addClass('letter');
        }
    }


    if ($('.post--card').length > 0) {
        $('.post--card .post__excerpt').each(function() {
            var str = $(this).html(),
                $this = $(this);
            if (str.length > 50) {
                str = str.substring(0, 50);
                if (str.indexOf('.') !== -1) {
                    str = str.substring(0, str.indexOf('.') + 1);
                } else {
                    str = str.substring(0, 47) + '...';
                }
            }
            $(this).html(str);
        })
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('trf');
        } else {
            $('.header').removeClass('trf');
        }
    })


});
},{}]},{},[1]);
