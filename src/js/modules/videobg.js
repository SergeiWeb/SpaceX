import vidbg from '../plugins/vidbg'

let instance = new vidbg('#headerVideo', {
	mp4: 'src/assets/video/world.mp4',
	webm: 'src/assets/video/world.webm',
	poster: 'src/assets/video/poster.jpg',
	overlay: false,
})

instance