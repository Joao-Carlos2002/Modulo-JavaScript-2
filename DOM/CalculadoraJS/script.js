const switchTheme = document.getElementById("switchTheme");
const root = document.querySelector(':root');
const div = document.getElementById('container')
const calcInput = document.getElementById('calcInput');
const resultInput = document.getElementById('inputResult')

const keysAllowed = ['(', ')', '/', '*', '-', '+', '.', '0','1', '2', '3', '4', '5', '6', '7', '8', '9']

document.body.addEventListener('click', function () {
    calcInput.focus();
})

switchTheme.addEventListener('click', function(ev) {
    ev.preventDefault();
    if (div.dataset.theme == 'light'){
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        div.dataset.theme = 'dark';
    } else {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#4dff91')
        div.dataset.theme = 'light';
    }
})

document.getElementById('clear').addEventListener('click', function() {
    calcInput.value = calcInput.value.slice(0,0)
})


document.querySelectorAll('.keyClass').forEach(function (ev){
    ev.addEventListener('click', function() {
        const value = ev.dataset.value;
        calcInput.value += value;
    })
})

calcInput.addEventListener('keydown', function(ev) {
    ev.preventDefault();
    if (keysAllowed.includes(ev.key)){
        calcInput.value += ev.key
        return    
    }
    
    if (ev.key == 'Backspace') {
        calcInput.value = calcInput.value.slice (0, -1)
    }
    
    if(ev.key == 'c') {
        calcInput.value = calcInput.value.slice(0, 0)
    }

    if (ev.key == 'Enter') {
        calculate();
    }
})

document.getElementById('resultBtn').addEventListener('click', function() {
    calculate();
})

function calculate() {
    let result = eval(calcInput.value)
    resultInput.value = result
    calcInput.value = ''
    resultInput.style.backgroundColor = ('#00ff00')
    resultInput.style.fontWeight = ('bold')
}