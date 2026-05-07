import { use, useState, useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './App.css'
import axios from 'axios'
import Login from './pages/Login'
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
