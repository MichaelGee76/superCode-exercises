import { useState } from "react";
import "./Banana.css";

const Banana = () => {
    const [sum, setSum] = useState(0);
    const [usrInput, setUsrInput] = useState("");
    const add = () => {
        setSum(sum + usrInput);
        setUsrInput("");
    };

    const sub = () => {
        if (usrInput > sum) {
            alert("You haven't enough money.");
        } else {
            setSum(sum - usrInput);
        }
        setUsrInput("");
    };
    return (
        <div className="container">
            <div className="upperContainer">
                <h1>Banana Bank</h1>
                <img src="public\banana.png" alt="bananas" />
                <h3 className="output">{sum} Bananas</h3>
                <input type="number" placeholder="How may Bananas?" value={usrInput} onChange={(event) => setUsrInput(Number(event.target.value))} />
            </div>
            <div className="btnContainer">
                <button onClick={add}>Add</button>
                <button onClick={sub}>Sub</button>
            </div>
        </div>
    );
};

export default Banana;
