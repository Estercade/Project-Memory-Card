import React, { useState, useEffect } from 'react';

function Card({ queryId, setScore, generateNewCards }) {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    const [data, setData] = useState(null);

    function handleSelected() {
        if (data.selected) {
            setScore(0);
            generateNewCards();
        } else {
            setData({...data, selected: true})
            setScore(score => score + 1);
        }
    }

    useEffect(() => {
        let ignore = false;
        fetch (apiUrl + queryId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then((data) => {
            setData({
            id: data.id,
            name: data.forms[0].name,
            imgUrl: data.sprites.front_default,
            selected: false
            })
        })
        .catch(error => console.log(error));
        return () => {
            ignore = true;
        };
    },  [queryId]);

    useEffect(() => {

    })

    if (!data) {
        return <div className="card">Loading...</div>
    }

    return (
        <button type="button" value={data.name} onClick={handleSelected} className="card" key={data.id}>
            <img src={data.imgUrl} alt="" />
            <div className="cardName">{data.name}</div>
            <div className="selected">{data.selected === true ? "selected" : "not selected"}</div>
        </button>
    )
}

export default Card;