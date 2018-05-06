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
});


