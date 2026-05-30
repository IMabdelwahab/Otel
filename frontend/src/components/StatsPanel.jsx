import { Calendar, PieChart } from 'lucide-react'
import React, { useState } from 'react';

export default function StatsPanel(){
    const [currentDate, setCurrentDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 font-medium text-gray-800"><Calendar size={16} className="text-amber-600"/><span>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</span></div>
          {/* <div className="text-sm text-gray-400">◀ ▶</div> */}
        </div>
        <div className="mt-4 text-center text-3xl font-semibold text-amber-600">{currentDate.getDate()}</div>
     </div>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 font-medium text-gray-800"><PieChart size={16} className="text-amber-600"/><span>Room Occupancy</span></div>
          {/* <div className="text-sm text-gray-500"></div> */}
        </div>
        <div className="mt-3 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-linear-to-br from-amber-50 to-amber-100 flex items-center justify-center text-2xl font-bold text-amber-700">72%</div>
        </div>
      </div>
    </div>
  )
}
