
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
