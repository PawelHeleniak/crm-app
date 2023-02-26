import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart() {
  const labels = ["Styczeń", "Luty", "Marzec"];

  const data = {
    labels,
    datasets: [
      {
        label: "Leady",
        data: [10, 22, 0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Projekty",
        data: [3, 6, 0],
        borderColor: "rgb(24, 29, 242)",
        backgroundColor: "rgba(24, 29, 242, 0.5)",
      },
      {
        label: "Zadania",
        data: [47, 103, 0],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Statystyki na rok 2023",
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <Line options={options} data={data} />
    </div>
  );
}
