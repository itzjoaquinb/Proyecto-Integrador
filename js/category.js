let queryString = location.search
let queryStringObj = new URLSearchParams(queryString);
let categoryName = queryStringObj.get('tag');


fetch(`https://dummyjson.com/recipes`)
    .then(function (response) {
        return response.json(); 
    })
    .then(function (data) {
        let lista = document.querySelector(".contenedorRecetas")
        let titulo = document.querySelector("#tituloCategoria")
        titulo.innerHTML = `${categoryName}`
        let recetas = []

        for (let i = 0; i < data.recipies.length; i++) {
            let receta = recetas[i];
            let recetaElemento = document.createElement('div');
            recetaElemento.classList.add('receta');
            recetaElemento.innerHTML = `
                <img src="${receta.image}" alt="Imagen de ${receta.title}">
                <h3>${receta.name}</h3>
                <p>Dificultad: ${receta.difficulty}</p>
                <a href="./receta.html?id=${receta.id}">Ver más</a>
            `;
            recetasContainer.appendChild(recetaElemento);
        }
    })
    .catch(function (error) {
        console.error('Error al obtener las recetas:', error);
    });

