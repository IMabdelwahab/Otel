import { CheckCircle, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RecentBookings(){
  const bookings = [
    {guest: 'Eleanor Shellstrop', room: '402 (Suite)', dates: 'Oct 24 - Oct 27', status: 'Check-in', amount: '$1,250'},
    {guest: 'Chidi Anagonye', room: '215 (Standard)', dates: 'Oct 22 - Oct 24', status: 'Check-out', amount: '$450'},
    {guest: 'Tahani Al-Jamil', room: 'PH1 (Penthouse)', dates: 'Oct 24 - Nov 01', status: 'Pending', amount: '$8,500'},
    {guest: 'Jason Mendoza', room: '101 (Standard)', dates: 'Oct 20 - Oct 25', status: 'In House', amount: '$950'},
  ]

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Recent Bookings</div>
        <Link to="/bookings" className="text-sm text-amber-600 hover:underline">View All →</Link>
      </div>

      <div className="space-y-3">
        {bookings.map((b,idx)=> (
          <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-100 to-amber-200 flex items-center justify-center text-sm font-medium text-amber-700">{b.guest.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
              <div>
                <div className="font-medium">{b.guest}</div>
                <div className="text-sm text-gray-500">{b.room} • {b.dates}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm">
                {b.status === 'Check-in' && <span className="inline-flex items-center text-amber-700"><ArrowRight size={14} className="mr-1"/> {b.status}</span>}
                {b.status === 'Check-out' && <span className="inline-flex items-center text-gray-500"><CheckCircle size={14} className="mr-1"/> {b.status}</span>}
                {b.status === 'Pending' && <span className="inline-flex items-center text-blue-600"><Clock size={14} className="mr-1"/> {b.status}</span>}
                {b.status === 'In House' && <span className="inline-flex items-center text-emerald-600"><CheckCircle size={14} className="mr-1"/> {b.status}</span>}
              </div>
              <div className="font-semibold">{b.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
