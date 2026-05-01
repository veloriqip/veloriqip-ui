"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { statsData } from "@/data/stats";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function StatsBarChart() {
  const data = {
    labels: statsData.map((s) => s.label),
    datasets: [
      {
        label: "Company Metrics",
        data: statsData.map((s) => s.value),
        backgroundColor: "#2b4e37", // brand green
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
      },
    },
  };

  return (
    <div className="h-[350px]">
      <Bar data={data} options={options} />
    </div>
  );
}
