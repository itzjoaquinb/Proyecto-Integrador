let contenedorRecetas = document.getElementById('contenedorRecetas');
let url = window.location.search; 
let params = new URLSearchParams(url);
let categoriaSeleccionada = params.get('category');

if (!categoriaSeleccionada) {
    console.error('No se proporcionó una categoría válida.');
} else {
    let tituloCategoria = document.getElementById('tituloCategoria');
    tituloCategoria.textContent = `Recetas de la categoría: ${categoriaSeleccionada}`;

    function obtenerRecetasPorCategoria() {
        return fetch(`https://dummyjson.com/recipes/tag/${categoriaSeleccionada}`)
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                return datos.recipes || []; 
            })
            .catch(function (error) {
                console.error('Error al obtener recetas por categoría:', error);
                return [];
            });
    }

    function mostrarRecetas(recetas) {
        recetas.forEach(function (receta) {
            let tarjetaReceta = document.createElement('div');
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

    obtenerRecetasPorCategoria().then(function (recetas) {
        mostrarRecetas(recetas);
    });
}

