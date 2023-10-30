"use client";
import React from "react";

const Table = () => {
    return (
        <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Kelompok
        </th>
        
        <th scope="col" className="px-6 py-3">
          Populasi
        </th>
        <th scope="col" className="px-6 py-3">
          Persentase
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        BELUM/TIDAK BEKERJA
        </th>
        
        <td className="px-6 py-4">
          2267
        </td>
        <td className="px-6 py-4">
        37.22%
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        APARATUR PEJABAT NEGARA
        </th>
        
        <td className="px-6 py-4">
          23
        </td>
        <td className="px-6 py-4">
        0.38%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        TENAGA PENGAJAR
        </th>
        
        <td className="px-6 py-4">
          19
        </td>
        <td className="px-6 py-4">
        0.31%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        WIRASWASTA
        </th>
        
        <td className="px-6 py-4">
          1399
        </td>
        <td className="px-6 py-4">
        22.97%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        PERTANIAN DAN PETERNAKAN
        </th>
       
        <td className="px-6 py-4">
          367
        </td>
        <td className="px-6 py-4">
        6.03%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        NELAYAN
        </th>
       
        <td className="px-6 py-4">
          4
        </td>
        <td className="px-6 py-4">
        0.07%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        AGAMA DAN KEPERCAYAAN
        </th>
        
        <td className="px-6 py-4">
          1
        </td>
        <td className="px-6 py-4">
        0.02%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        PELAJAR/MAHASISWA
        </th>
        
        <td className="px-6 py-4">
          560
        </td>
        <td className="px-6 py-4">
        9.20%

        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        TENAGA KESEHATAN
        </th>
        
        <td className="px-6 py-4">
          2
        </td>
        <td className="px-6 py-4">
        0.03%

        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        PENSIUNAN
        </th>
        
        <td className="px-6 py-4">
          6
        </td>
        <td className="px-6 py-4">
        0.10%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        PEKERJAAN LAINNYA
        </th>
        
        <td className="px-6 py-4">
          1439
        </td>
        <td className="px-6 py-4">
        23.67%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
        TOTAL
        </th>
        
        <td className="px-6 py-4 font-bold text-black">
          6087
        </td>
        <td className="px-6 py-4 font-bold text-black">
          100%
        </td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Table;


