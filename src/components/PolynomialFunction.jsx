import './PolynomialFunction.css';
import { useState } from 'react';

function PolynomialFunction() {
    const [coeff, setCoeff] = useState("");
    const [expo, setExp] = useState("");
    const [xValue, setX] = useState(0);
    const coefficients = coeff.split(" ").map(Number);
    const exponents = expo.split(" ").map(Number);
    const [result, setResult] = useState("Press Calculate");
    const [func, setFunction] = useState("Press Calculate");

    function polynomialFunction(e){
        e.preventDefault();
        if (coefficients.length !== exponents.length) {
            setFunction("Please ensure coefficients and exponents have the same length.");
            setResult("Please ensure coefficients and exponents have the same length.");
            return;
        }
    
        let polynomialStr = "";
        let yValue = 0;
    
        for (let i = 0; i < coefficients.length; i++) {
            const coef = coefficients[i];
            const exp = exponents[i];
            const term = coef * Math.pow(xValue, exp);
    
            yValue += term;
    
            if (coef !== 0) {
                if (i > 0 && coef > 0){
                    polynomialStr += " + "; 
                }    
                if (coef < 0){
                    polynomialStr += " - ";
                } 
                polynomialStr += `${Math.abs(coef)}x^${exp}`;
            }
        }
    
        setFunction(polynomialStr)
        setResult(yValue);
    }
    return(
        <form onSubmit={(e) => polynomialFunction(e)}>
            <h3 id="polynomial-title">Polynomial Function</h3>
            <label>Coefficients:</label>
            <input type="text" id="polynomial-coefficients" onChange={(event) => { setCoeff(event.target.value) }} required />
            <label>Exponents:</label>
            <input type="text" id="polynomial-exponents" onChange={(event) => { setExp(event.target.value) }} required />
            <label>x-value:</label>
            <input type="number" id="polynomial-x-Value" onChange={(event) => { setX(event.target.value) }} required />
            <input type="submit" id="polynomial-calculate" value="Calculate"/>
            <label>Function:</label>
            <input type="text" id="polynomial-function" value={func} readOnly/>
            <label>Result:</label>
            <input type="text" id="polynomial-result" value={result} readOnly/>
        </form>
    )
}

export default PolynomialFunction;