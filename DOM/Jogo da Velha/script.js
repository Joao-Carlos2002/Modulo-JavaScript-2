const name1 = document.getElementById('player1')
const name2 = document.getElementById('player2')
const play = document.getElementById('play')

play.addEventListener('click', function (ev) {
    name1.style.display = 'none'
    name2.style.display = 'none'
    play.style.display = 'none'
    alert('Jogador 1: ' + name1.value + '\nJogador 2: ' + name2.value)
})