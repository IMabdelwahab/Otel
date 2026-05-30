import { useState } from 'react'


function Background() {

  return (
    <>
      <div className='fixed inset-0 -z-1 pointer-events-none'>
      <div className='absolute left-1/2 top-20 -translate-x-1/2 w-300 h-115 bg-linear-to-tr from-amber-600/40 to-transparent rounded-full blur-3xl' />
      <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-3xl' />
      {/* <div className='absolute left-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-3xl' /> */}
      </div>
      <div className="absolute inset-0 -z-1 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[72px_72px]"></div>
    </>
  )
}

export default Background
