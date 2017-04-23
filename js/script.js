$(function () {


	/* Transparent menu on scroll */


	var okno = $(window);
	var menu = $('#menu');

	if (okno.scrollTop() >= 50) {
		menu.addClass('scroll');
	}

	okno.scroll(function () {
		if (okno.scrollTop() >= 100) {
			menu.addClass('scroll');
		} else {
			menu.removeClass('scroll');

		}
	});


	/* Smooth scroll*/

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		var menuHeight = $('#menu').height();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
		}, 500);
	});
});