const url = window.location.search; 
const params = new URLSearchParams(url);
const recetaId = params.get('id');


if (recetaId) {
    fetch(`https://dummyjson.com/recipes/${recetaId}`)
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            mostrarReceta(data); 
        })
        .catch(function(error) {
            console.error('Error al obtener los detalles de la receta:', error);
        });
} else {
    console.error('No se proporcionó un ID de receta válido.');
}

function mostrarReceta(receta) {

    const nombreReceta = document.getElementById('nombreReceta');
    nombreReceta.textContent = receta.name;


    const fotoReceta = document.getElementById('fotoReceta');
    fotoReceta.src = receta.image;
    fotoReceta.alt = 'Imagen de ' + receta.title;


    const tiempoCoccion = document.getElementById('tiempoCoccion');
    tiempoCoccion.textContent = receta.cookTimeMinutes || 'No disponible';


    const instruccionesReceta = document.getElementById('instruccionesReceta');
    instruccionesReceta.textContent = receta.instructions || 'No disponible';


    const categoriasReceta = document.getElementById('categoriasReceta');
    categoriasReceta.innerHTML = ''; 
    receta.categories.forEach(function(categoria) {
        const link = document.createElement('a');
        link.href = './categories.html?category=' + categoria;
        link.textContent = categoria;
        categoriasReceta.appendChild(link);
        categoriasReceta.appendChild(document.createTextNode(', ')); 
    });
    if (categoriasReceta.lastChild) {
        categoriasReceta.removeChild(categoriasReceta.lastChild); 
    }

}
