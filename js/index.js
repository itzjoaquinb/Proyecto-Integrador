fetch('https://dummyjson.com/docs/recipes')
    .then(function(response){
        return response.json
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log('Error:' + error);
    })