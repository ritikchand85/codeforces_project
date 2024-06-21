// BarGraphComponent.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the components and the datalabels plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);



const BarGraph = (props) => {
  const data = {
    labels:props.labels,
    datasets: [
      {
        
        data:props.data,
        backgroundColor: [
          'rgba(44, 130, 201, 1)',
          'rgba(103, 58, 183, 1)',
          'rgba(0, 150, 136, 1)',
          'rgba(255, 87, 34, 1)',
          'rgba(233, 30, 99, 1)',
          'rgba(255, 193, 7, 1)',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        //borderWidth: 5,
        //hoverOffset:10,
        //hoverBorderWidth:10,
      },
    ],
  };

  const options = {
    indexAxis: 'x',
   
    scales: {
      x: {
      
        font:{
          size:5,
        },
        beginAtZero: true,

      },
    },
    plugins: {
      legend: {
        display:false,
       
      },
      title: {
        display: true,
        text: 'Problems Tags',
        position:'top',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
   datalabels:{
    display:false,
   },
    
    },
  };

  return (
   <>
     <div className="x" style={{height:'100%',width:'100%',}}>
      <Bar data={data} options={options}></Bar>
      </div>


    

      <style jsx>
        {
          `
          .x canvas{
           height: 100% !important; 
           width:100% !important;
          }
          `
        }
      </style>

      </>
    
  );
};

export default BarGraph;
