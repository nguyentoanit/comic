$(document).ready(function(){
	$('#hassub').hover(function(){
		$('#submenu').slideToggle(350);
	});
	$("#top").click(function (){
		//$(this).animate(function(){
			$('html, body').animate({
				scrollTop: $("#header").offset().top
			}, 1000);
		//});
	});
});
$(function($) {
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('.menu').offset().top;
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('.menu').css({ 
			'position': 'fixed', 
			'top':0, 
			'left':0,
			'z-index':10
			});
        } else {
            $('.menu').css({ 'position': 'relative' }); 
        }   
    };
    // run our function on load
    sticky_navigation();
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
});