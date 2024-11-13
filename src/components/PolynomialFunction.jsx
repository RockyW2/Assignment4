import './PolynomialFunction.css';
import { useState } from 'react';

function PolynomialFunction() {
    const coefficients = document.getElementById("polynomial-coefficients").value.split(" ").map(Number);
    const exponents = document.getElementById("polynomial-exponents").value.split(" ").map(Number);
    const xValue = parseFloat(document.getElementById("polynomial-x-Value").value);
    const [result, setResult] = useState ("Press Calculate");

    function polynomialFunction(){
    
        if (coefficients.length !== exponents.length) {
            alert("Please ensure coefficients and exponents have the same length.");
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
    
        document.getElementById("polynomial-function").value = polynomialStr;
        document.getElementById("polynomial-result").value = yValue;
    }
    return(
        <form onSubmit={(e) => polynomialFunction(e)}>
            <h3 id="polynomial-title">Polynomial Function</h3>
            <label>Coefficients:</label>
            <input type="text" id="polynomial-coefficients"/>
            <label>Exponents:</label>
            <input type="text" id="polynomial-exponents" name="exponents"/>
            <label>x-value:</label>
            <input type="number" id="polynomial-x-Value"/>
            <input type="submit" id="polynomial-calculate" value="Calculate"/>
            <label>Function:</label>
            <input type="text" id="polynomial-function" readonly/>
            <label>Result:</label>
            <input type="text" id="polynomial-result" readonly/>
        </form>
    )
}