(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var count_particles, stats, update;

if ($(window).width() >= 768) {
    particlesJS.load('particles-js','particles.json', function() {
        $($('canvas')[0]).css('height', $('#particles').height());
        $($('canvas')[0]).css('opacity', 0);
        setTimeout(function () {
            pJSDom[0].pJS.fn.particlesRefresh();
            $($('canvas')[0]).css('opacity', 1);
        },1000)
    });
    
    particlesJS.load('timeline-bg','particlesMobile.json', function() {
        // $($('canvas')[0]).css('height', $('body').height());
        // $($('canvas')[0]).css('opacity', 0);
        // setTimeout(function () {
        //     pJSDom[0].pJS.fn.particlesRefresh();
        //     $($('canvas')[0]).css('opacity', 1);
        // },1000)
    
        // console.log($('body').height())
    });
    
    update = function () {
        // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        // }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}



// count_particles = document.querySelector('.js-count-particles');





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
// pJSDom[0].pJS.particles.color.value = '#000000';
// pJSDom[0].pJS.particles.line_linked.color = '#000000';
// pJSDom[0].pJS.fn.particlesRefresh();



function white() {
    $('body').addClass('white');
    // pJSDom[0].pJS.particles.color.value = '#000000';
    // pJSDom[0].pJS.particles.line_linked.color = '#000000';
    // pJSDom[0].pJS.fn.particlesRefresh();
}

function noWhite() {
    $('body').removeClass('white');
    // pJSDom[0].pJS.particles.color.value = '#ffffff';
    // pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
    // pJSDom[0].pJS.fn.particlesRefresh();
}

var waypointsTimelineDown = $('.timeline').waypoint(function(direction) {
    if (direction === 'down') {
        // white()

        $('.timeline').addClass('white')

        if ($(window).width() > 1240) {
            $('.header').addClass('white')
        }
        if ($(window).width() > 768) {
            // pJSDom[1].pJS.particles.color.value = '#000000';
            // pJSDom[1].pJS.particles.line_linked.color = '#000000';
            // pJSDom[1].pJS.fn.particlesRefresh();
        }


    }

}, {
    offset: '30%'
})



// var waypointsTimelineDownCenter = $('.timeline').waypoint(function(direction) {
//     if (direction === 'down') {
//         // white()

//         $('body').addClass('white');

//     }

// }, {
//     offset: '-20%'
// })

var waypointsTimelineDownCenter = $('.timeline').waypoint(function(direction) {
    if (direction === 'up') {
        // white()

        $('body').removeClass('white');

    }

}, {
    offset: '-20%'
})


// var waypointsExperts = $('.experts').waypoint(function(direction) {
//     if (direction === 'down') {
//         // noWhite()
//         $('.timeline').removeClass('white')
//         $('.header').removeClass('white')
//         $('body').removeClass('white');
//         if ($(window).width() > 768) {
//             // pJSDom[1].pJS.particles.color.value = '#fff';
//             // pJSDom[1].pJS.particles.line_linked.color = '#fff';
//             // pJSDom[1].pJS.fn.particlesRefresh();
//         }

//     }

// }, {
//     offset: '50%'
// })




var waypointsTimelineUp = $('.timeline').waypoint(function(direction) {
    if (direction === 'up') {
        // noWhite()
        $('.timeline').removeClass('white')
        $('.header').removeClass('white')

        if ($(window).width() > 768) {
            // pJSDom[1].pJS.particles.color.value = '#fff';
            // pJSDom[1].pJS.particles.line_linked.color = '#fff';
            // pJSDom[1].pJS.fn.particlesRefresh();
        }

    }

}, {
    offset: '30%'
})
// var waypointsExpertsUp = $('.experts').waypoint(function(direction) {
//     if (direction === 'up') {
//         // white()
//         $('.timeline').addClass('white')
//         $('.header').addClass('white')
//         $('body').addClass('white');
//         if ($(window).width() > 768) {
//             // pJSDom[1].pJS.particles.color.value = '#000000';
//             // pJSDom[1].pJS.particles.line_linked.color = '#000000';
//             // pJSDom[1].pJS.fn.particlesRefresh();
//         }

//     }

// }, {
//     offset: '50%'
// })

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
    }, 2000)

    setTimeout(function() {
        $($this[0].element).removeClass('viewport-list')
    }, 2001)

}, {
    offset: '60%'
})

var graph = $('.viewport-praph').waypoint(function(direction) {
    $($(this)[0].element).addClass('showed-graph');

    var $this = $(this);

    setTimeout(function() {
        $($this[0].element).removeClass('showed-graph')
    }, 900)

    setTimeout(function() {
        $($this[0].element).removeClass('viewport-praph')
    }, 901)

}, {
    offset: '80%'
})







$('.header__hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('open-menu');
});

$(document).ready(function() {

    var viewport = $('.viewport').waypoint(function(direction) {
        if($($(this)[0].element).hasClass('viewport')){
            $($(this)[0].element).addClass('showed');
        }
        

        var $this = $(this);

        setTimeout(function() {
            $($this[0].element).removeClass('showed')
        }, 900)

        setTimeout(function() {
            $($this[0].element).removeClass('viewport')
        }, 901)

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

    // if ($(window).width() >= 1240) {
    //     rightTop = fixRightTop - fixWrapperTop - 30;
    // } else if ($(window).width() < 768) {
    //     rightTop = 10
    // } else {
    //     rightTop = 20
    // }


    // $('.check-line').css('top', (secondWrapperTop - rightTop * 3 - fixRight.outerHeight()));

    $(document).scroll(function() {
        
        if ($(window).width() >= 1240) {
            
            // if ($(this).scrollTop() >= fixWrapper.offset().top) {
            //     fixRight.css('position', 'fixed');
            //     fixRight.css('top', rightTop);
            //     fixRight.css('bottom', 'auto');
            //     if ($(this).scrollTop() >= (secondWrapperTop - fixRight.outerHeight() - rightTop * 3)) {
            //         fixRight.css('position', 'absolute');
            //         fixRight.css('bottom', rightTop);
            //         fixRight.css('top', 'auto');
            //         fixWrapper.css('position', 'relative');
            //     }

            // } else {
            //     fixRight.css('position', 'static');
            //     fixRight.css('top', 'auto');
            //     fixRight.css('top', 'auto');
            // }
        } else {
            // if ($(this).scrollTop() >= fixWrapper.offset().top - header.outerHeight()) {
            //     fixRight.css('position', 'fixed');
            //     fixRight.css('top', (rightTop + header.outerHeight()));


            //     if ($(this).scrollTop() >= secondWrapper.offset().top - fixRight.outerHeight() - header.outerHeight() - rightTop * 2) {
            //         fixRight.css('position', 'absolute');
            //         fixRight.css('top', fixWrapper.outerHeight() - rightTop - fixRightHeight);
            //         fixWrapper.css('position', 'relative');
            //     }

            // } else {
            //     $('._fixRight').css('position', 'static');
            //     $('._fixRight').css('top', 'auto');
            // }
             headerScrolled = $(this).scrollTop()/mainTopHeight;
             if(headerScrolled <=1) {
                
                trfHeader()
            }
             
        }




    })


    if ($(window).width()<1240){
        console.log($(this).scrollTop())
        headerScrolled = $(this).scrollTop()/mainTopHeight;
        if(headerScrolled >=1) headerScrolled = 1;
        if($(this).scrollTop()>mainTopHeight){
            trfHeader()
        }
    }

    function trfHeader(){
        console.log(headerScrolled,mainTopHeight)
        $('.header__logo').css('transform', 'translate3d(0,-' + headerScrolled * mainTopHeight + 'px,0) rotateZ(0)')
        $('.header__button').css('transform', 'translate3d(0,-' + headerScrolled * mainTopHeight + 'px,0) rotateZ(0)')
        $('.header__hamburger').css('transform', 'translate3d(0,-' + headerScrolled * mainTopHeight + 'px,0) rotateZ(0)')
        $('.header__shadow').css('opacity', headerScrolled);

    }

})






$(".menu__item--header").on("click", function(event) {
    event.preventDefault();

    var id = $(this).attr('href'),
        top = $(id).offset().top;
    if ($(window).width() < 1240) top = top - 50;

    $('body,html').animate({ scrollTop: top }, 1500);
    $('body').removeClass('open-menu');

});



function animate(el, animated) {

    if (animated) {
        setClasses(el)
    } else {
        // el.find('g').removeClass('hovering hoveringMid hoveringSmall')
        // el.find('path').removeClass('hovering hoveringMid hoveringSmall')

    }
}

// $('.program__item').on('mouseenter', function() {
//     let animated = true;

//     animate($(this), animated);
// })

// $('.program__item').on('mouseleave', function() {
//     let animated = false;

//     animate($(this), animated);
// })

function setClasses(el) {
    var cubes = el.find('.animated'),
        lineMid = el.find('.animated--mid'),
        lineSmall = el.find('.animated--small'),
        delay = 3000;

    cubes.each(function() {
        var cube = $(this);

        cube.addClass('hovering');

        if (cube.hasClass('animated--delay-1')) {
            setTimeout(function() {
                cube.removeClass('hovering');
            }, delay + 100)
        } else if (cube.hasClass('animated--delay-2')) {
            setTimeout(function() {
                cube.removeClass('hovering');
            }, delay + 200)
        } else if (cube.hasClass('animated--delay-3')) {
            setTimeout(function() {
                cube.removeClass('hovering');
            }, delay + 300)
        } else {
            setTimeout(function() {
                cube.removeClass('hovering');
            }, delay)
        }


    })


    lineMid.each(function() {
        var lineM = $(this);

        lineM.addClass('hoveringMid');

        if (lineM.hasClass('animated--delay-1')) {
            setTimeout(function() {
                lineM.removeClass('hoveringMid');
            }, delay + 100)
        } else if (lineM.hasClass('animated--delay-2')) {
            setTimeout(function() {
                lineM.removeClass('hoveringMid');
            }, delay + 200)
        } else if (lineM.hasClass('animated--delay-3')) {
            setTimeout(function() {
                lineM.removeClass('hoveringMid');
            }, delay + 300)
        } else {
            setTimeout(function() {
                lineM.removeClass('hoveringMid');
            }, delay)
        }


    })

    lineSmall.each(function() {
        var lineS = $(this);

        lineS.addClass('hoveringSmall');

        if (lineS.hasClass('animated--delay-1')) {
            setTimeout(function() {
                lineS.removeClass('hoveringSmall');
            }, delay + 100)
        } else if (lineS.hasClass('animated--delay-2')) {
            setTimeout(function() {
                lineS.removeClass('hoveringSmall');
            }, delay + 200)
        } else if (lineS.hasClass('animated--delay-3')) {
            setTimeout(function() {
                lineS.removeClass('hoveringSmall');
            }, delay + 300)
        } else {
            setTimeout(function() {
                lineS.removeClass('hoveringSmall');
            }, delay)
        }


    })




    // setClasses(el)
    // cube.addClass('hovering')
    // lineMid.addClass('hoveringMid')
    // lineSmall.addClass('hoveringSmall')

}


$('.registration__toggle').on('click', function(){
    $('.registration__toggle').removeClass('active');
    $('.registration__tab').removeClass('active');
    $(this).addClass('active');
    $('.registration__tab').eq($(this).index()).addClass('active');
})
},{}]},{},[1]);
