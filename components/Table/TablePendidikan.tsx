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
        TIDAK / BELUM SEKOLAH
        </th>
        
        <td className="px-6 py-4">
          1922
        </td>
        <td className="px-6 py-4">
        31.68%
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        BELUM TAMAT SD
        </th>
        
        <td className="px-6 py-4">
          588
        </td>
        <td className="px-6 py-4">
        9.68%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        TAMAT SD
        </th>
        
        <td className="px-6 py-4">
          2103
        </td>
        <td className="px-6 py-4">
        34.63%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        SLTP
        </th>
        
        <td className="px-6 py-4">
          841
        </td>
        <td className="px-6 py-4">
        13.86%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        SLTA
        </th>
       
        <td className="px-6 py-4">
          559
        </td>
        <td className="px-6 py-4">
        9.21%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        D1 dan D2
        </th>
       
        <td className="px-6 py-4">
          15
        </td>
        <td className="px-6 py-4">
        0.25%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        S1
        </th>
        
        <td className="px-6 py-4">
          37
        </td>
        <td className="px-6 py-4">
        0.61%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        S2
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
        S3
        </th>
        
        <td className="px-6 py-4">
          0
        </td>
        <td className="px-6 py-4">
        0%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
        TOTAL
        </th>
        
        <td className="px-6 py-4">
          6066
        </td>
        <td className="px-6 py-4">
          100%
        </td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Table;


