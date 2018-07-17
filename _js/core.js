



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


$(document).ready(function () {
    // console.log(pJSDom[0])

})

var slide2 = true,
    slide3 = true;

$(document).on('scroll', function () {
    if($(this).scrollTop() > $('.timeline').offset().top  * 0.8) {

        if(slide2) {
            $('body').addClass('white');
            pJSDom[0].pJS.particles.color.value = '#000000';
            pJSDom[0].pJS.particles.line_linked.color = '#000000';
            pJSDom[0].pJS.fn.particlesRefresh();
            slide2 = false
        }

    } else {
        if(!slide2) {
            $('body').removeClass('white');
            pJSDom[0].pJS.particles.color.value = '#ffffff';
            pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
            pJSDom[0].pJS.fn.particlesRefresh();
            slide2 = true
        }
    }
    //
    // if($(this).scrollTop() > $('.slide-3').offset().top * 0.8) {
    //     if(slide3) {
    //         $('body').removeClass('black');
    //         pJSDom[0].pJS.particles.color.value = '#ffffff';
    //         pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
    //         pJSDom[0].pJS.fn.particlesRefresh();
    //
    //         slide3 = false
    //     }
    // }  else {
    //     if(!slide3) {
    //
    //         $('body').addClass('black');
    //         pJSDom[0].pJS.particles.color.value = '#000000';
    //         pJSDom[0].pJS.particles.line_linked.color = '#000000';
    //         pJSDom[0].pJS.fn.particlesRefresh();
    //         slide3 = true
    //     }
    // }

})

$('.header__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('open-menu');
});

$(document).ready(function () {
    if ($(window).width() >= 1240){
        $('.skills').width($('body').width() - 300)
    }

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