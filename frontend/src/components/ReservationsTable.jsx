import { MoreHorizontal } from 'lucide-react'

export default function ReservationsTable({reservations = [], onConfirm, onCheckIn, onCancel, onCheckOut, onEdit}){
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Guest</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Dates</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Room Type</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Amount</th>
            <th className="px-6 py-3 text-center text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {reservations.map((r,idx)=> (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">#{r.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{r.guestName}</div>
                <div className="text-sm text-gray-500">{r.guestType}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{r.dates}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{r.roomType}{r.roomNumber ? ` • ${r.roomNumber}`: ''}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${r.status === 'Confirmed' ? 'bg-amber-100 text-amber-700' : r.status === 'Checked In' ? 'bg-emerald-100 text-emerald-700' : r.status === 'Pending' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'}`}>{r.status}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-800">{r.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                <div className="flex items-center justify-center space-x-2">
                  {r.status === 'Pending' && (
                    <>
                      <button onClick={()=> onConfirm?.(r.id)} className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded">Confirm</button>
                      <button onClick={()=> onCancel?.(r.id)} className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded">Cancel</button>
                      <button onClick={()=> onEdit?.(r.id)} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Edit</button>
                    </>
                  )}

                  {r.status === 'Confirmed' && (
                    <>
                      <button onClick={()=> onCheckIn?.(r.id)} className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded">Check-in</button>
                      <button onClick={()=> onCancel?.(r.id)} className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded">Cancel</button>
                      <button onClick={()=> onEdit?.(r.id)} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Edit</button>
                    </>
                  )}

                  {r.status === 'Checked In' && (
                    <>
                      <button onClick={()=> onCheckOut?.(r.id)} className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded">Check-out</button>
                      <button onClick={()=> onEdit?.(r.id)} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Edit</button>
                    </>
                  )}

                  {r.status === 'Checked Out' && (
                    <>
                      <button onClick={()=> onEdit?.(r.id)} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Edit</button>
                    </>
                  )}

                  {r.status === 'Cancelled' && (
                    <>
                      <button onClick={()=> onEdit?.(r.id)} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Edit</button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
