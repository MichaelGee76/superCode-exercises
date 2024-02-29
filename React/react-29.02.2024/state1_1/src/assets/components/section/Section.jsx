import { useState } from "react";
import "./Section.css";

const Section = () => {
    const [state, setState] = useState(false);
    const faq = () => {};

    return (
        <div>
            <h1>FAQ</h1>
            <div className="container">
                <h2>Why is React great?</h2>
                <button onClick={() => setState((state) => !state)}>+</button>
            </div>
            <div className="output">
                <h2>{state ? "I don't know" : ""} </h2>
            </div>
        </div>
    );
};

export default Section;
