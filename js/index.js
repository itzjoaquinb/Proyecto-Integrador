let lista = document.querySelector("#contenedorRecetas");
let botonCargarMas = document.querySelector("#botonCargarMas");
let paginaActual = 0;
let recetasPorPagina = 12;


function cargarRecetas() {
    fetch(`https://dummyjson.com/recipes?limit=${recetasPorPagina}&skip=${paginaActual * recetasPorPagina}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let recetas = '';

            for (let i = 0; i < data.recipes.length; i++) {
                recetas += `
                <div class="receta">
                    <img src="${data.recipes[i].image}" alt="Imagen de ${data.recipes[i].name}">
                    <h3>${data.recipes[i].name}</h3>
                    <p>Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="./receta.html?id=${data.recipes[i].id}">Ver más</a>
                </div>`;
            }

            lista.innerHTML += recetas;

            paginaActual++;
        })
        .catch(function (error) {
            console.error('Error al cargar las recetas:', error);
        });
}

botonCargarMas.addEventListener('click', cargarRecetas);

cargarRecetas();
