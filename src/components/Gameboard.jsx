import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

function Gameboard() {
    const [randomIdArray, setRandomIdArray] = useState([1, 4, 7]);
    const [cardsArray, setCardsArray] = useState([]);
    const [count, setCount] = useState(randomIdArray.length);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function generateNewCards() {
        let randomSet = new Set([]);
        while (randomSet.size < count) {
            randomSet.add(Math.ceil(Math.random() * 150).toString());
        }
        let newCardsArray = [];
        let randomArray = Array.from(randomSet);
        randomArray.map((id) => {
            newCardsArray.push(<Card queryId={id} key={id} setScore={setScore} generateNewCards={generateNewCards} />)
        })
        setCardsArray(newCardsArray);
        setScore(0);
    }

    function handleShuffleCards() {
        let newCardsArray = []
        for (let i = cardsArray.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * i);
            newCardsArray.push(cardsArray[rand]);
            cardsArray[rand] = cardsArray[i];
        }
        setCardsArray(newCardsArray);
    }

    useEffect(() => {
        let newCardsArray = []
        for (let i = cardsArray.length - 1; i >= 0; i--) {
            let rand = Math.floor(Math.random() * i);
            newCardsArray.push(cardsArray[rand]);
            cardsArray[rand] = cardsArray[i];
        }
        setCardsArray(newCardsArray);
    }, [score]);

    function handleCardCountChange(e) {
        setCount(e.target.value);
    }

    useEffect(() => {
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
            <button type="button" onClick={handleShuffleCards}>Shuffle</button>
            <div className="cardCountInputContainer">
                <label htmlFor="cardCountInput">Card count: </label>
                <input id="cardCountInput" value={count} onChange={handleCardCountChange}></input>
                <button type="button" onClick={handleSubmitCardCount}>Submit</button>
            </div>
            <div className="cardContainer">
                {cardsArray}
            </div>
        </div>
    )
}

export default Gameboard;