import React from "react";

import { Line } from "react-chartjs-2";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart(props) {
  console.log(props.labels);
  console.log(props.data);
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.handle,
        data:props.data,
        fill:true,
        backgroundColor: 'black',
        borderColor:'blue',
      },
     
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      title:{
        display:true,
        text:'Rating Change Curve',
        position:'top',
        font:{
         size:'18',
         weight:'bold',
        },
      },
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
      datalabels:{
        display:false,
      },
    },
  };

  return (
    <>
   <div className="y" style={{height:'100%',width:'100%',}}>
  <Line options={options} data={data}></Line>
  </div>

   <style jsx>{`
        .y canvas{
          height: 100% !important;
          width: 100% !important;
        }
      `}</style> 

      </>


  
);
}

export default LineChart;
