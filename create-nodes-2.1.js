const mass = ['html', 'css', 'js']

const ul = document.createElement('ul')


for(let i = 0; i < mass.length;i++){
    const li = document.createElement('li')
    li.append(mass[i])
    ul.append(li)

}
document.body.prepend(ul)
console.log(ul);