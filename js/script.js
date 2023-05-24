"use strict"
// Burger
document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;

	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
		document.documentElement.classList.toggle('loaded');
	}
}
// Scroll animation
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let i = 0, n = animItems.length; i < n; i++) {
			const animItem = animItems[i],
				animItemHeight = animItem.offsetHeight,
				animItemOffset = offset(animItem).top,
				animStart = 32;

			let animItemPoint =
				animItemHeight <= window.innerHeight
					? window.innerHeight - animItemHeight / animStart
					: window.innerHeight - window.innerHeight / animStart;

			if (
				scrollY > animItemOffset - animItemPoint &&
				scrollY < animItemOffset + animItemHeight
			) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft =
				window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}

	setTimeout(() => {
		animOnScroll();
	}, 400);
}