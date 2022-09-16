import React from "react";
import { useState } from "react";
import "./table.css";
import Tablebox from "./Tablebox";
const Table = () => {
    const [infos, setInfos] = useState([
        {
            id: 1,
            day: "MON 23 JAN",
            inr: "INR 1800",
            max: "INR 1800",
            min: "INR 1950",
        },
        {
            id: 2,
            day: "MON 24 JAN",
            inr: "INR 1800",
            max: "INR 1800",
            min: "INR 1950",
        },
        {
            id: 3,
            day: "MON 25 JAN",
            inr: "INR 1950",
            max: "INR 1950",
            min: "INR 2000",
        },
        {
            id: 4,
            day: "MON 26 JAN",
            inr: "INR 1800",
            max: "INR 1800",
            min: "INR 1950",
        },
        {
            id: 5,
            day: "MON 27 JAN",
            inr: "INR 1800",
            max: "INR 1800",
            min: "INR 1950",
        },
        {
            id: 6,
            day: "MON 28 JAN",
            inr: "INR 1800",
            max: "INR 1800",
            min: "INR 1950",
        },
        {
            id: 7,
            day: "MON 29 JAN",
            inr: "INR 1800",
            max: "INR 1800",
            min: "INR 1950",
        },
    ]);
   

    return (
        <div className="tableset">
            {infos.map((info) => {
                return <Tablebox key={info.id} {...info}></Tablebox>;
            })}
        </div>
    );
};

export default Table;
