define(function() {
	'use strict';
	/**
	 * SideDetail description
	 */
	var SideDetail = function(element,options) {
		var self = this,
			resizeEnd;

		self.$element = $(element);
		self.options = options;
		self.active = false;

		// setup

		$(window).on('resize', function() {
			clearTimeout(resizeEnd);
			resizeEnd = setTimeout(function(){
				self.resized();
			}, 100);
		});

		$(window).on('scroll', function() {
			self.parallaxScroll();
		});

		self.resized();
	};

	/**
	 * Default module options (optional)
	 */
	SideDetail.options = {
		breakpoint: 719
	};

	/**
	 * Called by Conditioner to unload the module
	 */
	SideDetail.prototype = {
		resized: function() {

			var self = this;

			var width = $(window).width();

			if (width >= self.options.breakpoint) {
				if (!self.active) {
					self.active = true;
				} else {
					self.teardown();
				}
				self.setup();
				self.parallaxScroll();

			} else if (width < self.options.breakpoint && self.active) {
				self.active = false;
				self.teardown();
			}
		},

		setup: function() {
			var self = this;

			self.$element.css({
				'opacity': 0,
				'margin-top': - 230
			});

			self.y = self.$element.offset().top;
			self.posY = self.$element.position().top + (self.$element.height() / 2);
		},

		teardown: function() {
			var self = this;

			self.$element.css({
				'opacity': 1,
				'top': 'auto',
				'margin': 0
			});
		},

		parallaxScroll: function() {
			var self = this;
			// Early dropout when we're not initialized

			if (!self.active) {
				return;
			}
			var windowHeight   = $(window).outerHeight(),
				parallaxStart  = self.y - windowHeight,
				parallaxEnd    = parallaxStart + windowHeight,
				scrollPosition = $(window).scrollTop();


			if (scrollPosition >= parallaxStart && scrollPosition <= parallaxEnd) {
				var step = Math.round(1000 / (parallaxEnd - parallaxStart) * (scrollPosition - parallaxStart));


				if (step < 100) {
					self.$element.stop().fadeTo(250, step / 100);
				}

				if (step > 800) {					
					self.$element.stop().fadeTo(250, (990 - step) / 100);
				}

				if (step >= 100 && step <= 800) {
					self.$element.stop().fadeTo(250, 1);
					self.$element.css('top', self.posY + ((step - 200) / 4));
				}
			}
		},

		unload: function() {
			// restore
		}
	};

	return SideDetail;
});
