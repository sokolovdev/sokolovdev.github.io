(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


var count_particles, stats, update;

if($(window).width() > 768){
    // particlesJS.load('particles-js','particles.json', function() {
    //     // $($('canvas')[0]).css('height', $('body').height());
    //     // $($('canvas')[0]).css('opacity', 0);
    //     // setTimeout(function () {
    //     //     pJSDom[0].pJS.fn.particlesRefresh();
    //     //     $($('canvas')[0]).css('opacity', 1);
    //     // },1000)
    //
    //     // console.log($('body').height())
    // });
    //
    // particlesJS.load('timeline-bg','particlesMobile.json', function() {
    //     // $($('canvas')[0]).css('height', $('body').height());
    //     // $($('canvas')[0]).css('opacity', 0);
    //     // setTimeout(function () {
    //     //     pJSDom[0].pJS.fn.particlesRefresh();
    //     //     $($('canvas')[0]).css('opacity', 1);
    //     // },1000)
    //
    //     // console.log($('body').height())
    // });
    //
    // update = function () {
    //     // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //     //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    //     // }
    //     requestAnimationFrame(update);
    // };
    // requestAnimationFrame(update);
}



// count_particles = document.querySelector('.js-count-particles');





$(document).ready(function () {
    if ($(window).width() > 1240){

        setTimeout(function () {
            $('.header__sidebar').addClass('showed-sidebar');
        },100)
        setTimeout(function () {
            $('.header__sidebar').removeClass('showed-sidebar');
        },1200)
        setTimeout(function () {
            $('.header__sidebar').removeClass('viewport-sidebar');
        },1201)
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
    if(direction === 'down'){
        // white()

        $('.timeline').addClass('white')

        if($(window).width() > 1240){
            $('.header').addClass('white')
        }
        if($(window).width() > 768){
            // pJSDom[1].pJS.particles.color.value = '#000000';
            // pJSDom[1].pJS.particles.line_linked.color = '#000000';
            // pJSDom[1].pJS.fn.particlesRefresh();
        }


    }

}, {
    offset: '30%'
})



var waypointsTimelineDownCenter = $('.timeline').waypoint(function(direction) {
    if(direction === 'down'){
        // white()

        $('body').addClass('white');

    }

}, {
    offset: '-20%'
})

var waypointsTimelineDownCenter = $('.timeline').waypoint(function(direction) {
    if(direction === 'up'){
        // white()

        $('body').removeClass('white');

    }

}, {
    offset: '-20%'
})


var waypointsExperts = $('.experts').waypoint(function(direction) {
    if(direction === 'down'){
        // noWhite()
        $('.timeline').removeClass('white')
        $('.header').removeClass('white')
        $('body').removeClass('white');
        if($(window).width() > 768){
            // pJSDom[1].pJS.particles.color.value = '#fff';
            // pJSDom[1].pJS.particles.line_linked.color = '#fff';
            // pJSDom[1].pJS.fn.particlesRefresh();
        }

    }

}, {
    offset: '50%'
})

var waypointsRegistrationDown = $('.registration').waypoint(function(direction) {
    if(direction === 'down') {
        white()
    }

}, {
    offset: '80%'
})


var waypointsTimelineUp = $('.timeline').waypoint(function(direction) {
    if(direction === 'up'){
        // noWhite()
        $('.timeline').removeClass('white')
        $('.header').removeClass('white')

        if($(window).width() > 768) {
            // pJSDom[1].pJS.particles.color.value = '#fff';
            // pJSDom[1].pJS.particles.line_linked.color = '#fff';
            // pJSDom[1].pJS.fn.particlesRefresh();
        }

    }

}, {
    offset: '30%'
})
var waypointsExpertsUp = $('.experts').waypoint(function(direction) {
    if(direction === 'up'){
        // white()
        $('.timeline').addClass('white')
        $('.header').addClass('white')
        $('body').addClass('white');
        if($(window).width() > 768){
            // pJSDom[1].pJS.particles.color.value = '#000000';
            // pJSDom[1].pJS.particles.line_linked.color = '#000000';
            // pJSDom[1].pJS.fn.particlesRefresh();
        }

    }

}, {
    offset: '50%'
})

var waypointsRegistrationUp = $('.registration').waypoint(function(direction) {
    if(direction === 'up') {
        noWhite()
    }

}, {
    offset: '80%'
})

var viewport = $('.viewport').waypoint(function(direction) {
    $($(this)[0].element).addClass('showed');

    var $this = $(this);

    setTimeout(function () {
        $($this[0].element).removeClass('showed')
    },900)

    setTimeout(function () {
        $($this[0].element).removeClass('viewport')
    },901)

}, {
    offset: '95%'
})


var list = $('.viewport-list').waypoint(function(direction) {
    $($(this)[0].element).addClass('showed-list');

    var $this = $(this);

    setTimeout(function () {
        $($this[0].element).removeClass('showed-list')
    },2000)

    setTimeout(function () {
        $($this[0].element).removeClass('viewport-list')
    },2001)

}, {
    offset: '60%'
})

var graph = $('.viewport-praph').waypoint(function(direction) {
    $($(this)[0].element).addClass('showed-graph');

    var $this = $(this);

    setTimeout(function () {
        $($this[0].element).removeClass('showed-graph')
    },900)

    setTimeout(function () {
        $($this[0].element).removeClass('viewport-praph')
    },901)

}, {
    offset: '100%'
})







$('.header__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('open-menu');
});

$(document).ready(function () {
    if ($(window).width() >= 1240){
        $('.skills').width($('body').width() - 300)
    }
    $('input').on('focus', function(){
        $(this).closest('.input').addClass('focused')
    })

    $('input').on('blur', function(){
        if($(this).val() === ''){
            $(this).closest('.input').removeClass('focused')
        }

    })


})

$(window).on('resize', function () {
    if ($(window).width() >= 1240){
        $('.skills').width($('body').width() - 300)
    } else {
        $('.skills').attr('style', '');
    }
})


$(".menu__item--header").on("click", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top - 50;

    console.log(top)

    $('body,html').animate({scrollTop: top}, 1500);
});




if($(window).width() >= 1240){
    console.log(window.innerHeight);
    $(document).scroll(function () {

        if($(this).scrollTop() > window.innerHeight){
            console.log($(this).scrollTop() > window.innerHeight)
            $('.header').addClass('show-logo')
        } else {
            console.log($(this).scrollTop() > window.innerHeight)
            $('.header').removeClass('show-logo')
        }
    })
}


},{}]},{},[1]);
