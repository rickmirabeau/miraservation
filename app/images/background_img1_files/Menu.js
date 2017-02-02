define(function() {
	'use strict';
	/**
	 * Menu description
	 */
	var Menu = function(element,options) {
		var self = this;

		self.$element = $(element);
		self.options = options;
		self.navOpen = false;
		self.inner = document.getElementById('container');

		self.transitionProp = window.Modernizr.prefixed('transition');
		self.transitionEnd = (function() {
			var props = {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition'    : 'transitionend',
				'OTransition'      : 'oTransitionEnd otransitionend',
				'msTransition'     : 'MSTransitionEnd',
				'transition'       : 'transitionend'
			};
			return props.hasOwnProperty(self.transitionProp) ? props[self.transitionProp] : false;
		})();

		// toggle nav with open and close buttons
		$('#nav-open-btn, #nav-close-btn').bind('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			self.toggleNav();
		});

		// close nav by touching the partial off-screen content
		$('body').bind('click', function(e){
			if (self.navOpen && $(e.target).closest('#nav').length < 1) {
				e.preventDefault();
				self.closeNav();
			}
		});

		$('html').addClass('js-ready');

	};

	/**
	 * Default module options (optional)
	 */
	Menu.options = {
		navClass: 'js-nav'
	};

	/**
	 * Called by Conditioner to unload the module
	 */
	Menu.prototype = {
		closeNav: function() {
			var self = this,
				duration,
				closeNavEnd = function(e) {
					if (e && e.target === self.inner) {
						document.removeEventListener(self.transitionEnd, closeNavEnd, false);
					}
					self.navOpen = false;
				};

			if (self.navOpen) {
				// close navigation after transition or immediately
				duration = (self.transitionEnd && self.transitionProp) ? parseFloat(window.getComputedStyle(self.inner, '')[self.transitionProp + 'Duration']) : 0;
				if (duration > 0) {
					document.addEventListener(self.transitionEnd, closeNavEnd, false);
				} else {
					closeNavEnd(null);
				}
			}
			$('html').removeClass(self.options.navClass);
		},

		openNav: function() {
			var self = this;

			if (self.navOpen) {
				return;
			}
			self.navOpen = true;

			$('html').addClass(self.options.navClass);
		},

		toggleNav: function() {
			var self = this;

			if (self.navOpen && $('html').hasClass(self.options.navClass)) {
				self.closeNav();
			} else {
				self.openNav();
			}
		},

		unload: function() {
			// restore
		}
	};

	return Menu;
});
