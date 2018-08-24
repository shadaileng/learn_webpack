import data from '../README.md'
import md from 'markdown'

let doc = md.markdown.toHTML(data)

let app = document.querySelector('#app');

let el = document.createElement('div')

el.innerHTML = doc

app.appendChild(el)
