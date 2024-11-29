let contenedorCategorias = document.querySelector('.contenedorCategorias');

    fetch('https://dummyjson.com/recipes/tags')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {   
                contenedorCategorias.innerHTML += `
                <div class="categoriaBox">
                    <a href="category.html?category=${data[i]}" class="categoriaLink">
                        ${data[i]}
                    </a>
                    </div>
                `; 
            }
        })
        .catch(function (error) {
            console.log('Ocurrió un error: ', error);
        });