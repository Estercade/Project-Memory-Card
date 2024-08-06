import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

function Gameboard() {
    const [count, setCount] = useState('3');
    const [randomArray, setRandomArray] = useState([1, 4, 7]);

    function handleCardCountChange(e) {
        setCount(e.target.value);
    }

    function handleSubmitCardCount() {
        if (count < 1 || count > 20) {
            alert('Please select a valid number between 1 and 20.');
        } else {
            let randomSet = new Set([]);
            while (randomSet.size < count) {
                randomSet.add(Math.ceil(Math.random() * 150));
            }
            setRandomArray(Array.from(randomSet));
        }
    }

    return (
        <div className="gameboardContainer">
            <div className="cardCountInputContainer">
                <label htmlFor="cardCountInput">Card count: </label>
                <input id="cardCountInput" value={count} onChange={handleCardCountChange}></input>
                <button type="button" onClick={handleSubmitCardCount}>Submit</button>
            </div>
            <div className="cardContainer">
                {randomArray.map((id) => 
                    <Card id={id} key={id} />
                )}
            </div>
        </div>
    )
}

export default Gameboard;