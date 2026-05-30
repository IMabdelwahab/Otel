import { useEffect, useMemo, useState } from 'react'
import NavBar from '../components/NavBar'
import { Plus } from 'lucide-react'
import ReservationsFilter from '../components/ReservationsFilter'
import ReservationsTable from '../components/ReservationsTable'
import ReservationsForm from '../components/ReservationsForm'
import StatsPanel from '../components/StatsPanel'

function Reservations(){
  const [filters, setFilters] = useState({search:'', status:'All', type:'All'})

  useEffect(()=>{
    document.title = 'Bookings | Ôtel'
  },[])

  const [reservations, setReservations] = useState([
    {id: 8042, guestName: 'Alexander Smith', guestType: 'VIP Guest', dates: 'Oct 24 - Oct 28', roomType: 'Executive Suite', roomNumber: '402', status: 'Confirmed', amount: '$1,450.00'},
    {id: 8041, guestName: 'Elena Jenkins', guestType: 'Corporate', dates: 'Oct 23 - Oct 25', roomType: 'Deluxe Double', roomNumber: '214', status: 'Checked In', amount: '$520.00'},
    {id: 8039, guestName: 'Marcus Reed', guestType: 'Expedia', dates: 'Oct 26 - Oct 30', roomType: 'Standard King', roomNumber: 'Unassigned', status: 'Pending', amount: '$890.00'},
    {id: 8035, guestName: 'Chloe Lee', guestType: 'Direct', dates: 'Oct 24 - Oct 25', roomType: 'Standard King', roomNumber: '', status: 'Cancelled', amount: '$0.00'},
  ])

  const [showForm, setShowForm] = useState(false)

  const handleCheckIn = (id) => {
    setReservations(prev => prev.map(r => r.id === id ? {...r, status: 'Checked In'} : r))
  }

  const handleConfirm = (id) => {
    setReservations(prev => prev.map(r => r.id === id ? {...r, status: 'Confirmed'} : r))
  }

  const handleCheckOut = (id) => {
    setReservations(prev => prev.map(r => r.id === id ? {...r, status: 'Checked Out'} : r))
  }

  const handleCancel = (id) => {
    if (!confirm('Cancel this booking?')) return
    setReservations(prev => prev.map(r => r.id === id ? {...r, status: 'Cancelled'} : r))
  }

  const handleEdit = (id) => {
    const current = reservations.find(r=> r.id === id)
    if (!current) return
    const newName = prompt('Edit guest name', current.guestName)
    if (newName !== null && newName.trim() !== ''){
      setReservations(prev => prev.map(r => r.id === id ? {...r, guestName: newName} : r))
    }
  }

  const handleAdd = (data) => {
    const nextId = reservations.length ? Math.max(...reservations.map(r=>r.id)) + 1 : 8000
    const newBooking = { id: nextId, ...data }
    setReservations(prev => [newBooking, ...prev])
    setShowForm(false)
  }

  const filtered = useMemo(()=> reservations.filter(r=>{
    if (filters.status !== 'All' && r.status !== filters.status) return false
    if (filters.type !== 'All' && r.roomType && !r.roomType.includes(filters.type)) return false
    if (filters.search){
      const s = filters.search.toLowerCase()
      return String(r.id).includes(s) || r.guestName.toLowerCase().includes(s) || (r.roomNumber||'').toLowerCase().includes(s)
    }
    return true
  }),[reservations, filters])

  return (
    <div className="min-h-screen">
      <div className="flex">
        <NavBar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Bookings</h1>
                <p className="text-gray-500">Manage incoming arrivals, in-house guests, and departures.</p>
              </div>
              <div className="">
                <button onClick={() => setShowForm(s=>!s)} className="bg-amber-600 text-white px-4 py-2 rounded flex items-center">
                  <Plus size={16} className="mr-2" />
                  New Booking
                </button>
              </div>
            </div>
            <ReservationsFilter filters={filters} setFilters={setFilters} />

            {showForm && (
              <div className="fixed inset-0 z-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowForm(false)} />
                <div className="relative z-50 w-full max-w-3xl mx-4">
                  <div className="bg-white rounded-xl shadow-xl p-6">
                    <h2 className="text-xl font-semibold mb-4">New Booking</h2>
                    <ReservationsForm onSubmit={handleAdd} onCancel={() => setShowForm(false)} />
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <ReservationsTable reservations={filtered} onConfirm={handleConfirm} onCheckIn={handleCheckIn} onCancel={handleCancel} onCheckOut={handleCheckOut} onEdit={handleEdit} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Reservations
