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

const ChartJenisKelamin = () => {
  return (
    <div >
      <Pie
        data={{
          labels: ['LAKI-LAKI', 'PEREMPUAN'],
          datasets: [
            {
              label: 'Jumlah populasi',
              data: [3133, 2954],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgb(255, 99, 132, 0.2)',
               

              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                
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
export default ChartJenisKelamin;
