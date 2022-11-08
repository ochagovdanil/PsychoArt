// ---------------------------------SPLASH SCREEN----------------------------------
var intervalId = setInterval(checkForPageState, 500)

function checkForPageState() {
	if (document.readyState === 'complete') {
		clearInterval(intervalId)

		// Hide the splash screen
		setTimeout(function () {
			var splashScreen =
				document.getElementsByClassName('splash-screen')[0]
			splashScreen.style.top = -100 + 'vh'
		}, 1500)
	}
}

// ---------------------------------ACCORDION----------------------------------
var coll = document.getElementsByClassName('faq__collapsible')

for (var i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('faq--active')

		var content = this.nextElementSibling

		if (content.style.maxHeight) content.style.maxHeight = null
		else content.style.maxHeight = content.scrollHeight + 'px'
	})
}

// ----------------------------SCROLL TO THE TOP BUTTON-----------------------------
var topButton = document.getElementsByClassName('top-button')[0]
var header = document.getElementsByClassName('primary-header')[0]

// Scrolling
topButton.addEventListener('click', function () {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Showing and Hiding the button
window.addEventListener('scroll', function () {
	if (this.window.scrollY > header.offsetHeight)
		topButton.classList.add('top-button--active')
	else topButton.classList.remove('top-button--active')
})

// -----------------------PRIMARY HEADER NAVIGATION BAR SCROLLING-----------------------
var collectionsLink = document.getElementsByClassName('primary-header__link')[0]
var mobileCollectionsLink = document.getElementsByClassName(
	'mobile-navbar__link'
)[0]
var featureLink = document.getElementsByClassName('primary-header__link')[1]
var mobileFeatureLink = document.getElementsByClassName(
	'mobile-navbar__link'
)[1]
var faqLink = document.getElementsByClassName('primary-header__link')[2]
var mobileFaqLink = document.getElementsByClassName('mobile-navbar__link')[2]

var collectionsSection = document.getElementsByClassName('logos')[0]
var featureSection = document.getElementsByClassName('featured')[0]
var faqSection = document.getElementsByClassName('faq')[0]

var mobileNavbar = document.getElementsByClassName('mobile-navbar')[0]

collectionsLink.addEventListener('click', function (event) {
	event.preventDefault()
	scrollToCollections()
})
mobileCollectionsLink.addEventListener('click', function (event) {
	event.preventDefault()
	mobileNavbar.style.transform = 'scale(0)'
	scrollToCollections()
})

featureLink.addEventListener('click', function (event) {
	event.preventDefault()
	scrollToFeature()
})
mobileFeatureLink.addEventListener('click', function (event) {
	event.preventDefault()
	mobileNavbar.style.transform = 'scale(0)'
	scrollToFeature()
})

faqLink.addEventListener('click', function (event) {
	event.preventDefault()
	scrollToFaq()
})
mobileFaqLink.addEventListener('click', function (event) {
	event.preventDefault()
	mobileNavbar.style.transform = 'scale(0)'
	scrollToFaq()
})

function scrollToCollections() {
	var collectionsSectionYOffset =
		collectionsSection.getBoundingClientRect().top

	window.scrollTo({ top: collectionsSectionYOffset - 20, behavior: 'smooth' })
}
function scrollToFeature() {
	var featureSectionYOffset = featureSection.getBoundingClientRect().top

	window.scrollTo({ top: featureSectionYOffset - 20, behavior: 'smooth' })
}
function scrollToFaq() {
	var faqSectionYOffset = faqSection.getBoundingClientRect().top

	window.scrollTo({ top: faqSectionYOffset - 20, behavior: 'smooth' })
}

// ----------------------------MOBILE NAVBAR-----------------------------
var mobileNavbar = document.getElementsByClassName('mobile-navbar')[0]
var burgerMenu = document.getElementsByClassName('primary-header__menu')[0]
var closeButton = document.getElementsByClassName(
	'mobile-navbar__icon-close'
)[0]

// Open
burgerMenu.addEventListener('click', function () {
	mobileNavbar.style.transform = 'scale(1)'
})

// Close
closeButton.addEventListener('click', function () {
	mobileNavbar.style.transform = 'scale(0)'
})
