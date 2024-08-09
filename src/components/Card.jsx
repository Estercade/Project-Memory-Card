import React, { useState, useEffect } from 'react'

function Card({pokemon, setScore, generateNewCards, options, darkmode}) {
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
        <li className={"card" + (darkmode ? " darkmode" : "")}>
            <button type="button" value={pokemon.name} onClick={handleSelected} className={"pokemonButton" + (options.colors ? ` ${pokemon.types[0].type.name}` : "") + (darkmode ? " darkmode" : "")}>
                <img src={pokemon.sprites.front_default} alt="" className="pokemonSprite" />
                {options.names && <div className="cardName">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>}
                {/* <div className="selected">{pokemon.selected === true ? "selected" : "not selected"}</div> */}
            </button>
        </li>
    )
}

export default Card;