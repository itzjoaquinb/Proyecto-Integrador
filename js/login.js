let registroForm = document.querySelector(".registroForm")
let correoElectronico = document.querySelector("#email")
let contraseña = document.querySelector("#password")

registroForm.addEventListener("submit", function(event){
  event.preventDefault()

  if (correoElectronico.value == ""){
    alert("Por favor, complete el campo de correo electrónico");
  }

  else if (contraseña.value == ""){
    alert("Por favor, complete el campo de contraseña")
  }
  else{
    registroForm.submit()
  }
})  
