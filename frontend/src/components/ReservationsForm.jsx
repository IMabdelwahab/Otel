import { useState } from 'react'

export default function ReservationsForm({onSubmit, onCancel}){
  const [form, setForm] = useState({
    guestName: '',
    guestType: '',
    roomType: '',
    roomNumber: '',
    startDate: '',
    endDate: '',
    amount: '',
    status: 'Pending'
  })

  const handleChange = (k) => (e) => setForm(f=>({...f, [k]: e.target.value}))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.guestName || !form.roomType){
      alert('Please provide guest name and room type')
      return
    }
    const dates = form.startDate && form.endDate ? `${form.startDate} - ${form.endDate}` : (form.startDate || form.endDate || '')
    onSubmit({
      guestName: form.guestName,
      guestType: form.guestType,
      dates,
      roomType: form.roomType,
      roomNumber: form.roomNumber,
      amount: form.amount || '$0.00',
      status: form.status
    })
    // reset
    setForm({guestName:'', guestType:'', roomType:'', roomNumber:'', startDate:'', endDate:'', amount:'', status:'Pending'})
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input className="p-2 border rounded" placeholder="Guest name" value={form.guestName} onChange={handleChange('guestName')} />
        <input className="p-2 border rounded" placeholder="Guest type (e.g. VIP, Corporate)" value={form.guestType} onChange={handleChange('guestType')} />
        <input className="p-2 border rounded" placeholder="Room type" value={form.roomType} onChange={handleChange('roomType')} />
        <input className="p-2 border rounded" placeholder="Room number (optional)" value={form.roomNumber} onChange={handleChange('roomNumber')} />
        <input className="p-2 border rounded" type="date" placeholder="Start date" value={form.startDate} onChange={handleChange('startDate')} />
        <input className="p-2 border rounded" type="date" placeholder="End date" value={form.endDate} onChange={handleChange('endDate')} />
        <input className="p-2 border rounded" placeholder="Amount (e.g. $450.00)" value={form.amount} onChange={handleChange('amount')} />
        <select className="p-2 border rounded" value={form.status} onChange={handleChange('status')}>
          <option>Pending</option>
          <option>Confirmed</option>
        </select>
        <div className="flex items-center space-x-2">
          <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded">Create Booking</button>
          <button type="button" onClick={onCancel} className="bg-gray-100 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </form>
  )
}
