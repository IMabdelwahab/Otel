import { useState } from 'react'


function AmberButton(props) {
  const [state, setState] = useState(null)

  return (
    <>
      <button className='mx-auto px-7 py-4 bg-amber-500 text-amber-800 rounded-xl hover:font-bold' type={props.type}>
        {props.value}
      </button>
    </>
  )
}

export default AmberButton
