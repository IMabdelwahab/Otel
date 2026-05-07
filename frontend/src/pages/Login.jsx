import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AmberButton from '../components/AmberButton'
// import './App.css'
import axios from 'axios'


function Login() {
    const [passDisplay, setPassDisplay] = useState("show")
    const [passInputType, setPassInputType] = useState("password")
    const changePassDispaly = (event)=>{
      event.preventDefault()
      if (passDisplay === "show"){
        setPassInputType("text")
        setPassDisplay("hide")
      }
      else{
        setPassInputType("password")
        setPassDisplay("show")
      }
    }
    const {register, handleSubmit, formState : {errors}} = useForm()
    const validate = (data)=>{
      alert(data.username +" -- "+ data.password)
    }
    useEffect(() => {
      
    }, [])

  return (
    <div className="min-h-screen flex items-center" >
    <div className='bg-amber-300/30 rounded-2xl p-5 w-75 md:w-112.5 mx-auto '>
        <form action="" onSubmit={handleSubmit(validate)}>
            {/* <div className='font-bold w-fit mx-auto my-5 text-amber-500 text-5xl px-5 py-7 bg-amber-800 rounded-xl'>Otel</div> */}
            <div className='font-bold w-fit mx-auto my-5 text-amber-800 text-5xl  py-5'>Otel</div>
            <div>
                <div className='flex flex-col'>
                    <label className='my-2 ' >Username <span className='text-red-600'>*</span></label>
                    <input type="text" className=' my-2 rounded  bg-white p-2 max-w-[400px]' name="username" id="" placeholder='type your username'
                    {...register("username", {
                        required: {
                            value: true,
                            message:"this is a requiered field"
                        },
                        maxLength:{
                            value:10,
                            message:"this username is too long"
                        }
                    })}
                    />
                    {errors.username && 
                    <p className='text-red-500'>{errors.username.message}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor=""  className='my-2 ' >Password <span className='text-red-600'>*</span></label>
                    <div className='max-w-100'>
                      <input type={passInputType} className='my-2 rounded-l bg-white p-2 w-[75%] ' name="password" id="" placeholder='type your password'
                        {...register("password", {
                          required:{
                            value: true,
                            message:"this is a requiered field"
                          } ,
                          minLength:{
                            value:8,
                            message:"the password must have at least 8 charachters"
                          }
                        })}
                      />
                      <button className='rounded-r bg-amber-500/70 p-2 w-[25%] text-amber-800' onClick={changePassDispaly}>
                        {passDisplay}
                      </button>
                    </div>
                    
                    {errors.password && 
                    <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div className='flex mt-5'>
                    <AmberButton type = {"submit"} value = {"Log In"}/>
                </div>
            </div>
        </form>
    </div>
    {/* Soft Backdrop*/}
    <div className='fixed inset-0 -z-1 pointer-events-none'>
      <div className='absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-amber-600/50 to-transparent rounded-full blur-3xl' />
      <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-2xl' />
      <div className='absolute left-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-2xl' />
    </div>
    </div>
  )
}

export default Login
