import React, { useRef } from "react";

export default function App() {
    const myRef = useRef(); // Reference for the input element
    const val = useRef(); // Reference for the p element

    const handleClick = () => {
        // Set the text content of the p element to the value of the input element
        if (myRef.current && val.current) {
            val.current.textContent = myRef.current.value;
        }
    };

    return (
        <div style={{ textAlign: "center", margin: "auto" }}>
            <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
            <h3>Accessing DOM using functional component</h3>
            <input ref={myRef} />
            <p ref={val}></p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
