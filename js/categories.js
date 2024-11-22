const contenedorCategorias = document.getElementById('contenedorCategorias');

function obtenerCategorias() {
    return fetch('https://dummyjson.com/recipes/tags')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (tags) {
            return tags; 
        })
        .catch(function (error) {
            console.error('Error al obtener categorías:', error);
            return [];
        });
}

function mostrarCategorias(categorias) {
    categorias.forEach(function (categoria) {
        const tarjetaCategoria = document.createElement('div');
        tarjetaCategoria.classList.add('categoriaBox');
        tarjetaCategoria.innerHTML = `
            <a href="category.html?category=${categoria}" class="categoriaLink">
                ${categoria}
            </a>
        `;
        contenedorCategorias.appendChild(tarjetaCategoria);
    });
}

obtenerCategorias().then(function (categorias) {
    mostrarCategorias(categorias);
});
