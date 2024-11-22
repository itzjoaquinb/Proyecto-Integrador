let registroForm = document.querySelector("#registroForm")
console.log()
registroForm.addEventListener("submit", function(event){
  let correoElectrónico = document.querySelector("#correoElectrónico")
  let contraseña = document.querySelector("#contraseña")

  if (correoElectrónico.value == ""){
    event.preventDefault();
    alert("Por favor, complete el campo de correo electrónico");
  }

  else if (contraseña.value == ""){
    event.preventDefault();
    alert("Por favor, complete el campo de contraseña")
  }
});
