import style from './greet.css'
export default function (msg) {
	let el = document.createElement('div')
	el.textContent = msg
	el.className = style.root
	return el
}
