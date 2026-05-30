import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import clients from '../data/clients'
import { useEffect } from 'react'
const sampleHistory = {
  '1': [
    {id: '#HOS-9281', dates: 'Oct 12 - Oct 15, 2023', room: 'Presidential Suite', status: 'COMPLETED', amount: '$3,450'},
    {id: '#HOS-8172', dates: 'Aug 04 - Aug 10, 2023', room: 'Executive King', status: 'COMPLETED', amount: '$5,120'},
    {id: '#HOS-7001', dates: 'Jun 15 - Jun 17, 2023', room: 'Penthouse Loft', status: 'CANCELLED', amount: '$0.00'},
    {id: '#HOS-6129', dates: 'Mar 12 - Mar 15, 2023', room: 'Presidential Suite', status: 'COMPLETED', amount: '$4,200'},
  ],
}

export default function ClientDetail(){
  const { id } = useParams()
  const client = clients.find(c=> c.id === id)
  const [clientData, setClientData] = useState(client)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    name: client.name,
    email: client.email,
    phone: client.phone,
    location: client.location,
    membership: client.membership,
  })

  const openEdit = () => {
    setForm({
      name: clientData.name,
      email: clientData.email,
      phone: clientData.phone,
      location: clientData.location,
      membership: clientData.membership,
    })
    setEditing(true)
  }

  const handleSave = () => {
    setClientData(prev => ({...prev, ...form}))
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  if (!client) {
    return (
      <div className="min-h-screen">
        <div className="flex">
          <NavBar />
          <main className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-xl">Client not found</div>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const history = sampleHistory[id] || []

  useEffect(()=>{
    document.title = 'Client Detail | Ôtel'
  },[])

  return (
    <div className="min-h-scree">
      <div className="flex">
        <NavBar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <Link to="/clients" className="text-sm text-gray-500 mb-3 inline-block">← Back to Clients</Link>

            <div className="bg-white rounded-lg p-6 shadow-md border-gray-500 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img alt={client.name} src={`https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=EFE7DF&color=4B2E2B&size=128`} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                        <h2 className="text-2xl font-bold text-gray-800">{clientData.name}</h2>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">{clientData.membership}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{clientData.email} · {clientData.phone}</div>
                    <div className="text-sm text-gray-400 mt-1">{clientData.location}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button onClick={openEdit} className="bg-white border-gray-500 px-4 py-2 rounded shadow-md">Edit Profile</button>
                  <Link to="/bookings" className="bg-amber-600 text-white px-4 py-2 rounded shadow">New Booking</Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-white rounded shadow-md border-gray-500">
                  <div className="flex items-center justify-between px-4 py-3 border-gray-500-b">
                    <div className="text-lg font-semibold">Reservation History</div>
                    <div className="text-sm text-amber-600">Export History</div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-amber-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs text-gray-600">ID</th>
                          <th className="px-4 py-3 text-left text-xs text-gray-600">Dates</th>
                          <th className="px-4 py-3 text-left text-xs text-gray-600">Room Type</th>
                          <th className="px-4 py-3 text-left text-xs text-gray-600">Status</th>
                          <th className="px-4 py-3 text-right text-xs text-gray-600">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y">
                        {history.map(h=> (
                          <tr key={h.id} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm font-medium text-amber-700">{h.id}</td>
                            <td className="px-4 py-4 text-sm text-gray-700">{h.dates}</td>
                            <td className="px-4 py-4 text-sm text-gray-700">{h.room}</td>
                            <td className="px-4 py-4">
                              <span className={`inline-block px-2 py-1 text-xs rounded ${h.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : h.status === 'CANCELLED' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                {h.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-right text-sm font-semibold text-gray-800">{h.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              
            </div>
            {editing && (
              <div className="fixed inset-0 z-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleCancel}></div>
                <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 z-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Edit Profile</h3>
                    <button onClick={handleCancel} className="text-gray-500">✕</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1 flex flex-col items-center">
                      <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img alt={form.name} src={`https://ui-avatars.com/api/?name=${encodeURIComponent(form.name || clientData.name)}&background=EFE7DF&color=4B2E2B&size=128`} />
                      </div>
                      <div className="mt-3 text-sm text-gray-500">Profile image (optional)</div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm text-gray-600">Full name</label>
                          <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full mt-1 p-2 border-gray-500 rounded" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Membership</label>
                          <select value={form.membership} onChange={e=>setForm({...form, membership: e.target.value})} className="w-full mt-1 p-2 border-gray-500 rounded">
                            <option>VIP</option>
                            <option>Platinum</option>
                            <option>Member</option>
                            <option>Corporate</option>
                            <option>Individual</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm text-gray-600">Email</label>
                          <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="w-full mt-1 p-2 border-gray-500 rounded" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Phone</label>
                          <input value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} className="w-full mt-1 p-2 border-gray-500 rounded" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">Location</label>
                        <input value={form.location} onChange={e=>setForm({...form, location: e.target.value})} className="w-full mt-1 p-2 border-gray-500 rounded" />
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">Notes</label>
                        <textarea value={form.notes || ''} onChange={e=>setForm({...form, notes: e.target.value})} className="w-full mt-1 p-2 border-gray-500 rounded h-24" placeholder="Add internal notes about the client (optional)"></textarea>
                      </div>

                      <div className="flex items-center justify-end space-x-3 mt-2">
                        <button onClick={handleCancel} className="px-4 py-2 border-gray-500 rounded">Cancel</button>
                        <button onClick={() => {
                          if(!form.name || !form.email){
                            alert('Name and email are required')
                            return
                          }
                          handleSave()
                        }} className="px-4 py-2 bg-amber-600 text-white rounded">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
