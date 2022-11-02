const button = document.getElementById('buttonSign')
const buttonRemove = document.getElementById('buttonRemove')
button.addEventListener('click', function() {
    const username = button.parentNode.children.username.value
    const password = button.parentNode.children.password.value
    const confirmPassword = button.parentNode.children.confirmPassword.value

    if (password === confirmPassword) {
        alert('Usuário ' + username + ' cadastrado!')
    } else {
        alert('Senhas não conferem')
    }
    
})

buttonRemove.removeEventListener('click', function() {
    
})