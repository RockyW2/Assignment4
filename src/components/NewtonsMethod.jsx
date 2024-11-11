import './NewtonsMethod.css';
import { useState } from 'react';

function NewtonsMethod(){
    const [guess, setGuess] = useState(0);
    const [result, setResult] = useState("Press Calculate");

    function newtonsMethod(e){
        e.preventDefault();
        let currentGuess = parseInt(guess);
        let prevGuess = 0;
        let newGuess = 0;

        do{
            newGuess = currentGuess - (6*Math.pow(currentGuess,4) - 13*Math.pow(currentGuess,3) - 18*Math.pow(currentGuess,2) + 7*currentGuess + 6)/ (24*Math.pow(currentGuess,3) - 39*Math.pow(currentGuess,2) - 36*currentGuess + 7);
            prevGuess = currentGuess;
            currentGuess = newGuess;
        } while(Math.abs(prevGuess-currentGuess) > 0.000001)

        if (Math.abs(prevGuess-currentGuess) < 0.0001){
            setResult(currentGuess);
        }
    }
    return(
        <form onSubmit={(e) => newtonsMethod(e)}>
            <h3 if="newton-title">Newton's Method</h3>
            <label> Root Guess:</label>
            <input type="number" id="root-guess" onChange={(event) => { setGuess(event.target.value) }} required/>
            <input type="submit" id="newton-calculate" value="Calculate"/>
            <label>Result:</label>
            <input type="text" id="newton-result" value={result} readOnly/>
        </form>
    )
}

export default NewtonsMethod;