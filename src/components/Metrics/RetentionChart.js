"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function RetentionChart() {
  const data = {
    labels: ["Retained Clients", "Churn"],
    datasets: [
      {
        data: [96, 4],
        backgroundColor: ["#003049", "#e2e8f0"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "72%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#475569",
          boxWidth: 12,
          padding: 18,
        },
      },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#f8fafc",
        bodyColor: "#e2e8f0",
        padding: 12,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
