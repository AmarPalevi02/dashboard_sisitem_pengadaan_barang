type tableHeaderProps = {
   columns: string[]
}

const TableHeader = ({ columns }: tableHeaderProps) => {
   return (
      <thead className='text-xs uppercase bg-gray-50 text-gray-700'>
         <tr>
            {columns.map((column, i) => (
               <th
                  key={i}
                  scope='col'
                  className='px-6 py-4 font-semibold'
               >
                  {column}
               </th>
            ))}
         </tr>
      </thead>
   )
}

export default TableHeader