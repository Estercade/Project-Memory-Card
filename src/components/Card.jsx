import React, { useState, useEffect } from 'react';

function Card({pokemon, setScore, generateNewCards}) {
    function handleSelected() {
        if (pokemon.selected) {
            setScore(0);
            generateNewCards();
        } else {
            pokemon.selected = true;
            setScore(score => score + 1);
        }
    }

    if (!pokemon) {
        return <div className="card">Loading...</div>
    }

    return (
        <button type="button" value={pokemon.name} onClick={handleSelected} className="card" key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt="" />
            <div className="cardName">{pokemon.name}</div>
            <div className="selected">{pokemon.selected === true ? "selected" : "not selected"}</div>
        </button>
    )
}

export default Card;