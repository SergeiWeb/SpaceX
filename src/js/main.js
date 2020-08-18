import './modules/videobg'
import './plugins/rellax'

const burgerBtn = document.querySelector('#burger')
const mainLists = document.querySelectorAll('.header .main-list')

burgerBtn.addEventListener('click', function () {
	this.classList.toggle('burger-btn--active')
	document.querySelector('.main-nav').classList.toggle('main-nav--active')

	mainLists.forEach(item => {
		if (this.classList.contains('burger-btn--active')) {
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
		}
	})
})
