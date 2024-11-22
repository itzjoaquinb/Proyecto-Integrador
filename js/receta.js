let queryString = location.search; 
let queryStringObj = new URLSearchParams(queryString);
let recetaId = queryStringObj.get('id');



    fetch(`https://dummyjson.com/recipes/${recetaId}`)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            console.log(data);
            let nomnbre = document.querySelector('h1');
            nomnbre.innerText = data.name;
            let imagen = document.querySelector('img');
            imagen.src = data.image;
            let coccion = document.querySelector('#tiempoCoccion');
            coccion.innerText = data.cookTimeMinutes
            let instrucciones = document.querySelector('#instruccionesReceta');
            instrucciones.innerText = data.instructions 
            let categorias = document.querySelector('#categoriasReceta');
            categorias.innerText = data.tags 
        })
        .catch(function(error) {
            console.error('Error al obtener los detalles de la receta:', error);
        });
