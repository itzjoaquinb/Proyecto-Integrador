let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let categoryName = queryStringObj.get('category');

fetch(`https://dummyjson.com/recipes`)
    .then(function (response) {
        return response.json(); 
    })
    .then(function (data) {
        let lista = document.querySelector("#contenedorRecetas")
        let titulo = document.querySelector("#tituloCategoria")
        titulo.innerHTML = `${categoryName}`
        let recetas = ''

        data.recipes.forEach(receta => {
            if (receta.tags.includes(categoryName)){
                recetas += `
                <div class="receta">
                    <img src="${receta.image}" alt="Imagen de ${receta.name}">
                    <h3>${receta.name}</h3>
                    <p>Dificultad: ${receta.difficulty}</p>
                    <a href="./receta.html?id=${receta.id}">Ver más</a>
                </div>`
            }
        });

        lista.innerHTML = recetas;
    })
    .catch(function (error) {
        console.error('Error al obtener las recetas:', error);
    });