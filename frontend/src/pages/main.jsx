import { use, useState, useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import './App.css'
import axios from 'axios'


function Main() {
  const [clients, setClients] = useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/apiGetTest/")
    .then(res => setClients(res.data))
  },[])
  return (
    <>
    {clients.map((e,key)=>{
        return <div key={key}>{e.clientName} -- {e.clientAge}</div>
    })}
    </>
  )
}

export default Main
