const div = document.createElement('div')
const ul = document.createElement('ul')

const li = document.createElement('li')
const li2 = document.createElement('li')

const a = document.createElement('a')
const a2 = document.createElement('a')



a.textContent = 'наш инстаграмм'
a.href = 'https://instagram.com/intocode'

a2.textContent = 'наш сайт'
a2.href = 'https://intocode.ru'


ul.append(li)
ul.append(li2)

li.append(a)
li2.append(a2)

div.append(ul)


console.log(div);



document.body.prepend(div)