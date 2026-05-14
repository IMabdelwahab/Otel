import { use, useState, useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './App.css'
import axios from 'axios'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
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
            {/* Not Found Page */}
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </authContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
