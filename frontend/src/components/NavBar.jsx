import { Link, useNavigate } from 'react-router-dom'
import { Home, Calendar, Bed, Users, FileText, BarChart2, Settings, LogOut } from 'lucide-react'
import { useState, useEffect, useContext } from 'react'
import authContext from '../contexts/authContext'

export default function NavBar(){
    const {user,setUser,tokens,setTokens} = useContext(authContext)
    const navigate = useNavigate()
  const links = [
    {to: '/dashboard', label: 'Dashboard', icon: Home},
    {to: '/bookings', label: 'Bookings', icon: Calendar},
    {to: '/rooms', label: 'Rooms', icon: Bed},
    {to: '/clients', label: 'Clients', icon: Users},
    {to: '/invoices', label: 'Invoices', icon: FileText},
    {to: '/settings', label: 'Settings', icon: Settings},
  ]

  return (
    <nav className="w-64 min-h-screen bg-gray-50 border-r border-gray-200 px-6 py-8 flex flex-col">
      <div className="mb-8">
        <div className='font-bold w-fit mx-auto text-amber-800 text-5xl  py-5'>Ôtel</div>
        <div className="text-sm text-gray-500 mx-auto w-fit">Hotel Management OS</div>
      </div>

      <ul className="space-y-2">
        {links.map(link => {
          const Icon = link.icon
          return (
            <li key={link.to}>
              <Link to={link.to} className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-amber-50 hover:text-amber-700">
                <Icon size={18} className="mr-3 text-amber-600" />
                <span>{link.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="mt-auto pt-6">
        <button onClick={() => {
          setUser({
            "username":"", 
            "firstName":"", 
            "lastName":"", 
            "isAuth":false
          })
          setTokens({
            "accessToken": "", 
            "refreshToken": ""
          })
          navigate('/sign-in')
        }} className="flex items-center text-sm text-gray-500 hover:text-gray-800">
          <LogOut size={16} className="mr-2 text-gray-600"/> Logout
        </button>
        
      </div>
    </nav>
  )
}
