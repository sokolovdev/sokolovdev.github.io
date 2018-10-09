(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var count_particles, stats, update;

if ($(window).width() >= 768) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 109,
                "density": {
                    "enable": false,
                    "value_area": 3551.164387345227
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 3
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3630079151508454,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 0,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 1.9,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 95.90409590409591,
                    "size_min": 4.795204795204795,
                    "sync": true
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 176.3753266952075,
                "color": "#ffffff",
                "opacity": 0.25654592973848367,
                "width": 0
            },
            "move": {
                "enable": true,
                "speed": 2.2,
                "direction": "top-right",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 881.8766334760375,
                    "rotateY": 1763.753266952075
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.16452374488948104
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }, function() {
        // $($('canvas')[0]).css('height', $('#particles').height());
        // $($('canvas')[0]).css('opacity', 1);

    });


    setTimeout(function() {
        // pJSDom[0].pJS.fn.particlesRefresh();
        $($('canvas')[0]).css('opacity', 1);
    }, 1000)


    update = function() {
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}


$(document).ready(function() {
    if ($(window).width() > 1240) {

        setTimeout(function() {
            $('.header__sidebar').addClass('showed-sidebar');
        }, 100)
        setTimeout(function() {
            $('.header__sidebar').removeClass('showed-sidebar');
        }, 1200)
        setTimeout(function() {
            $('.header__sidebar').removeClass('viewport-sidebar');
        }, 1201)
    }

});

function white() {
    $('body').addClass('white');
}

function noWhite() {
    $('body').removeClass('white');
}

var waypointsTimelineDown = $('.timeline').waypoint(function(direction) {
    if (direction === 'down') {
        $('body').addClass('white');
    }

}, {
    offset: '40%'
})


var waypointsTimelineUp = $('.timeline').waypoint(function(direction) {
    if (direction === 'up') {
        $('body').removeClass('white');
    }

}, {
    offset: '40%'
})


var waypointsExpertsDown = $('.experts').waypoint(function(direction) {
    if (direction === 'down') {
        $('body').removeClass('white');
    }

}, {
    offset: '40%'
})


var waypointsExpertsUp = $('.experts').waypoint(function(direction) {
    if (direction === 'up') {
        $('body').addClass('white');
    }

}, {
    offset: '40%'
})








var waypointsRegistrationDown = $('.registration').waypoint(function(direction) {
    if (direction === 'down') {
        white()
    }

}, {
    offset: '100%'
})

var waypointsRegistrationUp = $('.registration').waypoint(function(direction) {
    if (direction === 'up') {
        noWhite()
    }

}, {
    offset: '100%'
})




var list = $('.viewport-list').waypoint(function(direction) {
    $($(this)[0].element).addClass('showed-list');

    var $this = $(this);

    setTimeout(function() {
        $($this[0].element).removeClass('showed-list')
    }, 5000)

    setTimeout(function() {
        $($this[0].element).removeClass('viewport-list')
    }, 5001)

}, {
    offset: '60%'
})

var graph = $('.viewport-praph').waypoint(function(direction) {
    $($(this)[0].element).addClass('showed-graph');

    var $this = $(this);

    setTimeout(function() {
        $($this[0].element).removeClass('showed-graph')
    }, 1500)

    setTimeout(function() {
        $($this[0].element).removeClass('viewport-praph')
    }, 1501)

}, {
    offset: '80%'
})







$('.header__hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('open-menu');
});


if (window.innerWidth > 1240) {
    setTimeout(function() {
        var tatt = $('.program__couch'),
            body = $('.program__body'),
            bodyTop = body.offset().top,
            bodyHeight = 0,
            bodyLeft = body.offset().left,
            tattWidth = tatt.width(),
            tattHeight = tatt.height(),
            tattOffsetTop = tatt.offset().top,
            tattOffsetLeft = tatt.offset().left,
            tattMarginLeft = +parseFloat(tatt.css('marginLeft')),
            bodyHeight = body.height();
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > tattOffsetTop - 50) {
                tatt.css('position', 'fixed');
                tatt.css('top', '50px');
                tatt.css('bottom', 'auto');
                tatt.css('left', tattOffsetLeft);
                tatt.css('width', tattWidth);
                tatt.css('margin', 0);
                if ($(this).scrollTop() > tattOffsetTop + bodyHeight - tattHeight - 50) {
                    tatt.css('top', 'auto');
                    tatt.css('left', tattOffsetLeft - bodyLeft);
                    tatt.css('bottom', 0);
                    tatt.css('position', 'absolute');
                }
            } else {
                tatt.css('position', 'relative');
                tatt.css('top', 'auto');
                tatt.css('left', 'auto');
                tatt.css('bottom', 'auto');
                tatt.css('margin-left', tattMarginLeft);
            }
        })

    }, 0)

}





$(document).ready(function() {
    var viewport = $('.viewport').waypoint(function(direction) {
        if ($($(this)[0].element).hasClass('viewport')) {
            $($(this)[0].element).addClass('showed');
        }


        var $this = $(this);

        if ($(window).width() > 1240) {
            setTimeout(function() {
                $($this[0].element).removeClass('showed')
            }, 1100)

            setTimeout(function() {
                $($this[0].element).removeClass('viewport')
            }, 1101)
        }



    }, {
        offset: '95%'
    })



    $('input').on('focus', function() {
        $(this).closest('.input').addClass('focused')
    })

    $('input').on('blur', function() {
        if ($(this).val() === '') {
            $(this).closest('.input').removeClass('focused')
        }

    })

    var fixWrapper = $('._fixWrapper'),
        secondWrapper = $('._fixWrapperSecond'),
        fixRight = $('._fixRight'),
        fixLeft = $('._fixLeft'),
        header = $('.header'),
        headerHeight = header.outerHeight(),
        // fixRightTop = fixRight.offset().top,
        // fixWrapperTop = fixWrapper.offset().top,
        // secondWrapperTop = secondWrapper.offset().top,
        rightTop = 0,
        fixWrapperHeight = fixWrapper.outerHeight(),
        fixRightHeight = fixRight.outerHeight(),
        mainTopHeight = $('.main__top').outerHeight(),
        headerScrolled = 0;
    $(document).scroll(function() {

        if ($(window).width() < 1240) {
            headerScrolled = $(this).scrollTop() / mainTopHeight;
            if (headerScrolled >= 1) {
                headerScrolled = 1
            }
            trfHeader()
        }
    })



    function trfHeader() {
        $('.header__logo').css('transform', 'translate3d(0,-' + headerScrolled * mainTopHeight + 'px,0) rotateZ(0)')
        $('.header__button').css('transform', 'translate3d(0,-' + headerScrolled * mainTopHeight + 'px,0) rotateZ(0)')
        $('.header__hamburger').css('transform', 'translate3d(0,-' + headerScrolled * mainTopHeight + 'px,0) rotateZ(0)')
        $('.header__shadow').css('opacity', headerScrolled);

    }

})






$(".menu__item--header, .header__button").on("click", function(event) {
    event.preventDefault();

    var id = $(this).attr('href'),
        top = $(id).offset().top;
    if ($(window).width() < 1240) top = top - 50;

    $('body,html').animate({ scrollTop: top }, 1500);
    $('body').removeClass('open-menu');
    $('.header__hamburger').removeClass('active');

});



$('.registration__toggle').on('click', function() {
    $('.registration__toggle').removeClass('active');
    $('.registration__tab').removeClass('active');
    $(this).addClass('active');
    $('.registration__tab').eq($(this).index()).addClass('active');
})

$('.registration__button--back').on('click', function() {
    $('.registration__toggle').eq(2).addClass('active');
    $('.registration__tab').removeClass('active');
    $('.registration__tab').eq(2).addClass('active');
    $('input').val('');
    $('.input').removeClass('focused');
})

$('.form__button').click(function(e) {
    var $this = $(this),
        data = $this.closest('form').serialize(),
        $email = $this.closest('.form').find('input[name="email"]'),
        $name = $this.closest('.form').find('input[name="name"]'),
        pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
        $input = $this.closest('.form').find('.input'),
        formCheked = false,
        emailChecked = false,
        nameChecked = false;

    if ($email.val() !== '') {
        if (!pattern.test($email.val())) {
            $email.closest('.input').addClass('error');
            emailChecked = false;
        } else {
            $email.closest('.input').removeClass('error');
            emailChecked = true;
        }
    } else {
        $email.closest('.input').addClass('error ');
        emailChecked = false;
    }

    if ($name.val() !== '') {
        $name.closest('.input').removeClass('error');
        nameChecked = true;
    } else {
        $name.closest('.input').addClass('error');
        nameChecked = false;
    }

    console.log(nameChecked, emailChecked)


    if (nameChecked && emailChecked) {
        $(this).closest('.form').addClass('loading');
        var form = $(this);
        $.ajax({
            type: 'POST',
            url: '/send.php',
            data: data,
            success: function(data) {
                form.closest('.form').removeClass('loading');
                $('.registration__toggle').removeClass('active');
                $('.registration__tab').removeClass('active');
                $('.registration__tab').eq(3).addClass('active');
            }
        });
    }
});

$('._openCapacitacion').on('click', function() {
    $('.popup--capacitacion').addClass('open');
    $('body').css('overflow', 'hidden');
})

$('._openCronograma').on('click', function() {
    $('.popup--cronograma').addClass('open');
    $('body').css('overflow', 'hidden');
})

$('.popup__close').on('click', function() {
    $(this).closest('.popup').removeClass('open');
    $('body').css('overflow', 'visible');
})
},{}]},{},[1]);
