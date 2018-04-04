


$(document).ready(function() {
	var offset, offsetImg, offsetLeft;
	setTimeout(function(){
		offset = $('.gallery').offset().top,
    	offsetImg = $('.gallery__img--6').offset().top,
    	offsetLeft = $('.gallery__text').offset().left;
    	console.log(offset);
    	$(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
        	$('.gallery').addClass('fixed');
        	$('.gallery__text').css('left', offsetLeft);
        } else {
        	$('.gallery').removeClass('fixed');
        	$('.gallery__text').attr('style', '');
        }
        /*if ($(this).scrollTop() > offsetImg - 90) {
        	$('.gallery').addClass('absolute');
        	$('.gallery__text').css('top', offsetImg - offset - 90)
        } else {
        	$('.gallery').removeClass('absolute');
        	$('.gallery__text').attr('style', '');
        }*/
    })
	}, 1000)
    
    	
    
})