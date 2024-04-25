import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import Header from './Header'
import  {ValidateData} from '../utils/validation'
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Background } from '../utils/constants';

const Login = () => {

  const navigate=useNavigate();

  const [isSignInForm,setIsSignInForm]=useState(true);
  const [showmessage,setShowMessage]=useState(null)

  const email=useRef(null)
  const password=useRef(null)

  const handleClickButton=()=>{
    const message=ValidateData(email.current.value,password.current.value)
    setShowMessage(message)
    if(message) return;

    if(!isSignInForm){

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('hi')
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setShowMessage(errorMessage)
        });
    }

  }

  const toggleButton = (event) =>{
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
  }
  return (
    <>
        <div >
            < Header/>    
             
            <img className='absolute' src={Background} alt='background'/>
        </div>
       
        <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black py-10 w-3/12 my-28 mx-auto right-0 left-0 text-white opacity-75  rounded-lg'>
            <h1 className='font-bold text-3xl p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Enter Fullname" className='py-2 my-3 w-full bg-gray-700'/>}
            <input ref={email} type="text" placeholder="Email or phone number" className='py-2 my-3 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder="Password" className='py-2 my-3 w-full  bg-gray-700'/>
            <p className='text-red-500 font-medium'>{showmessage}</p>
            <button className='p-2 bg-red-700 w-full my-3  rounded-lg' onClick={handleClickButton}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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