import React from "react";
import { Line } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>
      Diagramme de progression</h2>
      <Line
        data={chartData}
        
        options={{
          plugins: {
            title: {
              display: true,
              text: "progression des utilisateurs"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;