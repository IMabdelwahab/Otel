import { Tag, Wrench, DollarSign } from 'lucide-react'

export default function RoomCard({room}){
  // room: {number, title, price, status, capacity, image}
  const statusColors = {
    'Available':'bg-emerald-100 text-emerald-700',
    'Occupied':'bg-rose-100 text-rose-700',
    'Maintenance':'bg-gray-100 text-gray-700',
    'Reserved':'bg-amber-100 text-amber-700'
  }

  return (
    <div className="bg-white rounded-lg  p-4 border border-gray-200 shadow-md">
      <div className="h-40 bg-gray-100 rounded-md overflow-hidden mb-3 flex items-center justify-center text-gray-400">
        <img className='size-full'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfP1TW9H4cvEuVoZJGcwvhsKXs-G8uTM9Jg&s" alt="" />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-lg font-semibold">Room {room.number} <span className="text-sm text-gray-500">{room.title}</span></div>
          <div className="text-sm text-gray-500 mt-1">{room.capacity} • {room.floor ? `Floor ${room.floor}` : ''}</div>
        </div>
        <div className="text-right">
          <div className={`inline-flex items-center px-2 py-1 rounded-md text-sm font-medium ${statusColors[room.status] || 'bg-gray-100 text-gray-700'}`}>{room.status}</div>
          <div className="text-sm text-gray-500 mt-1 flex items-center justify-end"><DollarSign size={14} className="mr-1"/>{room.price}</div>
        </div>
      </div>

      <div className="mt-3 items-center justify-center space-x-3">
        <div className="text-sm text-gray-400 flex items-center space-x-3">
          <div className="inline-flex items-center"><Tag size={14} className="mr-1"/> {room.roomType || 'Standard'}</div>
          <div className="inline-flex items-center"><Wrench size={14} className="mr-1"/> Details</div>
        </div>
        <button className="bg-amber-500 text-white px-3 py-2 my-2 rounded-md w-full hover:bg-amber-600">{room.status === 'Available' ? 'Reserve Room' : 'Manage Booking'}</button>
      </div>
    </div>
  )
}
