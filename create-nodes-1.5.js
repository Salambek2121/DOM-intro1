const div1 = document.createElement('div')
div1.classList.add('red')

const div2 = document.createElement('div')
div2.classList.add('green')


const div3 = document.createElement('div')
div3.classList.add('blue')
div3.textContent = ' я вложен'


div1.append(div2)
div2.append(div3)

console.log(div1);
