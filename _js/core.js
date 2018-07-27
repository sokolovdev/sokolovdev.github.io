



particlesJS.load('particles-js','particles.json', function() {
    // $($('canvas')[0]).css('height', $('body').height());
    // $($('canvas')[0]).css('opacity', 0);
    // setTimeout(function () {
    //     pJSDom[0].pJS.fn.particlesRefresh();
    //     $($('canvas')[0]).css('opacity', 1);
    // },1000)

    // console.log($('body').height())
});
var count_particles, stats, update;
// count_particles = document.querySelector('.js-count-particles');
update = function () {
    // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    // }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);


particlesJS.load('timeline-bg','particles.json', function() {
    // $($('canvas')[0]).css('height', $('body').height());
    // $($('canvas')[0]).css('opacity', 0);
    // setTimeout(function () {
    //     pJSDom[0].pJS.fn.particlesRefresh();
    //     $($('canvas')[0]).css('opacity', 1);
    // },1000)

    // console.log($('body').height())
});
var count_particles, stats, update;
// count_particles = document.querySelector('.js-count-particles');
update = function () {
    // if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    // }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
//

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
    pJSDom[0].pJS.particles.color.value = '#000000';
    pJSDom[0].pJS.particles.line_linked.color = '#000000';
    pJSDom[0].pJS.fn.particlesRefresh();
}

function noWhite() {
    $('body').removeClass('white');
    pJSDom[0].pJS.particles.color.value = '#ffffff';
    pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
    pJSDom[0].pJS.fn.particlesRefresh();
}

var waypointsTimelineDown = $('.timeline').waypoint(function(direction) {
    if(direction === 'down'){
        // white()

        $('.timeline').addClass('white')

        if($(window).width() > 1240){
            $('.header').addClass('white')
        }
        pJSDom[1].pJS.particles.color.value = '#000000';
        pJSDom[1].pJS.particles.line_linked.color = '#000000';
        pJSDom[1].pJS.fn.particlesRefresh();
    }

}, {
    offset: '30%'
})

var waypointsExperts = $('.experts').waypoint(function(direction) {
    if(direction === 'down'){
        // noWhite()
        $('.timeline').removeClass('white')
        $('.header').removeClass('white')
        pJSDom[1].pJS.particles.color.value = '#fff';
        pJSDom[1].pJS.particles.line_linked.color = '#fff';
        pJSDom[1].pJS.fn.particlesRefresh();
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
        pJSDom[1].pJS.particles.color.value = '#fff';
        pJSDom[1].pJS.particles.line_linked.color = '#fff';
        pJSDom[1].pJS.fn.particlesRefresh();
    }

}, {
    offset: '30%'
})
var waypointsExpertsUp = $('.experts').waypoint(function(direction) {
    if(direction === 'up'){
        // white()
        $('.timeline').addClass('white')
        $('.header').addClass('white')
        pJSDom[1].pJS.particles.color.value = '#000000';
        pJSDom[1].pJS.particles.line_linked.color = '#000000';
        pJSDom[1].pJS.fn.particlesRefresh();
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
    offset: '85%'
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

$(document).on('scroll', function () {
    // $('canvas').css('transform', 'translate(0,'+ -$(this).scrollTop()*0.05 +'px)')



})