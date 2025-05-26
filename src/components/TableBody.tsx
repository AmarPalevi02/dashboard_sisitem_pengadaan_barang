import { Edit, Trash2 } from "lucide-react";

interface TableBodyProps<T> {
   data: T[];
   renderRow: (item: T, index: number) => React.ReactNode;
   handleEdit: (id: string | number) => void;
   handleDelete: (id: string | number) => void;
}

const TableBody = <T extends { id: string | number }>({
   data,
   renderRow,
   handleDelete,
   handleEdit
}: TableBodyProps<T>) => {
   return (
      <tbody>
         {data.map((item, index) => (
            <tr
               key={item.id}
               className="bg-white border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
            >
               {renderRow(item, index)}
               <td className="px-6 py-4 flex space-x-3">
                  <button
                     onClick={() => handleEdit(item.id)}
                     className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform hover:scale-105"
                     title="Edit user"
                  >
                     <Edit className="w-4 h-4 mr-1" />
                     Edit
                  </button>
                  <button
                     onClick={() => handleDelete(item.id)}
                     className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition transform hover:scale-105"
                     title="Delete user"
                  >
                     <Trash2 className="w-4 h-4 mr-1" />
                     Hapus
                  </button>
               </td>
            </tr>
         ))}
      </tbody>
   )
}

export default TableBody