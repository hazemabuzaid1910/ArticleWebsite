import {  FaEye, FaEdit, FaTrash } from 'react-icons/fa';

function DataTable({ data, columns, onEdit, onDelete, onView }) {
  return (
    <div className="overflow-hidden border border-gray-300 rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-4 font-medium text-left text-[var(--primary-color)]">
                  {col.header}
                </th>
              ))}
              <th className="px-6 py-4 font-medium text-left ">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-200 hover:bg-opacity-50">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 text-[var(--primary-color)]">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onView && onView(row)}
                      className="p-2 text-blue-400 rounded hover:bg-blue-400 hover:bg-opacity-20"
                    >
                      <FaEye size={16} />
                    </button>
                    <button
                      onClick={() => onEdit && onEdit(row)}
                      className="p-2 text-green-400 rounded hover:bg-green-400 hover:bg-opacity-20"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button
                      onClick={() => onDelete && onDelete(row)}
                      className="p-2 text-red-400 rounded hover:bg-red-400 hover:bg-opacity-20"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DataTable