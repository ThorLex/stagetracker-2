
import React from "react";
import { Doughnut,Line } from 'react-chartjs-2';








import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";

import { Data } from "./data.js";
import PieChart from "../components/PieChart.js";
Chart.register(CategoryScale);
 
export  function BarChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
  
     <PieChart chartData={chartData}  />

  );
}


export  function CircleChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
  
     <PieChart chartData={chartData} />

  );
}



export  function SalesValueChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
     
        options:{maintainAspectRatio:false} ,
        width:50,
         height:50,
     
      
      }
    ]
  });
 
  return (
  
     <PieChart chartData={chartData} options={{maintainAspectRatio:false}} width={50} height={50} />

  );
}




 
