import React, { useState, useEffect } from 'react'
import fetchData from './components/fetchData.js'
import Card from './components/Card.jsx'
import Options from './components/Options.jsx'

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [pokemonArray, setPokemonArray] = useState([]);
    const [hideOptions, setHideOptions] = useState(false);
    const [options, setOptions] = useState({count: 8, names: false, colors: false, generation: 150});

    function generateNewCards() {
        let randomSet = new Set([]);
        while (randomSet.size < options.count) {
            randomSet.add(Math.ceil(Math.random() * options.generation).toString());
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

    useEffect(() => {
        generateNewCards();
    }, []);

    useEffect(() => {
        shuffleCards();
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score]);

    useEffect(() => {
        generateNewCards();
    }, [options]);

    function toggleShowOptions() {
        setHideOptions(!hideOptions);
    }

    return (
        <>
            <div className="gameboardContainer">
                <div className="scoreboard">
                    <div className="score">Current score: {score}</div>
                    <div className="highScore">High score: {highScore}</div>
                </div>
                <ul className="cardContainer">
                    {pokemonArray.map(pokemon => {
                        return <Card pokemon={pokemon} setScore={setScore} generateNewCards={generateNewCards} options={options} key={pokemon.id} />
                    })}
                </ul>
            </div>
            <div className="instructions">Get points by clicking on Pok&eacute;mon, but don't click more than once!</div>
            <div className="optionsContainer">
                <button type="button" className="toggleOptionsButton" onClick={toggleShowOptions}>Options</button>
                {hideOptions && <Options options={options} setOptions={setOptions} generateNewCards={generateNewCards} />}
            </div>
        </>
    )
}

export default App;