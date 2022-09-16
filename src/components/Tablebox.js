import React from "react";
import { useState } from "react";

function Tablebox({ day, max, inr }) {
    const [show, setShow] = useState(false);
    return (
        <div
            className="rounded"
            style={{ border: "1px solid gray", textAlign: "center" }}
            onClick={() => setShow(!show)}
        >
            <h6>{day}</h6>
            <p style={{ color: "red" }}>{inr}</p>
            {show ? <p>Max:{max}</p> : ""}
        </div>
    );
}

export default Tablebox;
