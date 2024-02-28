import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constant'
import { changeLanguage } from '../utils/configSlice'



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

  const handleLanguage=(e)=>{
       dispatch(changeLanguage(e.target.value))
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

    const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView())
    }

  return (

    <div className='absolute z-50 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className=" w-44 px-22 ml-16 py-4"
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'/>
        {user && (
        <div className='flex p-5'>
          <select className='p-2 m-2 bg-gray-800 text-white rounded-lg' onChange={handleLanguage}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
          <button className='py-2 px-4 my-3 mx-2 bg-purple-800 text-white font-bold rounded-lg' onClick={handleGptSearchClick}>Gpt search</button>
          <button className='py-2 px-4 my-3 mx-2 bg-red-500 hover:bg-red-300  text-white font-bold rounded-lg' onClick={handleSignout}>Sign out</button>
        </div>
        )}
    </div>

  )
}

export default Header
