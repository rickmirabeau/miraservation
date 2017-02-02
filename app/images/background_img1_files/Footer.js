define(function() {
	'use strict';
	/**
	 * Footer description
	 */
	var Footer = function(element,options) {
		var self = this;

		self.$element = $(element);
		self.options = options;

		self.$element.find('time').timeago();
	};

	/**
	 * Default module options (optional)
	 */
	Footer.options = {

	};

	/**
	 * Called by Conditioner to unload the module
	 */
	Footer.prototype = {
		unload: function() {
			// restore
		}
	};

	return Footer;
});