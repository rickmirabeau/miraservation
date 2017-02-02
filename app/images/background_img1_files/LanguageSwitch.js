define(function () {
    'use strict';
    /**
	 * LanguageSwitch description
	 */
    function LanguageSwitch(element, options) {
        var self = this;
        self.$dd = $(element);
        self.placeholder = self.$dd.find('span');
        self.opts = self.$dd.find('language-options > li');
        self.val = '';
        self.index = -1;
        self.initEvents();
    }

    LanguageSwitch.prototype = {

        initEvents: function () {
            var self = this;
            $('body').bind('click', function (event) {
                if (self.$dd.hasClass('active')) {
                    event.preventDefault();
                    self.$dd.removeClass('active');
                }
            });
            self.$dd.on('click', function (event) {
                $(this).toggleClass('active');
                event.stopPropagation();
            });

            self.$dd.on('mouseleave', function (event) {
                if (self.$dd.hasClass('active')) {
                    event.preventDefault();
                    self.$dd.removeClass('active');
                }
            });

            self.opts.on('click', function () {
                var opt = $(this);
                opt.val = opt.text();
                opt.index = opt.index();
                self.placeholder.text(opt.val);
            });

        },

        unload: function () {
            // restore
            var self = this;
            self.$dd.unbind('click');
            self.$dd.unbind('mouseleave');
            self.opts.unbind('click');
            $('body').unbind('click');
        }
    };

    return LanguageSwitch;
});
