import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import { Validatemessage } from './utilies/Validate';
import {auth} from './utilies/firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { adduser } from './utilies/userslice';
import { BG_Image, User_Photo } from './Constants';

const Login = () => 
  {
    const dispatch=useDispatch();
    const [logedIn,setlogedin]=useState(true);
    const mail=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [errormessage,seterrormessage]=useState(null);
    const handleclick=()=>{
        setlogedin(!logedIn);
    }
    const formvalidating=(e)=>{
       
       const message=Validatemessage(mail.current.value,password.current.value);
       seterrormessage(message)
       
       if(!logedIn)
        {
        createUserWithEmailAndPassword(auth, mail.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value, photoURL: User_Photo 
          }).then(() => {
            const {uid,email,displayName,photoURL} =auth.currentUser;
            dispatch(adduser({useid:uid,email:email,displayName:displayName,photoURL: photoURL}));
            
          }).catch((error) => {
            seterrormessage(error.code+" "+error.message);
          });
        })
        .catch((error) => {
         
          seterrormessage(error.code+" "+error.message);
         });
        
        }else{

         signInWithEmailAndPassword(auth, mail.current.value, password.current.value)
        .then((userCredential) => {
           
          const user = userCredential.user;
         
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode+" "+errorMessage);
        });
      

       }
      
    }

   
  return (
    <div >
       
        <div className='absolute  bg-black flex top-0'>
         <img className='w-screen h-screen object-cover'src={BG_Image} alt="bg_img" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className=' absolute rounded-md z-50 bg-black px-20 py-16 w-11/12 md:w-4/12 mx-auto top-40 text-white left-0 right-0 opacity-90 '>
            <h1 className='font-bold  text-3xl pb-5 '>{logedIn?"Sign In":"Sign Up"}</h1>
            {!(logedIn) && <input ref={name} type="text" placeholder='Name' className='bg-black  border-2 rounded-sm  px-2 py-3 m-2 w-full '/> }
            <input ref={mail} type="text" placeholder='Email or Phone number' className='bg-black  border-2 rounded-sm  px-2 py-3 m-2 w-full '/><br />
            <input ref={password} type="password" placeholder='password' className=' bg-black border-2 rounded-sm  px-2 py-3 m-2 w-full ' /><br />
            <button className=' rounded-md bg-red-600 px-3  py-3 w-full m-2 font-bold' onClick={formvalidating}>{logedIn?"Sign In":"Sign Up"}</button>
            <p className='text-red-600 px-2'>{errormessage}</p>
            <p className='px-3 cursor-pointer' onClick={handleclick}>{logedIn ? <>"New to Netflix?"" <span className='font-bold text-red-600 '>Sign up now</span></>:<>"Already Registered?" <span className='font-bold text-red-600'>Sign In </span></>}</p>
        </form>
    </div>
  )
}

export default Login


