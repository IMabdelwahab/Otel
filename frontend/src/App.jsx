import { use, useState, useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './App.css'
import axios from 'axios'
import SignIn from './pages/SignIn'
import Home from './pages/Dashboard'
import Rooms from './pages/Rooms'
import Reservations from './pages/Reservations'
import Clients from './pages/Clients'
import ClientDetail from './pages/ClientDetail'
import Invoices from './pages/Invoices'
// import Home from './pages/Homee'
import NotFound from './pages/NotFound'
import authContext from './contexts/authContext'

function App() {
  // const navigate = useNavigate()
  const [user, setUser] = useState({
    "username":"" , 
    "firstName":"" , 
    "lastName":"" , 
    "isAuth":false
  })

  const [tokens, setTokens] = useState({
    "accessToken": "" , 
    "refreshToken": ""
  })

  // const changeTokens = (access, refresh)=>{
  //   setTokens({"accessToken": access , "refreshToken": refresh})
  // }

  return (
    <>
      <BrowserRouter>
        <authContext.Provider value={ {user,setUser,tokens,setTokens} }>
          <Routes>
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/dashboard' element={<Home/>}/>
              <Route path='/rooms' element={<Rooms/>}/>
              <Route path='/reservations' element={<Reservations/>}/>
              <Route path='/bookings' element={<Reservations/>}/>
              <Route path='/invoices' element={<Invoices/>}/>
              <Route path='/clients' element={<Clients/>}/>
              <Route path='/clients/:id' element={<ClientDetail/>}/>
              {/* Not Found Page */}
              <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
