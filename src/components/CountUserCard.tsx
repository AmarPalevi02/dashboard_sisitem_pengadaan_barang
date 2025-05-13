import React from 'react'

type PropsCardData = {
   title: string;
   count: number | null;
   icon: string;
   bgColor: string;
}

const CountUserCard = ({ title, count, icon, bgColor }: PropsCardData) => {
   // const cards: CardData[] = [
   //    {
   //       title: 'Employees',
   //       count: 150,
   //       icon: '👥',
   //       bgColor: 'bg-blue-100',
   //    },
   //    {
   //       title: 'Managers',
   //       count: 25,
   //       icon: '👤',
   //       bgColor: 'bg-green-100',
   //    },
   //    {
   //       title: 'Procurements',
   //       count: 78,
   //       icon: '📦',
   //       bgColor: 'bg-yellow-100',
   //    },
   //    {
   //       title: 'Vendors',
   //       count: 42,
   //       icon: '🏬',
   //       bgColor: 'bg-red-100',
   //    },
   // ];
   return (
      <div
         className={`${bgColor} rounded-xl shadow-lg p-6 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-200`}
      >
         <div className="text-3xl">{icon}</div>
         <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{count}</p>
         </div>
      </div>

   )
}

export default CountUserCard