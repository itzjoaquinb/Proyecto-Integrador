const contenedorRecetas = document.getElementById('contenedorRecetas');
const botonCargarMas = document.getElementById('botonCargarMas');
let paginaActual = 0;
const recetasPorPagina = 10;

function obtenerRecetas(pagina) {
    return fetch(`https://dummyjson.com/recipes?limit=${recetasPorPagina}&skip=${pagina * recetasPorPagina}`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            return datos.recipes;
        })
        .catch(function (error) {
            console.error('Error al obtener recetas:', error);
            return [];
        });
}

function mostrarRecetas(recetas) {
    recetas.forEach(function (receta) {
        const tarjetaReceta = document.createElement('div');
        tarjetaReceta.classList.add('recetaBox');
        tarjetaReceta.innerHTML = `
            <img src="${receta.image}" alt="${receta.title}" class="imagenReceta">
            <h2 class="recipe-title">${receta.name}</h2>
            <p class="recipe-difficulty">Dificultad: ${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}" class="recipe-link">VER MÁS</a>
        `;
        contenedorRecetas.appendChild(tarjetaReceta);
    });
}

function cargarRecetas() {
    obtenerRecetas(paginaActual).then(function (recetas) {
        mostrarRecetas(recetas);
        paginaActual++;
    });
}

botonCargarMas.addEventListener('click', cargarRecetas);

cargarRecetas();
