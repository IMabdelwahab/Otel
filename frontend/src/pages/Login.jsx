import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AmberButton from '../components/AmberButton'
import { Eye, EyeOff } from 'lucide-react'
// import './App.css'
import axios from 'axios'


function Login() {
    const [passInputType, setPassInputType] = useState("password")
    const {register, handleSubmit, formState : {errors}} = useForm()
    const navigate = useNavigate()
    
    const changePassDispaly = (event)=>{
      event.preventDefault()
      if (passInputType === "password"){
        setPassInputType("text")
      }
      else{
        setPassInputType("password")
      }
    }

    const validate = (data)=>{
      if (data.username === data.password ){
        navigate("/home")
      }
    }

    useEffect(() => {
      
    }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center" >
      <div className='font-bold w-fit mx-auto text-amber-800 text-5xl  py-5'>Ôtel</div>
      <div className='bg-white shadow-black shadow-2xl/20 rounded-2xl p-8 w-75 md:w-112.5 mx-auto '>
        <form action="" onSubmit={handleSubmit(validate)}>
            <div className='w-fit my-3'> 
              <div className='text-black text-xl font-medium'>
                Welcome Back
              </div>
              <div className='text-gray-500 font-md text-sm mt-1'>
                Sing In to manage operations and guest services
              </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <label className='my-2 text-sm text-gray-500 font-bold' >Username <span className='text-red-600'>*</span></label>
                    <input type="text" className='rounded  bg-white p-2 max-w-100 ring-1 ring-gray-400 focus:outline-none focus:bg-white' name="username" id="" placeholder='type your username'
                    {...register("username", {
                        required: {
                            value: true,
                            message:"this is a requiered field"
                        },
                        maxLength:{
                            value:20,
                            message:"this username is too long"
                        }
                    })}
                    />
                    {errors.username && 
                    <p className='text-red-500'>{errors.username.message}</p>}
                </div>
                <div className='flex flex-col mt-5'>
                    <label htmlFor=""  className='my-2 text-sm text-gray-500 font-bold' >Password <span className='text-red-600'>*</span></label>
                    <div className='max-w-100 ring-1 ring-gray-400 rounded overflow-hidden flex '>
                      <input type={passInputType} className='bg-white p-2 w-[75%] focus:outline-none' name="password" id="" placeholder='type your password'
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
                      <button className='p-2 w-[25%]' onClick={changePassDispaly}>
                        {passInputType === 'password' ? <Eye size={20}  className='mx-auto font-bold text-gray-500' onClick={changePassDispaly}/> : <EyeOff size={20} className='mx-auto text-gray-500'/>}
                      </button>
                      
                    </div>
                    
                    {errors.password && 
                    <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div className='my-7 max-w-100 bg-amber-400 text-amber-900 text-center py-2 text-xl rounded-md hover:font-medium' >
                  <button type='submit'>Sign In</button>
                </div>
            </div>
        </form>
      </div>
    {/* Background */}
    <div className='fixed inset-0 -z-1 pointer-events-none'>
      <div className='absolute left-1/2 top-20 -translate-x-1/2 w-300 h-115 bg-linear-to-tr from-amber-600/40 to-transparent rounded-full blur-3xl' />
      <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-3xl' />
      {/* <div className='absolute left-12 bottom-10 w-105 h-55 bg-linear-to-bl from-amber-600/50 to-transparent rounded-full blur-3xl' /> */}
    </div>
    <div
      className="absolute inset-0 -z-1 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[72px_72px]"
    ></div> 
    </div>
  )
}

export default Login
