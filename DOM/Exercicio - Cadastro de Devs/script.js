let fullname = document.getElementById('fullname')
const form = document.getElementById('form')
const ul = document.getElementById('tecnology-list')
const addTecnology = document.getElementById('add-tecnology')
const signUp = document.getElementById('signUp')
const users = []
let index = 0

function createLabel(innerText, htmlFor) {
    const label = document.createElement('label')
    label.innerText = innerText
    label.htmlFor = htmlFor
    return label
}

function createInput(id, name, type = 'text', value, placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.type = type
    input.value = value
    input.placeholder = placeholder
    return input
}

addTecnology.addEventListener('click', function (add){
    add.preventDefault();
    
    const li = document.createElement('li')
    li.id = 'tech' + index
    li.className = 'techRows'
    index++
    
    const techLabel = createLabel('Tecnologia: ', li.id)
    const techInput = createInput('techInput:' + index, 'techName', 'text',  '')
    const radio1 = createInput('exp-' + index + '.1', 'exp' + index, 'radio', '0-2 anos')
    const radioLabel1 = createLabel('0-2 anos', radio1.name)
    const radio2 = createInput('exp-' + index + '.2', 'exp' + index, 'radio', '3-4 anos')
    const radioLabel2 = createLabel('3-4 anos', radio2.name)
    const radio3 = createInput('exp-' + index + '.3', 'exp' + index, 'radio', '5+ anos')
    const radioLabel3 = createLabel('5+ anos ', radio3.name)
    
    radio1.className = 'radio'
    radio2.className = 'radio'
    radio3.className = 'radio'

    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remover'
    removeButton.type = 'button'
    removeButton.id = 'removeButton'
    removeButton.addEventListener('click', function(ev){
        ev.preventDefault();
        li.remove(this.node)
    })
    
    li.append(techLabel, techInput, radio1, radioLabel1, radio2, radioLabel2, radio3, radioLabel3, removeButton)
    ul.append(li)
    return(li, techLabel, techInput, radio1, radioLabel1, radio2, radioLabel2, radio3, radioLabel3, removeButton )
    })
    
signUp.addEventListener('click', function(submit){
    submit.preventDefault();
    let user = fullname.value
    let technologies = []
    let techRows = document.querySelectorAll('.techRows')
    techRows.forEach(function(tech){
        let techName = document.querySelector('#' + tech.id + ' input[name="techName"]').value
        let radios = document.querySelector('#' + tech.id + ' input[type="radio"]:checked').value
        technologies.push({technologies: techName, experience: radios})
    })
    
    users.push({name: user, tecnology: technologies})
    console.log(users)
    alert('Dev ' + user + ' cadastrado com sucesso!')
    fullname.value = ''
    techRows.forEach(function(tech){
        tech.remove()
    })
})