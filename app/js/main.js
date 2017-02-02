var mainNav,
	burgerIcon,
	body,
	distanceScrolled;

// Responsive menu //

mainNav = document.getElementById('main-nav');
burgerIcon = document.querySelector('nav ul li:nth-of-type(4)');

function mainNavToggle() {
	if (mainNav.className === 'main-nav') {
		mainNav.classList.remove('main-nav');
		mainNav.classList.add('responsive');
	} else {
		mainNav.classList.remove('responsive');
		mainNav.classList.add('main-nav');
	}
}

burgerIcon.onclick = mainNavToggle;

// Header opacity remove door scroll //

body = document.querySelector('body');

function bodyScroll() {
	distanceScrolled = body.scrollTop;
	console.log(distanceScrolled)
	if (distanceScrolled > 1) {
		body.classList.add('scrolled');
	} else {
		body.classList.remove('scrolled');
	}
}

body.onscroll = bodyScroll;

$('a').click(function () {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500);
	return false;
});