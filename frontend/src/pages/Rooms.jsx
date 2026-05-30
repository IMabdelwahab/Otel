import { useEffect, useState, useMemo } from 'react'
import NavBar from '../components/NavBar'
import RoomsOverview from '../components/RoomsOverview'
import RoomsGrid from '../components/RoomsGrid'
import StatsPanel from '../components/StatsPanel'
import RoomsFilter from '../components/RoomsFilter'

function Rooms(){
  const [filters, setFilters] = useState({search: '', status: 'All', type: 'All'})

  useEffect(()=>{
    document.title = 'Rooms | Ôtel'
  },[])

  const rooms = useMemo(()=>[
    {number: 402, title: 'Executive King Suite', price: '350', status: 'Available', capacity: '2 guests', floor: 4, roomType: 'Suite'},
    {number: 315, title: 'Standard Double', price: '180', status: 'Occupied', capacity: '2 guests', floor: 3, roomType: 'Standard'},
    {number: 'PH1', title: 'Presidential Suite', price: '1,200', status: 'Available', capacity: '4 guests', floor: 'Top', roomType: 'Presidential'},
    {number: 205, title: 'Standard Single', price: '90', status: 'Maintenance', capacity: '1 guest', floor: 2, roomType: 'Standard'},
    {number: 410, title: 'Deluxe Double', price: '220', status: 'Reserved', capacity: '2 guests', floor: 4, roomType: 'Deluxe'},
    {number: 211, title: 'Standard Twin', price: '150', status: 'Available', capacity: '2 guests', floor: 2, roomType: 'Standard'},
  ],[])

  const filteredRooms = useMemo(()=>{
    return rooms.filter(r => {
      if (filters.status !== 'All' && r.status !== filters.status) return false
      if (filters.type !== 'All' && r.roomType && r.roomType !== filters.type) return false
      if (filters.search){
        const s = filters.search.toString().toLowerCase()
        const inNumber = String(r.number).toLowerCase().includes(s)
        const inTitle = (r.title || '').toLowerCase().includes(s)
        return inNumber || inTitle
      }
      return true
    })
  },[rooms, filters])

  return (
    <div className="min-h-screen">
      <div className="flex">
        <NavBar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Room Inventory</h1>
              <p className="text-gray-500">Manage availability and current statuses across all floors.</p>
            </div>

            <div className="mb-6">
              <RoomsOverview />
            </div>

            <RoomsFilter filters={filters} setFilters={setFilters} />

            <RoomsGrid rooms={filteredRooms} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Rooms
