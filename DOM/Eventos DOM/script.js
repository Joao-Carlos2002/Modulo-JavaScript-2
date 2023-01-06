const button = document.getElementById('buttonSign')

function register(ev){
    const username = button.parentNode.children.username.value
    const password = button.parentNode.children.password.value
    const confirmPassword = button.parentNode.children.confirmPassword.value
    
    if (password === confirmPassword) {
        alert('Usuário ' + username + ' cadastrado!')
    } else {
        alert('Senhas não conferem')
    }
}

button.addEventListener('click', register)

function removeEvent(){
    button.removeEventListener('click', register)
    alert('Evento removido')
}