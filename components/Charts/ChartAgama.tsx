"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from 'react-chartjs-2';

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ArcElement,
  Legend
);

const ChartAgama = () => {
  return (
    <div >
      <Pie
        data={{
          labels: ['ISLAM', 'KRISTEN', 'KATHOLIK', 'HINDU', 'BUDHA','KHONGHUCU'],
          datasets: [
            {
              label: 'Jumlah populasi',
              data: [4875, 113, 38, 2 , 1055, 4],
              backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
        }}
        width={500} // set the width of the chart
        height={500} // set the height of the chart
      />
    </div>
  );
};
export default ChartAgama;
