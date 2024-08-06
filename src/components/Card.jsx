import React, { useState, useEffect } from 'react';

function Card({ id }) {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + id.toString();

    const [data, setData] = useState(null);
    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then((response) => setSprite(response.sprites.front_default))
        // .then(json => setData(json))
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {/* {data ? <pre>{data.abilities}</pre> : 'Loading...'}
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
            <Abilities data={data} /> */}
            {sprite ? <img src={sprite} alt="" /> : 'Loading...'}
        </div>
    )
}

// function Abilities({data}) {
//     if (data === null) {
//         console.log('Loading...');
//     } else {
//         let abilities = data[abilities];
//         console.log(abilities);
//     }
// }

export default Card;