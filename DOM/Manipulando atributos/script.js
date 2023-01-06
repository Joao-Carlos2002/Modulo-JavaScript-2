let input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (ev) {
    ev.preventDefault();
    input.value == '' ? input.value = 'Olá mundo!' : input.value = '';
})

document.getElementById('type').addEventListener('click', function (ev) {
    ev.preventDefault();
    input.type == 'text' ? input.type = 'password' : input.type = 'text';
    input.type == 'text' ? input.placeholder = 'Digite um texto' : input.placeholder = 'Digite uma senha';
})

document.getElementById('placeholder').addEventListener('click', function (ev) {
    ev.preventDefault();
    input.placeholder != 'Digite um texto' ? input.placeholder = 'Digite um texto' : input.placeholder = 'Digite uma senha';
})

document.getElementById('disable').addEventListener('click', function (ev) {
    ev.preventDefault();
    input.disabled == false ? input.disabled = true : input.disabled = false;
})

document.getElementById('data').addEventListener('click', function (ev) {
    ev.preventDefault();
    alert(input.getAttribute('data-something'))
})

document.getElementById('switchData').addEventListener('click', function (ev) {
    ev.preventDefault();
    input.setAttribute('data-something','Esse valor mudou!')
})