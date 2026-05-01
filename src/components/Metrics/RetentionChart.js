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
        backgroundColor: ["#2b4e37", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="h-[280px]">
      <Doughnut data={data} />
    </div>
  );
}
