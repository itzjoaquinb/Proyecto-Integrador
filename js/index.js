
fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let lista = document.querySelector('#contenedorRecetas');
        let recetas = '';
        for (let i = 0; i < 10; i++) {
            let receta = `
                <div class="receta">
                    <img src="${data.recipes[i].image}" alt="Imagen de ${data.recipes[i].name}">
                    <h3>${data.recipes[i].name}</h3>
                    <p>Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="./receta.html?id=${data.recipes[i].id}">Ver más</a>
                </div>`;
            recetas += receta;
        }
        lista.innerHTML = recetas;
    })
    .catch(function (error) {
        console.error(error);
    });

let cargarMas = document.querySelector('#botonCargarMas');
let recetasPorPagina = 10;

cargarMas.addEventListener('click', function () {
    fetch(`https://dummyjson.com/recipes?limit=${recetasPorPagina}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let lista = document.querySelector('#contenedorRecetas');
            let recetas = '';
            for (let i = 0; i < data.recipes.length; i++) {
                let receta = `
                    <div class="receta">
                        <img src="${data.recipes[i].image}" alt="Imagen de ${data.recipes[i].name}">
                        <h3>${data.recipes[i].name}</h3>
                        <p>Dificultad: ${data.recipes[i].difficulty}</p>
                        <a href="./receta.html?id=${data.recipes[i].id}">Ver más</a>
                    </div>`;
                recetas += receta;
            }
            lista.innerHTML = recetas;
        })
        .catch(function (error) {
            console.error(error);
        });

    recetasPorPagina += 10;
});


let forms = document.querySelector('.search-form')
let errorForms = document.querySelector('.invalid')
let buscador = document.querySelector('.search-input')

forms.addEventListener('submit', function(event){
    event.preventDefault()
    if(buscador.value == ''){
        console.log('completa el campo')
        errorForms.innerHTML = '<p>Completa el campo</p>'
        errorForms.style.color = "red"
        errorForms.style.fontSize = "10px";
        }
    else if(buscador.value.length < 3){
        console.log('Completa más de 3 caracteres')
        errorForms.innerHTML = '<p>Completa más de 3 caracteres</p>'
        errorForms.style.color = "red"
        errorForms.style.fontSize = "10px";
    }
    else {
        forms.submit()
    }
})