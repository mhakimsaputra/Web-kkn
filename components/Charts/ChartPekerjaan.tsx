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

const ChartPekerjaan = () => {
  return (
    <div >
      <Pie
        data={{
          labels: ['BELUM/TIDAK BEKERJA', 'APARATUR PEJABAT NEGARA', 'TENAGA PENGAJAR', 'WIRASWASTA', 'PERTANIAN DAN PETERNAKAN','NELAYAN', 'AGAMA DAN KEPERCAYAAN', 'PELAJAR/MAHASISWA', 'TENAGA KESEHATAN','PENSIUNAN','PEKERJAAN LAINNYA'],
          datasets: [
            {
              label: 'Jumlah populasi',
              data: [2267, 23, 19, 1399, 367, 4,1,560,2,6,1439],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 0, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(128, 128, 128, 0.2)',
                'rgba(255, 255, 0, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(128, 128, 128, 1)',
                'rgba(255, 255, 0, 1)'
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
export default ChartPekerjaan;
