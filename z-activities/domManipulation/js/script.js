const button = document.querySelector('button')
const ul = document.querySelector('ul')
const input = document.querySelector('input')

button.addEventListener('click', function(){
    let scripture = input.value;
    input.value = ''
    const li = document.createElement('li')
    const text = document.createElement('span')
    const newButton = document.createElement('button')
    
    li.appendChild(text)
    text.textContent = scripture
    li.appendChild(newButton)
    newButton.textContent = '❌'
    ul.appendChild(li)

    newButton.addEventListener('click', function(){    
        ul.removeChild(li)
    
    })
    input.focus()
})



