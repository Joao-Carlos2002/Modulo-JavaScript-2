li = []

function adicionarContato(){
    const nome = prompt("Digite o nome do contato que deseja salvar:")
    const numero = prompt("Digite o número do contato:")

    const ul = document.getElementById('contact-list')

    const novoContato = document.createElement('li')
    li.push({
        nome, 
        numero})

    novoContato.innerText = 'Nome: ' + nome + '\nNúmero: ' + numero
    
    ul.appendChild(novoContato)
}

function removerContato(){
    const ul = document.getElementById('contact-list')
    if (ul.parentNode) {
        ul.parentNode.removeChild(ul)
    }
}