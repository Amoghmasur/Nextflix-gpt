import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'



const Header = () => {


  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user)

  const handleSignout=()=>{
    signOut(auth)
    .then(()=>{
    })
    .catch((error)=>{
      navigate('/error')
    })
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          dispatch(
            adduser
            ({uid:uid,email:email,displayName:displayName}))
            navigate('/browse')

          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeuser())
          navigate('/')

        }
      });
      return ()=>unsubscribe()
},[])



  return (

    <div className='absolute z-50 w-screen px-8 py-2  from-black flex justify-between'>
        <img className=" w-44 px-22 ml-16 py-4"
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'/>
        {user && (
        <div className='flex bg-red-500 hover:bg-red-600 h-12 mt-5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          <button onClick={handleSignout}>Sign out</button>
        </div>
        )}
    </div>

  )
}

export default Header
