import { use, useState, useContext, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
