import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import {auth} from './utilies/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { adduser,removeuser } from './utilies/userslice';
import { useDispatch } from 'react-redux';
import { header_img } from './Constants';
import { toggelgptsearch } from './utilies/GPTslice';
import { supported_lan } from './Constants';
import { changelanguage } from './utilies/Languageslice';


const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  const showgptsearch=useSelector(store=>store.GPTsearch?.showgptsearch)

  const handleclick=()=>{
    
      signOut(auth).then(() => {
       
      }).catch((error) => {
        console.log("signout Error");
      });
  }
  const handlechange=(e)=>{
    dispatch(changelanguage(e.target.value))
  }
   useEffect(()=>{
        
        const unsubcribe=onAuthStateChanged(auth, (user) => {
          console.log("iam in authstatechage")
          if (user) {
            
            const {uid,email,displayName,photoURL} = user;
            dispatch(adduser({useid:uid,email:email,displayName:displayName,photoURL: photoURL}));
            navigate("/browser");
            
            } else {
            // User is signed out
             dispatch(removeuser())
             navigate("/");
          }
          return unsubcribe
        });
       },[]);

  
  return (
    <div className='absolute flex flex-col md:flex-row justify-between h-16 w-screen bg-gradient-to-b from-black to-transparent z-20'>
      <div className='w-auto'>  
        <img className="mx-auto md:mx-10 w-48 z-10"src={header_img} alt="logoimage" onClick={()=>navigate("/browser")}/></div>
        
        {user &&
          <div className='flex justify-between mx-10'>
               <select  className=' m-3 p-2 bg-black border-2 text-white rounded-md' onChange={handlechange}>
                { supported_lan.map(x=><option key={x.Identifier} value={x.Identifier}>{x.name}</option>)}
               </select>
              <button className='h-8 px-2 p-1 mt-5 rounded-md bg-purple-700 text-white' onClick={()=>dispatch(toggelgptsearch()) }>{(showgptsearch)? "HomePage" :"GPTSearch"}</button>
              <img  className="hidden md:block p-3 h-16 rounded-2xl"src={user?.photoURL} alt="user_image" /> 
              <button className='h-4 mt-2 pt-4 text-white'onClick={handleclick}>sign out</button>
          
          </div>
        }
    </div>
    
    
    
    
  )
}

export default Header
