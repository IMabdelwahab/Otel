import { use, useState, useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './App.css'
import axios from 'axios'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>

        
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
