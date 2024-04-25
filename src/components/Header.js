import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { Logo, Profile } from '../utils/constants';

import { addUser } from '../utils/userSlice'

import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleClick=()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email} = user;
        dispatch(addUser({uid:uid,email:email}));
        navigate("/browse");
        // ...
      } else {
        navigate("/");
      }
    });
    return () =>unsubscribe();
  },[]);

  return (
    <>
        <div  className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black justify-between flex z-10'>
            <img className='w-44' src={Logo}/>
            <div className='flex p-4'>
              <img  className='' alt='profile' src={Profile} ></img>
              <button onClick={handleClick}> Sign Out</button>
            </div>
        </div>

        
    </>
    
  )
}

export default Header