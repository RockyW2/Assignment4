import './AmbiguousCase.css';
import { useState } from 'react';

function AmbiguousCase() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [angle, setAngle] = useState(0);
    const [result, setResult] = useState("Press Calulate");
    

    function ambiguousCase(e) {
        e.preventDefault();
        const h = hSideB * Math.sin(hAngleA*(Math.PI/180));
        const noTri = "No Triangles";
        const oneTri = "One Triangle";
        const rightTri = "Right Triangle";
        const twoTri = "Two Triangles";

        if(angle < 90){
            if(a < h){
                setResult(noTri);
            }else if (a == h){
                setResult(rightTri);
            }else if (a > b){
                setResult(oneTri);
            }else if ((h < a) && (a < b)){
                setResult(twoTri);
            }else{
                setResult("An Error Has Occured With The Calculations");
            }
        } else if (a > 90){
            if ((a < b) || (a == b)){
                setResult(noTri);
            }else if (a > b){
                setResult(oneTri);
            }else{
                setResult("An Error Has Occured With The Calculations");
            }
        }

        return (
            <form onSubmit={(e) => ambiguousCase(e)}>
                <h3 id="ambiguous-title">Ambiguous Case</h3>
                <label>Angle A:</label>
                <input type="number" id="ambiguous-angle-a" value={angle} onChange={(event) => { setAngle(event.target.value) }} required />
                <label>Side A:</label>
                <input type="number" id="ambiguous-side-a" value={a} onChange={(event) => { setA(event.target.value) }} required />
                <label>Side B:</label>
                <input type="number" id="ambiguous-side-b" value={b} onChange={(event) => { setB(event.target.value) }} required />
                <input type="submit" id="ambiguous-calculate" value="Calculate"/>
                <label for="result">Result:</label>
                <input type="text" id="ambiguous-result" value = {result} readOnly />
            </form>
        )
    }
}

export default AmbiguousCase;