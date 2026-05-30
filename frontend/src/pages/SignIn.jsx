import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Eye, EyeOff, X } from 'lucide-react'
import authContext from '../contexts/authContext'
import Background from '../components/Background'

// import './App.css'
import axios from 'axios'


function SignIn() {
    const [passInputType, setPassInputType] = useState("password")
    const [alertBanner, setAlertBanner] = useState(false)
    const {register, handleSubmit, formState : {errors}} = useForm()
    const navigate = useNavigate()
    const {user,setUser,tokens,setTokens} = useContext(authContext)
    
    const changePassDispaly = (event)=>{
      event.preventDefault()
      if (passInputType === "password"){
        setPassInputType("text")
      }
      else{
        setPassInputType("password")
      }
    }

    useEffect(()=>{
      document.title = "Sign In | Ôtel"
    },[])

    const validate = (data) => {
      axios.post("http://127.0.0.1:8000/api/token",{
        "username" : data.username,
        "password" : data.password
      }).then((resp)=>{
        if (resp.data.access){
          setUser({
            "username":data.username , 
            "firstName":"" , 
            "lastName":"" , 
            "isAuth":true
          })
          setTokens({
            "access":resp.data.access, 
            "refresh":resp.data.refresh
          })
          navigate("/dashboard")
        }
      }).catch( err =>{
        if (err.response?.status === 401 || err.response?.status === 400) {
          setAlertBanner(true)
        } else {
          alert("Something went wrong. Please try again.")
        }
      })
    }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" >
      {
        alertBanner &&
        <div className='absolute top-5 left-5 bg-gray-300/50 p-5 rounded-xl text-xl text-red-700 flex'>
          <div className='max-w-100'>Wrong Username or Password, try again !</div>
          <X className='ml-5 text-black' onClick={()=> setAlertBanner(false)}/>
        </div>
      }
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
                  <button type='submit' className='active:font-extrabold'>Sign In</button>
                </div>
            </div>
        </form>
      </div>
      {/* Background */}
      <Background></Background>
    </div>
  )
}

export default SignIn
