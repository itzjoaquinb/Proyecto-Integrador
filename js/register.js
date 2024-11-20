let formulario = document.querySelector('.registroForm')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let errorEmail = document.querySelector(".email")
let errorPassword = document.querySelector(".password")



formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    if(email.value == ''){
        console.log('completa el campo')
        errorEmail.innerHTML = '<p>Completa el campo</p>'}
    else if(password.value == ''){
        console.log('completa el campo')
        errorPassword.innerHTML = '<p>Completa el campo</p>'}
    else {
        formulario.submit()
    }
})