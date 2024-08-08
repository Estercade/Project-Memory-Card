import React, { useState, useEffect } from 'react';
import fetchData from '../hooks/fetchData.js';
import Card from './Card.jsx';

function Gameboard() {
    const [count, setCount] = useState(3);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [pokemonArray, setPokemonArray] = useState([]);

    function generateNewCards() {
        let randomSet = new Set([]);
        while (randomSet.size < count) {
            randomSet.add(Math.ceil(Math.random() * 150).toString());
        }
        let randomIds = (Array.from(randomSet));
        fetchData(randomIds, setPokemonArray);
        setScore(0);
    }

    function shuffleCards() {
        let oldArray = pokemonArray;
        let newArray = [];
        for (let i = oldArray.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * i);
            newArray.push(oldArray[rand]);
            oldArray[rand] = oldArray[i];
        }
        setPokemonArray(newArray);
    }

    function handleCardCountChange(e) {
        setCount(e.target.value);
    }

    useEffect(() => {
        generateNewCards();
    }, []);

    useEffect(() => {
        shuffleCards();
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score]);

    function handleSubmitCardCount() {
        if (count < 1 || count > 20) {
            alert('Please select a valid number between 1 and 20.');
        } else {
            generateNewCards();
        }
    }

    return (
        <div className="gameboardContainer">
            <div className="scoreboard">
                <div className="scoreboard">Current score: {score}</div>
                <div className="highScore">High score: {highScore}</div>
            </div>
            <div className="cardCountInputContainer">
                <label htmlFor="cardCountInput">Card count: </label>
                <input id="cardCountInput" value={count} onChange={handleCardCountChange}></input>
                <button type="button" onClick={handleSubmitCardCount}>Submit</button>
            </div>
            <div className="cardContainer">
                {pokemonArray.map(pokemon => {
                    return (
                        <Card pokemon={pokemon} setScore={setScore} generateNewCards={generateNewCards} key={pokemon.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Gameboard;