import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";
const Chart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.day),

        datasets: [
            {
                label: "Profit Gained",
                data: UserData.map((data) => data.userGrain),
                backgroundColor: "green",
            },
            {
                label: "Loss Gained",
                data: UserData.map((data) => data.userLost),
                backgroundColor: "red",
                borderColor: "black",
            },
        ],
    });
    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Bar data={userData} />
        </div>
    );
};

export default Chart;
