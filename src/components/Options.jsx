import React, { useState, useEffect } from 'react'

function Options({ options, setOptions }) {
    const [count, setCount] = useState(options.count);

    function handleCardCountChange(e) {
        setCount(e.target.value);
    }

    function handleSubmitCardCount() {
        setOptions({...options, count: count});
    }

    function handleNames(e) {
        setOptions({...options, names: e.target.checked});
    }

    function handleColors(e) {
        setOptions({...options, colors: e.target.checked});
    }

    function handleGenerations(e) {
        setOptions({...options, generation: e.target.value});
    }

    return (
        <>
            <div className="cardCountInputContainer optionItem">
                <label htmlFor="cardCountInput">Pok&eacute;mon count: (maximum 20)</label>
                <br />
                <input id="cardCountInput" type="number" value={count} min="1" max="20" onChange={handleCardCountChange} className="cardCountInput" />
                <button type="button" onClick={handleSubmitCardCount} className="cardCountSubmit" aria-label="submit card count">Submit</button>
            </div>
            <div className="optionItem">
                <input type="checkbox" id="names" checked={options.names} onChange={handleNames} />
                <label htmlFor="names">Names</label>
            </div>
            <div className="optionItem">
                <input type="checkbox" id="colors" checked={options.colors} onChange={handleColors} />
                <label htmlFor="colors">Colors</label>
            </div>
            <div className="optionItem">
                <label htmlFor="generations">Up to:</label>
                <select name="generations" id="generations" defaultValue={options.generation} onChange={handleGenerations} className="generationsInput">
                    <option value="151">Generation 1</option>
                    <option value="251">Generation 2</option>
                    <option value="386">Generation 3</option>
                    <option value="493">Generation 4</option>
                    <option value="649">Generation 5</option>
                    <option value="721">Generation 6</option>
                    <option value="809">Generation 7</option>
                    <option value="1025">Generation 8</option>
                </select>
            </div>
        </>
    )
}

export default Options;