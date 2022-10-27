const listPlayer = []

function confirmPlayer() {
    const playerName = document.getElementById('playerName')
    const playerPosition = document.getElementById('playerPosition')
    const numberShirt = document.getElementById('numberShirt')

    const newName = playerName.value
    const newPosition = playerPosition.value
    const newShirt = numberShirt.value
    confirm('Você deseja adicionar este jogador com essas informações:\nPosição do jogador: ' + newPosition + '\nNome do jogador: ' + newName + '\nNúmero da Camisa: ' + newShirt)
    
    // listPlayer.push({posição: newPosition, nome: newName, camisa: newShirt})
    
    
    playerName.value = ''
    playerPosition.value = ''
    numberShirt.value = ''
    
    const div = document.getElementById('playerList')
    const p = document.createElement('p')
    
    p.innerText = newPosition + ': ' + newName + ' (' + newShirt + ')'
    p.id = 'player-' + newShirt
    div.appendChild(p)
}

function removePlayer() {
    const number = document.getElementById('numberRemove')
    const newNumber = number.value
    const player = document.getElementById('player-' + newNumber)
    const newPlayer = document.getElementById('player-' + newNumber).innerText
    const confirmation = confirm('Remover o jogador ' + newPlayer +'?')

    if (confirmation) {
        document.getElementById('playerList').removeChild(player) 
        number.value = ''
    }
}