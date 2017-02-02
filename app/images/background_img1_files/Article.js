define(function() {
	'use strict';
	/**
	 * Article description
	 */
	var Article = function(element,options) {
		var self = this;

		self.$element = $(element);
		self.options = options;

		self.$element.find('.short-copy .read-more-link').click(function(e){
			var href = $(this).attr('href'),
				givenTarget = $(href).offset(),
				goToTarget = givenTarget.top - 30;

			e.preventDefault();

			$('html, body').animate({ scrollTop: goToTarget + 'px' }, 500, 'easeOutCirc');
		});


		// hide readmore link is long-copy is visible
		$(window).bind('scroll.Article', function () {
			if (isVisible($('.long-copy'), 50)) {
				$(window).unbind('scroll.Article');
				$('.short-copy .read-more-link').animate({opacity: 0});
			}
		});

		self.$element.find('aside.fact h2').squishy();

		// Grab a random color and set it to the 'fact', 'funny detail' and 'crosslinks'  paragraph
		$('.fact p, p.author-biography, .cross-link').addClass( self.getRandomColor() );
	};

	/**
	 * Default module options (optional)
	 */
	Article.options = {
		colors: [
			'secondary-a',
			'secondary-b',
			'secondary-c'
		]
	};

	/**
	 * Called by Conditioner to unload the module
	 */
	Article.prototype = {
		getRandomColor: function() {
			return this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
		},
		unload: function() {
			// restore
		}
	};

	return Article;
});