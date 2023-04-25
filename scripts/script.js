const splashScreen = document.querySelector('.splash-screen')
const accordions = document.getElementsByClassName('faq__collapsible')
const buttonTopPage = document.querySelector('.top-button')
const primaryHeader = document.querySelector('.primary-header')
const mobileNavbar = document.querySelector('.mobile-navbar')
const mobileNavbarLinks = document.getElementsByClassName('mobile-navbar__link')
const burgerMenu = document.querySelector('.primary-header__menu')
const linksSectionScroll = document.getElementsByClassName(
	'link-section-scroll'
)

// splash screen
window.addEventListener('load', () => {
	splashScreen.style.top = -100 + 'vh'
})

// accordion
for (let i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener('click', function () {
		this.classList.toggle('faq--active')

		const accordionContent = this.nextElementSibling

		if (accordionContent.style.maxHeight)
			accordionContent.style.maxHeight = ''
		else
			accordionContent.style.maxHeight =
				accordionContent.scrollHeight + 'px'
	})
}

// show/hide the top button
window.addEventListener('scroll', function () {
	if (this.scrollY > primaryHeader.offsetHeight)
		buttonTopPage.classList.add('top-button--active')
	else buttonTopPage.classList.remove('top-button--active')
})

// smooth scroll to the top of the page
buttonTopPage.addEventListener('click', () => {
	window.scrollTo(0, 0)
})

// switch desktop navbar to mobile navbar and vice versa
burgerMenu.addEventListener('click', function () {
	this.classList.toggle('primary-header__menu--active')
	mobileNavbar.classList.toggle('mobile-navbar--active')
})

// scroll to specific sections by clicking on navbar items
for (let i = 0; i < linksSectionScroll.length; i++) {
	linksSectionScroll[i].addEventListener('click', function (event) {
		event.preventDefault()
		document.querySelector(this.dataset.scrollTo).scrollIntoView(true)
	})
}

// hide mobile navbar by clicking on navbar items
for (let i = 0; i < mobileNavbarLinks.length; i++) {
	mobileNavbarLinks[i].addEventListener('click', () => {
		mobileNavbar.classList.toggle('mobile-navbar--active')
		burgerMenu.classList.toggle('primary-header__menu--active')
	})
}
