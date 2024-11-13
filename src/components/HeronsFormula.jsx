import './HeronsFormula.css';
import { useState } from 'react';

function HeronsFormula() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [area, setArea] = useState("Press Calulate");

    function heronsFormula(e) {
        e.preventDefault();
        const s = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
        setArea(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
    }

    return (
        <form onSubmit={(e) => heronsFormula(e)}>
            <h3 id="hTitle">Heron's Formula</h3>
            <label>Side A:</label>
            <input type="number" id="heron-side-a" value={a} onChange={(event) => { setA(event.target.value) }} required />
            <label>Side B:</label>
            <input type="number" id="heron-side-b" value={b} onChange={(event) => { setB(event.target.value) }} required />
            <label>Side C:</label>
            <input type="number" id="heron-side-c" value={c} onChange={(event) => { setC(event.target.value) }} required />
            <input type="submit" id="heron-calculate" value="Calculate" />
            <label>Area (Result):</label>
            <input type="text" id="heron-area" value={area} readOnly />
        </form>
    )
}

export default HeronsFormula;