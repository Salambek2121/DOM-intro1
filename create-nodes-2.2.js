function render (text){

let ul = document.createElement('ul')
for(let i = 0; i < text.length;i++){
    let li = document.createElement('li')
    li.append(text[i])
    ul.append(li)

}
console.log(ul);
return document.body.prepend(ul)
}
  render(['salambek','muslim','ali'])