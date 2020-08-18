import './modules/videobg'
import './plugins/rellax'

const burgerBtn = document.querySelector('#burger')
const mainNav = document.querySelector('.main-nav')

burgerBtn.addEventListener('click', function () {
	this.classList.toggle('burger-btn--active')
	mainNav.classList.toggle('main-nav--active')

	this.classList.contains('burger-btn--active')
		? (document.body.style.overflowY = 'hidden')
		: (document.body.style.overflowY = '')
})
