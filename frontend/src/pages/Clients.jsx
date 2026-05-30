import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import clients from '../data/clients'

function StatCard({title, value, sub}){
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-xl font-semibold text-gray-800 mt-1">{value} {sub && <span className="text-sm text-gray-400">{sub}</span>}</div>
    </div>
  )
}


export default function Clients(){
    useEffect(()=>{
        document.title = 'Clients | Ôtel'
    },[])
    const [clientList, setClientList] = useState(clients)
    const [adding, setAdding] = useState(false)
    const [newForm, setNewForm] = useState({ name: '', email: '', phone: '', location: '', membership: 'Member', stays: 0, revenue: '$0.00', lastStay: '' })

    const openAdd = () => {
      setNewForm({ name: '', email: '', phone: '', location: '', membership: 'Member', stays: 0, revenue: '$0.00', lastStay: '' })
      setAdding(true)
    }

    const handleAddSave = () => {
      const newClient = { ...newForm, id: Date.now().toString() }
      setClientList(prev => [newClient, ...prev])
      setAdding(false)
    }

    const handleAddCancel = () => setAdding(false)
  return (
    <div className="min-h-screen">
      <div className="flex">
        <NavBar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Clients</h1>
                <p className="text-gray-500">Manage and view your guest database.</p>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={openAdd} className="bg-amber-600 text-white px-4 py-2 rounded flex items-center">Add New Client</button>
              </div>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <StatCard title="Total Database" value="1,284" sub="+12%" />
              <StatCard title="VIP Members" value="86" />
              <StatCard title="Retention Rate" value="64%" />
              <StatCard title="Average LTV" value="$2.4k" />
            </div> */}

            <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input placeholder="Search clients by name or email..." className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <button className="px-3 py-2 border rounded-md">Filters</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border-gray-500 overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Stays</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Total Spent</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Last Stay</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {clientList.map(c=> (
                    <tr key={c.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Link to={`/clients/${c.id}`} className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">{c.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                          <div>
                            <div className="font-medium text-gray-800">{c.name}</div>
                            <div className="text-sm text-gray-500">Member since 2021</div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{c.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{c.phone}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{c.stays}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">{c.revenue}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{c.lastStay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {adding && (
              <div className="fixed inset-0 z-40 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleAddCancel}></div>
                <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 z-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Add New Client</h3>
                    <button onClick={handleAddCancel} className="text-gray-500">✕</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1 flex flex-col items-center">
                      <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img alt={newForm.name} src={`https://ui-avatars.com/api/?name=${encodeURIComponent(newForm.name || 'New Client')}&background=EFE7DF&color=4B2E2B&size=128`} />
                      </div>
                      <div className="mt-3 text-sm text-gray-500">Profile image (optional)</div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-sm text-gray-600">Full name</label>
                          <input value={newForm.name} onChange={e=>setNewForm({...newForm, name: e.target.value})} className="w-full mt-1 p-2 border rounded" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Membership</label>
                          <select value={newForm.membership} onChange={e=>setNewForm({...newForm, membership: e.target.value})} className="w-full mt-1 p-2 border rounded">
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
                          <input value={newForm.email} onChange={e=>setNewForm({...newForm, email: e.target.value})} className="w-full mt-1 p-2 border rounded" />
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Phone</label>
                          <input value={newForm.phone} onChange={e=>setNewForm({...newForm, phone: e.target.value})} className="w-full mt-1 p-2 border rounded" />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">Location</label>
                        <input value={newForm.location} onChange={e=>setNewForm({...newForm, location: e.target.value})} className="w-full mt-1 p-2 border rounded" />
                      </div>

                      <div>
                        <label className="text-sm text-gray-600">Notes</label>
                        <textarea value={newForm.notes || ''} onChange={e=>setNewForm({...newForm, notes: e.target.value})} className="w-full mt-1 p-2 border rounded h-24" placeholder="Internal notes (optional)"></textarea>
                      </div>

                      <div className="flex items-center justify-end space-x-3 mt-2">
                        <button onClick={handleAddCancel} className="px-4 py-2 border rounded">Cancel</button>
                        <button onClick={() => {
                          if(!newForm.name || !newForm.email){
                            alert('Name and email are required')
                            return
                          }
                          handleAddSave()
                        }} className="px-4 py-2 bg-amber-600 text-white rounded">Create</button>
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
