function show() {

    const section = document.getElementById('heart')

    const square = document.createElement('div')
    const circle = document.createElement('div')
    const circle1 = document.createElement('div')
    
    square.className = 'square'
    circle1.className = 'circle1'
    circle.className = 'circle'

    section.appendChild(square)
    section.appendChild(circle)
    section.appendChild(circle1)

    const ul= document.getElementById('list')
    
    const li = document.createElement('h1')
    
    li.className = 'item'

    const title = document.createElement('h1')
    
    title.innerText = '❤️Eu te amo Pâmella!❤️'

    title.className = 'titles'

    ul.id = 'list'

    li.appendChild(title)
    ul.appendChild(li)
}