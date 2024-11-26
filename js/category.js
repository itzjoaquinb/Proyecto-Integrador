let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoryName = queryStringObj.get('category');

fetch(`https://dummyjson.com/recipes`)
    .then(function (response) {
        return response.json(); 
    })
    .then(function (data) {
        let lista = document.querySelector("#contenedorRecetas");
        let titulo = document.querySelector("#tituloCategoria");
        titulo.innerHTML = `Categoría: ${categoryName}`;
        let recetasHTML = '';

        for (let i = 0; i < data.recipes.length; i++) {
            if (data.recipes[i].tags.includes(categoryName)) {
                recetasHTML += `
                <div class="receta">
                    <img src="${data.recipes[i].image}" alt="Imagen de ${data.recipes[i].name}">
                    <h3>${data.recipes[i].name}</h3>
                    <p>Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="./receta.html?id=${data.recipes[i].id}">Ver más</a>
                </div>`;
            }
        }

            lista.innerHTML = recetasHTML;

    })
    .catch(function (error) {
        console.error('Error al cargar recetas:', error);
    });
