(function( $ ) {
	var btnClass = 'to-top-button';
	var imgClass = 'arrow-img';
	
	function addClickEvents(opts){
		var selector = opts.clickSelectors.join(',');
		selector = opts.clickSelectors.length > 0 ? ',' + selector : '';
		$('a.' + btnClass + selector).click(opts.animateScroll.bind(opts,opts));
	}
	
	function addScrollEvent(opts){
		$(window).scroll(opts.fadeScroll.bind(opts, opts));
	}
	
	function appendButton(that, opts){
		$(that).prepend('<a href="#" class="' + btnClass + '"><img src="img/arrow-up.svg" class="' + imgClass + '"></a>');
	}
    
	$.fn.toTopButton = function(options) {
		var opts = $.extend({}, $.fn.toTopButton.defaults, options);

		appendButton(this, opts);
		addScrollEvent(opts);
		addClickEvents(opts);
    };
	
    $.fn.toTopButton.defaults = {
		scrollTrigger: 300,
		animationTime: 700,
		fadeInSpeed: 'fast',
		fadeOutSpeed: 'fast',
		clickSelectors: [],
		animateScroll: function(opts){
			$('html, body').animate({scrollTop: 0}, opts.animationTime);
			return false;
		},
		fadeScroll: function(opts) {
			if($(window).scrollTop() > opts.scrollTrigger) {
				$('a.' + btnClass).fadeIn(opts.fadeInSpeed);
			}else{
				$('a.' + btnClass).fadeOut(opts.fadeOutSpeed);
			}
		}
	};
 
})( jQuery );

$("body").toTopButton({clickSelectors: ['a.to-top-btm-button']});