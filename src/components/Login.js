import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleButton = (event) =>{
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
        <div >
            < Header/>    
             
            <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='background'/>
        </div>
       
        <form className='absolute bg-black py-10 w-3/12 my-28 mx-auto right-0 left-0 text-white opacity-75  rounded-lg'>
            <h1 className='font-bold text-3xl p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Enter Fullname" className='py-2 my-3 w-full bg-gray-700'/>}
            <input type="text" placeholder="Email or phone number" className='py-2 my-3 w-full bg-gray-700'/>
            <input type="password" placeholder="Password" className='py-2 my-3 w-full  bg-gray-700'/>
            <button className='p-2 bg-red-700 w-full my-3  rounded-lg' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
            {/* <a className='mx-20'> Forget password?</a> */}
            <p> 
              New to Netflix?  
              <button className=' font-bold space-x-1' onClick={toggleButton}>  Sign Up Now</button>
            </p>
            <p>
              <span className='relative  text-left  text-xs my-3'>
                      This page is protected by Google reCAPTCHA to ensure you are not a bot.
                </span> 
                <button className='bg-transparent text-blue-500 cursor-pointer inline '> Learn more</button>       
            </p> 
        </form>
    </>
    
  )
}

export default Login