$(document).ready(function(){
	$('.header__hamburger').on('click', function(){
		$('body').toggleClass('open-menu')
	})
	$('.header__search-button').on('click', function(){
		$('body').addClass('open-search')
	})
	$('.search__close').on('click', function(){
		$('body').removeClass('open-search')
	})
});