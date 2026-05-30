import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const sample = [
  {id: '#INV-2023-089', guest: 'Eleanor Jackson', initials: 'EJ', issue: 'Oct 12, 2023', due: 'Oct 26, 2023', amount: '$1,450.00', status: 'Paid'},
  {id: '#INV-2023-090', guest: 'Marcus Sterling', initials: 'MS', issue: 'Oct 14, 2023', due: 'Oct 28, 2023', amount: '$3,210.50', status: 'Pending'},
  {id: '#INV-2023-091', guest: 'Lydia Dupont', initials: 'LD', issue: 'Oct 01, 2023', due: 'Oct 15, 2023', amount: '$890.00', status: 'Overdue'},
  {id: '#INV-2023-092', guest: 'Robert Harrison', initials: 'RH', issue: 'Oct 18, 2023', due: 'Nov 01, 2023', amount: '$4,500.00', status: 'Pending'},
  {id: '#INV-2023-093', guest: 'Chloe Whitman', initials: 'CW', issue: 'Oct 20, 2023', due: 'Nov 03, 2023', amount: '$1,120.00', status: 'Paid'},
]

function StatusBadge({s}){
  const classes = s === 'Paid' ? 'bg-green-100 text-green-700' : s === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
  return <span className={`inline-block px-3 py-1 text-sm rounded-full ${classes}`}>{s}</span>
}

export default function Invoices(){
  useEffect(()=>{ document.title = 'Invoices | Ôtel' },[])

  return (
    <div className="min-h-scree">
      <div className="flex">
        <NavBar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Invoices</h1>
                <p className="text-gray-500">Manage and track all guest billings.</p>
              </div>
              <div className="flex items-center space-x-3">
                {/* <button className="px-3 py-2 border rounded bg-white">Advanced Filters</button>
                <button className="px-4 py-2 bg-amber-600 text-white rounded">Export Data</button> */}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input placeholder="Search by invoice ID or guest name..." className="w-full p-2 border rounded-md" />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-sm text-gray-500">Status:</div>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm bg-amber-50 rounded">All</button>
                    <button className="px-3 py-1 text-sm">Paid</button>
                    <button className="px-3 py-1 text-sm">Pending</button>
                    <button className="px-3 py-1 text-sm">Overdue</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-amber-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Invoice ID</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Guest Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Issue Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Due Date</th>
                    <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Amount</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                    <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {sample.map(inv=> (
                    <tr key={inv.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-amber-700">{inv.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-medium">{inv.initials}</div>
                          <div>
                            <div className="font-medium text-gray-800">{inv.guest}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">{inv.issue}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{inv.due}</td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-gray-800">{inv.amount}</td>
                      <td className="px-6 py-4"><StatusBadge s={inv.status} /></td>
                      <td className="px-6 py-4 text-center text-sm">
                        <button className="px-2 py-1 rounded hover:bg-gray-100">🖨️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
