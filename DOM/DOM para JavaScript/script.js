function sign(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const confirmPassword = element.children.confirmPassword.value
    console.log({username, password, confirmPassword}) 
}