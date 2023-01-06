const form = document.getElementById('form-area')

form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    let name = document.getElementById('name').value
    let address = document.getElementById('address').value
    let bread = document.getElementById('bread').value
    let observations = document.getElementById('observations').value
    let select = document.getElementById('bread1').value

    let meat = document.querySelector('input[name="meat"]:checked').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salad += ' - ' + item.value + '\n'
    })

    alert(
        "Nome: " + name + "\nEndereço: " + address + "\nTipo de pão: " + bread + "\nTipo de carne: " + meat + "\nTipo de salada:\n" + salad + "\nObservações do pedido: " + observations
    )
    
    name = document.getElementById('name').value = ''
    address = document.getElementById('address').value = ''
    bread = document.getElementById('bread').value = select
    observations = document.getElementById('observations').value = ''
    
    document.querySelectorAll('input[name="meat"]:checked').forEach(function(item){
        let remove = item
        remove.checked = false
    })

    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        let remove = item
        remove.checked = false
    })
})