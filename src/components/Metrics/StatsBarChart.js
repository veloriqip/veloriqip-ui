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
        backgroundColor: ["#003049", "#1d5a73", "#b59b5a", "#2b4e37", "#ceb87a"],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#f8fafc",
        bodyColor: "#e2e8f0",
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#475569",
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: "#64748b",
        },
        grid: {
          color: "rgba(148, 163, 184, 0.18)",
        },
        border: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
