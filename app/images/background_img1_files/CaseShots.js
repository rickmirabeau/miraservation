define(function() {
	'use strict';
	/**
	 * CaseShots description
	 */
	var CaseShots = function(element,options) {
		var self = this;
		self.$element = $(element);
		self.options = options;

		self.$overlay = $('.' + options.modalOverlayClass).length ? $('.' + options.modalOverlayClass) : $('<div class="' + options.modalOverlayClass + '"></div>').appendTo('body');
		self.$dialog = $('.' + options.modalDialogClass).length ? $('.' + options.modalDialogClass) : $('<div class="' + options.modalDialogClass + '"><a href="#" class="prev"></a><a href="#" class="next"></a><a href="#" class="close"></a><img/></div>').appendTo('body');
		self.$images = self.$element.find('img');
		self.$img = self.$dialog.find('img');
		self.$prev = self.$dialog.find('.prev');
		self.$next = self.$dialog.find('.next');
		self.$close = self.$dialog.find('.close');
		self.currentImg = null;
		self.preload = {};

		self.addEvents();
	};

	/**
	 * Default module options (optional)
	 */
	CaseShots.options = {
		modalOverlayClass: 'case-shots-overlay',
		modalDialogClass: 'case-shots-dialog',
		modalLoadingClass: 'case-shots-loading',
		overlayFadeDuration: 300,
		keyNext: 39,
		keyPrev: 37,
		keyClose: 27,
		dialogOffset: 44
	};

	/**
	 * Called by Conditioner to unload the module
	 */
	CaseShots.prototype = {
		addEvents: function() {
			var self = this;

			self.$images.bind('click.CaseShots', function(){
				var index = self.$images.index($(this));
				self.open(index);
			});

			self.$dialog.bind('click.CaseShots', function(e) {
				if ($(e.target).hasClass(self.options.modalDialogClass)) {
					self.close();
				}
			});

			self.$close.bind('click.CaseShots', function(e) {
				e.preventDefault();
				self.close();
			});

			self.$prev.bind('click.CaseShots', function(e) {
			    e.preventDefault();
			    if (self.isImgActive()) {
			        self.prevImg();
			    }
			});

			self.$next.bind('click.CaseShots', function(e) {
			    e.preventDefault();
			    if (self.isImgActive()) {
			        self.nextImg();
			    }
			});

			$(window).bind('keyup.CaseShots', function(e){
				var code = e.which;
				if (self.isImgActive()) {
					return (code === self.options.keyClose) ? self.close()
						: (code === self.options.keyNext) ? self.nextImg()
						: (code === self.options.keyPrev) ? self.prevImg()
						: null;
				}
			});

			$(window).bind('resize.CaseShots', function(){
				if (self.isImgActive()) {
					self.resizeAndPosition();
				}
			});
		},

		nextImg: function() {
			var self = this;
			if (self.currentImg < self.$images.length-1) {
				self.changeImg(self.currentImg+1);
			}
		},

		prevImg: function() {
			var self = this;
			if (self.currentImg > 0) {
				self.changeImg(self.currentImg-1);
			}
		},

		changeImg: function(index) {
			var self = this,
				imgUrl = self.$images.eq(index).data('src-big');

			self.currentImg = index;

			self.preload.onload = null;

			self.setNavState();
			self.toggleLoading(true);

			self.preload = new Image();
			self.preload.onload = function() {
				self.toggleLoading(false);
				self.resizeAndPosition();
				self.$img[0].src = imgUrl;

			};
			self.preload.src = imgUrl;
		},

		setNavState: function() {
			var self = this;
			self.$next.toggle(self.currentImg < self.$images.length-1);
			self.$prev.toggle(self.currentImg > 0);

		},

		resizeAndPosition: function(){
			var self = this,
				ww = $(window).width(),
				wh = $(window).height(),
				imgW = self.preload.width,
				imgH = self.preload.height,
				aspectRatio = imgH / imgW,
				offset = self.options.dialogOffset;

			// adjust width if larger then window
			if (ww < imgW + 2 * offset) {
				imgW = ww - 2 * offset;
				imgH = imgW * aspectRatio;
			}
			// adjust height if larger then window
			if (wh < imgH + 2 * offset) {
				imgH = wh - 2 * offset;
				imgW = imgH / aspectRatio;
			}

			self.$img.css({
				width: imgW,
				height: imgH,
				marginTop: -(imgH/2),
				marginLeft: -(imgW/2)
			});

			self.$dialog.css({
				//left: (ww - imgW)/2,
				//top: (wh - imgH)/2 + $(window).scrollTop()
			});
		},

		open: function(index) {
			var self = this;
			self.toggleOverlay(true);
			self.toggleDialog(true);
			self.changeImg(index);
		},

		close: function() {
			var self = this;
			self.currentImg = null;
			self.toggleDialog(false);
			self.toggleOverlay(false);
		},

		isImgActive: function() {
			return this.currentImg !== null;
		},

		toggleLoading: function(bool) {
			var self = this;
			self.$overlay.toggleClass(self.options.modalLoadingClass, bool);
		},

		toggleDialog: function(bool){
			var self = this,
				$dialog = self.$dialog.stop();
			if (bool) {
				$dialog.fadeIn(self.options.overlayFadeDuration);
			} else {
				$dialog.fadeOut(self.options.overlayFadeDuration);
			}
		},

		toggleOverlay: function(bool){
			var self = this,
				$overlay = self.$overlay.stop();
			if (bool) {
				$overlay.fadeIn(self.options.overlayFadeDuration);
			} else {
				$overlay.fadeOut(self.options.overlayFadeDuration);
			}
		},

		unload: function() {
			// restore
			self.$images.unbind('.CaseShots');
			self.$prev.unbind('.CaseShots');
			self.$next.unbind('.CaseShots');
			self.$close.unbind('.CaseShots');
			self.$overlay.unbind('.CaseShots');
			$(window).unbind('.CaseShots');
		}
	};

	return CaseShots;
});
