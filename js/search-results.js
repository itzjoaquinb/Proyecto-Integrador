let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let searchTerm = queryStringObj.get('search');

let containerRecetas = document.querySelector('#contenedorRecetas');

fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let recetas = data.recipes;
        let titulo = document.querySelector("#tituloCategoria")
        titulo.innerHTML = `Resultados de búsqueda para: ${searchTerm}`

        if (recetas.length == 0) {
            containerRecetas.innerHTML = ` 
                <div class="receta">
                    <p>Lo sentimos, no se encontraron recetas que coincidan con "${searchTerm}".</p>
                </div>`;
        } else {
            for (let i = 0; i < recetas.length; i++) {
                containerRecetas.innerHTML += `
                   <div class="receta">
                       <img src="${recetas[i].image}" alt="Imagen de ${recetas[i].name}">
                       <h3>${recetas[i].name}</h3>
                       <p>Dificultad: ${recetas[i].difficulty}</p>
                       <a href="./receta.html?id=${recetas[i].id}">Ver más</a>
                   </div>`;
            }
        }
    })
    .catch(function (error) {
        console.log("Error cargando recetas:", error);
    });
