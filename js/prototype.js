;(function($) {
	'use strict';
	$.fn.parallax = function(options) {
		var settings = $.extend({
			speed: 0.15
		}, options);		
		var windowHeight = $(window).height();		
		return this.each(function() {
			var $this = $(this);			
			$(document).scroll(function() {
				var scrollTop = $(window).scrollTop();
				var offset = $this.offset().top;
				var height = $this.outerHeight();			
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
				var y = Math.round((offset - scrollTop) * settings.speed);
				$this.css('transform', 'translateY(' + y + 'px)'); 
			});
		});
	};
})(jQuery);