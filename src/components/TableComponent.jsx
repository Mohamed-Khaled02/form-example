import React from "react";
import axios from "axios";

function TableComponent({ data, onDelete }) {
    const handleDelete = (key) => {
        axios
          .post(`https://motazradwan.com/api/collections/delete/${key}`)
          .then(() => {
            onDelete(key); 
          })
          .catch((error) => {
            console.error(error);
          });
      };
      

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-3 px-4 font-semibold text-left">Name</th>
          <th className="py-3 px-4 font-semibold text-left">Description</th>
          <th className="py-3 px-4 font-semibold text-left">Stage</th>
          <th className="py-3 px-4 font-semibold text-left">Created At</th>
          <th className="py-3 px-4 font-semibold text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.key} className="border-t hover:bg-gray-50">
            <td className="py-4 px-6">{item.name?.slice(0, 255)}</td>
            <td className="py-4 px-6">{item.description?.slice(0, 255)}</td>
            <td className="py-4 px-6">{item.stage}</td>
            <td className="py-4 px-6">{item.created_at}</td>
            <td className="py-4 px-6"></td>
            <td className="py-4 px-6">
              <button
                onClick={() => handleDelete(item.key)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
