"use client"

import React, { useState } from "react"

type TableData = {
  rowHeaders: string[];
  colHeaders: string[];
  data: string[][];
};

type TableProps = {
  table: string | TableData; // accept string or already parsed object
};

const ProductTableModal: React.FC<TableProps> = ({ table }) => {
  const [showModal, setShowModal] = useState(false);

  if (!table) return <p>No table data available.</p>;

  let tableObj: TableData;
  try {
    tableObj = typeof table === "string" ? JSON.parse(table) : table;
  } catch (error) {
    console.error("Failed to parse table JSON:", error);
    return <p>No table data available.</p>;
  }

  if (!tableObj.rowHeaders || !tableObj.colHeaders) {
    return <p>No table data available.</p>;
  }

  return (
    <>
      <h2
        onClick={() => setShowModal(true)}
        className="text-black underline cursor-pointer"
      >
        Size Chart
      </h2>
      
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)} // click outside closes modal
        >
          <div
            className="flex flex-col items-center bg-white p-6 rounded shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-xl font-bold mb-4">Size Chart</h2>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-2 py-1"></th>
                    {tableObj.colHeaders.map((header, i) => (
                      <th key={i} className="border px-2 py-1 text-left">
                        {header || ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableObj.rowHeaders.map((rowHeader, rowIndex) => (
                    <tr key={rowIndex}>
                      <th className="border px-2 py-1 bg-gray-50">{rowHeader || ""}</th>
                      {tableObj.data[rowIndex]?.map((cell, colIndex) => (
                        <td key={colIndex} className="border px-2 py-1">
                          {cell || ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 border border-black text-black px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductTableModal
