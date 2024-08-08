function fetchData(queryArray, setPokemonArray) {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    Promise.all(queryArray.map(query => {
        return fetch(apiUrl + query, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            return response;
        })
    })).then(data => {
        setPokemonArray(data);
    }).catch(error => console.log(error))
}

export default fetchData;