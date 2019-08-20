(function($) {
	$(function() {
		// common 
		var windowScrollTop = $(window).scrollTop(), 
			$header = $('header'),
			$nav = $header.find('nav');

		var scrollHeader = function(st) {
			( st > 0 ) ? $header.addClass('white') : $header.removeClass('white');
			if ( $('header').hasClass('only-white') ) ( st > 0 ) ? $header.addClass('white').css('transition', 'none') : $header.addClass('white').css('transition', 'none');
		};
		scrollHeader(windowScrollTop);
		
		$(window).scroll(function() {
			var scrollT = $(this).scrollTop();
			scrollHeader(scrollT);
		}); 

		$('.mobile-menu').on('click', function() {
			var _this = $(this);

			if ( _this.hasClass('close') ) {
				$nav.slideUp(300);
				$('body').find('.dim').animate({
					opacity: 0
				}, 300);
				setTimeout(function() {
					$('body').find('.dim').remove();
					$('html').removeClass('hidden');
					$header.removeClass('menu-open');
					_this.removeClass('close').find('.btn-menu').show();
					_this.find('.btn-menu-close').hide();
				}, 200);
			} else {
				$nav.slideDown(300);
				$('body').append('<div class="dim"></div>');
				$('body').find('.dim').animate({
					opacity: 0.6
				}, 300);
				$('html').addClass('hidden');
				setTimeout(function() {
					$header.addClass('menu-open');
					_this.addClass('close').find('.btn-menu').hide();
					_this.find('.btn-menu-close').show();
				}, 100);
			}
			
		});

	});
})(window.jQuery);







