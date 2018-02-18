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

    $('.search input').on('keydown', function(e) {
        if (e.keyCode === '13') {
            //поиск по сайту
        }
    })


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
            var appendix = '<li class="tags__item tags__item--more tag"><p>Ещё + ' + (tagsPost - 2) + ' тег' + prefix + '</p></li>';

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
        $('.list--tags .list__more-tags').html('Ещё + ' + (tagsAll - 6) + ' тег' + prefix);
    }

    /* if((tags-6) === 1 || (tags-6) === 21 || (tags-6) === 31 || (tags-6) === 41 || (tags-6) === 51){
         var prefix = ''
     } else if ((tags-6) > 1 && (tags-6) < 5){
         var prefix = 'а'
     } else if ((tags-6 ) >= 5) {
         var prefix = 'ов'
     }*/


    $('.list--tags .list__more-tags').on('click', function() {
        if ($(this).html() !== 'Скрыть') {
            $('.list--tags .tag').each(function() {
                if ($(this).index() > 5) {
                    $(this).fadeIn(300);
                }
            })
            $(this).html('Скрыть');
        } else {
            $('.list--tags .tag').each(function() {
                if ($(this).index() > 5) {
                    $(this).fadeOut(300);
                }
            })
            $(this).html('Ещё + ' + (tagsAll - 6) + ' тег' + prefix);
            setTimeout(function() {

            }, 300)

        }

    })

    $('.tags--post .tags__item--more').on('click', function() {
        var count = 0,
            $this = $(this);
        if ($(this).find('p').html() !== 'Скрыть') {

            $(this).closest('.tags--post').find('.tag:not(.tags__item--more)').each(function() {

                if ($(this).index() >= 2) {
                    $(this).fadeIn(300);
                    count++;
                }
            })
            console.log(count);
            $(this).find('p').html('Скрыть');
        } else {

            $(this).closest('.tags--post').find('.tag:not(.tags__item--more)').each(function() {
                if ($(this).index() >= 2) {
                    $(this).fadeOut(300);
                    count++;
                }
            })
            setTimeout(function() {
                $this.find('p').html('Ещё + ' + count + ' тег' + prefix);
            }, 300)

        }

    })
    if ($('.post__body').length > 0) {
        if ($('.post__body').find('p').eq(0).html().length > 140) {
            $('.post__body').addClass('letter');
        }
    }


});