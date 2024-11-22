let contenedorCategorias = document.querySelector('#contenedorCategorias');

function obtenerCategorias() {
    fetch('https://dummyjson.com/recipes/tags')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (categorias) {
            for (let i = 0; i < categorias.length; i++) {
                let tarjetaCategoria = document.createElement('div');
                tarjetaCategoria.classList.add('categoriaBox');
                
                tarjetaCategoria.innerHTML = `
                    <a href="category.html?category=${categorias[i]}" class="categoriaLink">
                        ${categorias[i]}
                    </a>
                `;
                
                contenedorCategorias.appendChild(tarjetaCategoria);
            }
        })
        .catch(function (error) {
            console.log('Ocurrió un error: ', error);
        });
}

obtenerCategorias();