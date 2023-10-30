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

const ChartWargaNegara = () => {
  return (
    <div >
      <Pie
        data={{
          labels: ['USIA 0-4 THN', 'USIA 5-9 THN','USIA 10-14 THN','USIA 15-19 THN', 'USIA 20-24 THN', 'USIA 25-29 THN','USIA 30-34 THN','USIA 35-39 THN','USIA 40-44 THN','USIA 45-49 THN','USIA 50-54 THN','USIA 55-59 THN','USIA 60-64 THN','USIA 65-69 THN','USIA 70-74 THN','USIA 75 THN KEATAS'],
          datasets: [
            {
              label: 'Jumlah populasi',
              data: [470, 574, 513, 525, 561, 574, 540, 514, 391, 315, 315, 238, 221, 150, 89, 97],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(200, 100, 150, 0.2)',
                'rgba(50, 150, 200, 0.2)',
                'rgba(100, 200, 100, 0.2)',
                'rgba(180, 100, 80, 0.2)',
                'rgba(70, 120, 180, 0.2)',
                'rgba(120, 80, 160, 0.2)',
                'rgba(220, 160, 40, 0.2)',
                'rgba(40, 180, 120, 0.2)',
                'rgba(160, 40, 100, 0.2)',
                'rgba(90, 160, 80, 0.2)'


              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(200, 100, 150, 1)',
                'rgba(50, 150, 200, 1)',
                'rgba(100, 200, 100, 1)',
                'rgba(180, 100, 80, 1)',
                'rgba(70, 120, 180, 1)',
                'rgba(120, 80, 160, 1)',
                'rgba(220, 160, 40, 1)',
                'rgba(40, 180, 120, 1)',
                'rgba(160, 40, 100, 1)',
                'rgba(90, 160, 80, 1)'
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
export default ChartWargaNegara;
