let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let searchTerm = queryStringObj.get('search');

fetch('https://dummyjson.com/recipes')
    .then(function (response) {
        return response.json(); 
    })
    .then(function (data) {
        let lista = document.querySelector("#searchResults")
        let titulo = document.querySelector("#searchTitle")
        titulo.innerHTML = `Resultados de búsqueda para: ${searchTerm}`
        let recetas = ''

        for (let i = 0; i < data.recipes.length; i++) {
            let terminoBusqueda = searchTerm.toLowerCase();
            let nombreReceta = data.recipes[i].name.toLowerCase();
            
            if (nombreReceta.includes(terminoBusqueda)) {
                recetas += `
                <div class="receta">
                    <img src="${data.recipes[i].image}" alt="Imagen de ${data.recipes[i].name}">
                    <h3>${data.recipes[i].name}</h3>
                    <p>Dificultad: ${data.recipes[i].difficulty}</p>
                    <a href="./receta.html?id=${data.recipes[i].id}">Ver más</a>
                </div>`
            }
        }

        if (recetas === '') {
            lista.innerHTML = `
            <div class="receta">
                <p>Lo sentimos, no se encontraron recetas que coincidan con "${searchTerm}".</p>
            </div>`
        } else {
            lista.innerHTML = recetas;
        }
    })
    .catch(function (error) {
        console.error('Errorsito:', error);
    });
