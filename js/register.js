let formulario = document.querySelector('.registroForm')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let errorEmail = document.querySelector(".email")
let errorPassword = document.querySelector(".password")



formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    if(email.value == ''){
        console.log('completa el campo')
        errorEmail.innerHTML = '<p>Completa el campo</p>'
        errorEmail.style.color = "red"
        }
    else if(password.value == ''){
        console.log('completa el campo')
        errorPassword.innerHTML = '<p>Completa el campo</p>'
        errorPassword.style.color = "red"
        errorPassword.style.backgroundColor = "#616a5c";
    }
    else {
        formulario.submit()
    }
})