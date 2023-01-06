const lightTheme = document.getElementById('lightTheme')
const darkTheme = document.getElementById('darkTheme')
const switchTheme = document.getElementById('switchTheme')
let body = ''
const dark = 'dark'
const light = 'light'
lightTheme.addEventListener('click', function(ev){
    ev.preventDefault();
    body = document.body.className = light
})

darkTheme.addEventListener('click', function(ev){
    ev.preventDefault();
    body = document.body.className = dark
})

switchTheme.addEventListener('click', function(ev){
    ev.preventDefault();
    if (document.body.className == 'light'){
        body = document.body.className = 'dark'
    } else if(document.body.className == 'dark'){
        body = document.body.className = 'light'
    }
})