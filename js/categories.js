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

        let forms = document.querySelector('.search-form')
        let errorForms = document.querySelector('.invalid')
        let buscador = document.querySelector('.search-input')
        
        forms.addEventListener('submit', function(event){
            event.preventDefault()
            if(buscador.value == ''){
                console.log('completa el campo')
                errorForms.innerHTML = '<p>Completa el campo</p>'
                errorForms.style.color = "red"
                errorForms.style.fontSize = "10px";
                }
            else if(buscador.value.length < 3){
                console.log('Completa más de 3 caracteres')
                errorForms.innerHTML = '<p>Completa más de 3 caracteres</p>'
                errorForms.style.color = "red"
                errorForms.style.fontSize = "10px";
            }
            else {
                forms.submit()
            }
        })