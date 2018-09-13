$('body').prepend('<a href="#" class="to-top-button">^</a>');

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.to-top-button').fadeIn('slow');
	} else {
		$('a.to-top-button').fadeOut('slow');
	}
});


$('a.to-top-button, a.to-top-btm-button').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});