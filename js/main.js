$(document).ready(function(){
	  $('.slider').slick({
	  infinite: true,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
	});

	 $('.tabs_menu a').click(function(e) {
        e.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
				
});