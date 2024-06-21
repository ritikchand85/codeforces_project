import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './styles.css';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartComponent = (props) => {
  // Ensure props.data is available
  if (!props.data) {
    return <div>Loading...</div>; // Or any other placeholder while data is not available
  }

  const data = {
    labels:props.label,
    datasets: [
      {
        label: '# of Votes',
        data: props.data,
        backgroundColor: [
          'rgba(184, 134, 11, 1)',
          'rgba(0, 100, 0, 1)',
          'rgba(255, 140, 0, 1)',
          'rgba(139, 0, 0, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
   
    plugins: {
      title:{
        display:true,
        text:props.text,
     
     
      position:'top',
        font:{
          size:16,
          weight:'bold',
        }
  
      },
      legend: {
        display:true,
        position:props.position,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        color: 'black',
        align: 'start',
        anchor: props.anchor,
        font: {
          weight: 'bold',
          size:props.size,
        },
        formatter: (value, context) => {
          
          return context.chart.data.labels[context.dataIndex];
         
        },
        display: function(context) {
          return context.chart.data.datasets[0].data[context.dataIndex] > 10; // Example threshold, adjust as needed
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // This allows the chart to take up the height of the container
  };

  return (
    <div className="pie">
      <div
        style={{
        
        }}
        className="chart-container"
      >
        <Pie data={data} options={options} />
      </div>
      <style jsx>{`
       
        .chart-container canvas {
          height: 100% !important; 
          width: 100% !important;
        }
        .chart-container:hover {
          transform: scale(1.1); /* Scale up the chart on hover */
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5); /* Enhance the shadow on hover */
        }
      `}</style>
    </div>
  );
};

export default PieChartComponent;
