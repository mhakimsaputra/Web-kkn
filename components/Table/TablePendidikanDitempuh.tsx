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
        USIA SEKOLAH 3-4 THN
        </th>
        
        <td className="px-6 py-4">
          225
        </td>
        <td className="px-6 py-4">
        10.36%
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        USIA SEKOLAH 5 THN
        </th>
        
        <td className="px-6 py-4">
          116
        </td>
        <td className="px-6 py-4">
        5.34%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        USIA SEKOLAH 6-11 THN
        </th>
        
        <td className="px-6 py-4">
          675
        </td>
        <td className="px-6 py-4">
        31.08%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        USIA SEKOLAH 12-14 THN
        </th>
        
        <td className="px-6 py-4">
          296
        </td>
        <td className="px-6 py-4">
        13.63%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        USIA SEKOLAH 15-17 THN
        </th>
       
        <td className="px-6 py-4">
          325
        </td>
        <td className="px-6 py-4">
        14.97%
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        USIA SEKOLAH 18-22 THN
        </th>
       
        <td className="px-6 py-4">
          535
        </td>
        <td className="px-6 py-4">
        24.62%

        </td>
      </tr>
     
      <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
        TOTAL
        </th>
        
        <td className="px-6 py-4">
          2172
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


