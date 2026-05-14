import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter,Link, useNavigate } from 'react-router-dom'

function NotFound() {

  return (
    <>
    <div class="h-screen flex flex-col items-center justify-center text-sm max-md:px-4">
        <h1 class="text-8xl md:text-9xl font-bold text-amber-500">404</h1>
        <div class="h-1 w-16 rounded bg-amber-500 my-5 md:my-7"></div>
        <p class="text-2xl md:text-3xl font-bold text-amber-800">Page Not Found</p>
        <p class="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div class="flex items-center gap-4 mt-6">
            <Link to="/dashboard" class="bg-gray-800 hover:bg-black px-7 py-2.5 text-white rounded-md active:scale-95 transition-all">
                Return Home
            </Link>
        </div> 
    </div>
    <div className='fixed inset-0 -z-1 pointer-events-none'>
        <div className='absolute left-1/2 top-20 -translate-x-1/2 w-300 h-115 bg-linear-to-tr from-amber-600/40 to-transparent rounded-full blur-3xl' />
        <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-3xl' />
        {/* <div className='absolute left-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-3xl' /> */}
        <div className="absolute inset-0 -z-1 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[72px_72px]"></div>
    </div>
    </>            
  )
}

export default NotFound
