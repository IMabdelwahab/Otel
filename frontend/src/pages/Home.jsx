import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authContext from '../contexts/authContext'

// import './App.css'
import axios from 'axios'


function Home() {
  const [data, setData] = useState([])
  const {user,setUser,tokens,setTokens} = useContext(authContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if (!user.isAuth){
      navigate("/sign-in")
    }
  },[])
  return (
    <>
      Zennn
      <div className="absolute inset-0 -z-1 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[72px_72px]"></div>
    </>
  )
}

export default Home
