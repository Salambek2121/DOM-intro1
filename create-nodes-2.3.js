function render(text) {

let ul = document.createElement('ul')
for(let i = 0 ; i < text.length;i++){
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.textContent = text[i].name
    a.href = text[i].url

    li.append(a)
    ul.append(li)

}
console.log(ul);
return document.body.prepend(ul)

}

render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ])