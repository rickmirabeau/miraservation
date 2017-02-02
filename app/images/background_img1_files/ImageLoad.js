define(function() {
	'use strict';
	/**
	 * ImageLoad description
	 */
	var ImageLoad = function(element,options) {
		// setup
		var self = this;
		self.$element = $(element);

		self.$element.imagesLoaded( function($proper) {
			$proper.addClass(options.classNameLoaded);
		});
	};

	/**
	 * Default module options (optional)
	 */
	ImageLoad.options = {
		classNameLoaded: 'loaded-image'
	};

	/**
	 * Called by Conditioner to unload the module
	 */
	ImageLoad.prototype = {
		unload: function() {
			// restore
		}
	};

	return ImageLoad;
});