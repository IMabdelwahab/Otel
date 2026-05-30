import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from '../contexts/authContext'
import Background from '../components/Background'
import NavBar from '../components/NavBar'
import DashboardOverview from '../components/DashboardOverview'
import RecentBookings from '../components/RecentBookings'
import StatsPanel from '../components/StatsPanel'

function Home() {
  const [data, setData] = useState([])
  const {user,setUser,tokens,setTokens} = useContext(authContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    document.title = "Dashboard | Ôtel"
  },[])
  
  return (
    <div className="min-h-screen">
      <div className="flex">
        <NavBar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Overview</h1>
              <p className="text-gray-500">Today's property snapshot and recent activity.</p>
            </div>

            <div className="mb-6">
              <DashboardOverview />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentBookings />
              </div>
              <div>
                <StatsPanel />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* <Background /> */}
    </div>
  )
}

export default Home
