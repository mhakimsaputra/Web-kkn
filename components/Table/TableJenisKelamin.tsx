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
        LAKI-LAKI
        </th>
        
        <td className="px-6 py-4">
          3133
        </td>
        <td className="px-6 py-4">
        51.44%
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        PEREMPUAN
        </th>
        
        <td className="px-6 py-4">
          2954
        </td>
        <td className="px-6 py-4">
        48.56%

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


