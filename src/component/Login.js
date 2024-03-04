import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkValiddata } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'


const Login = () => {

  const[isSignInForm,setisSignInForm]=useState(true)

  const[errorMessage,seterrorMessage]=useState(null)

  const [successMessage, setSuccessMessage] = useState(null)

  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)





  const handleButtonClick=()=>{
    const message=checkValiddata(email.current.value,password.current.value)
    seterrorMessage(message)

    if (!message) {
      setSuccessMessage("User successfully signed up!"); // Set success message
    }

    if (message) return

    if (!isSignInForm){
      createUserWithEmailAndPassword(auth,
        email.current.value,
        password.current.value,
          )
      .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      updateProfile(user,{
        displayName:name.current.value
      })

      // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode+"-"+errorMessage)
      // ..
  });
    }
    else{
      signInWithEmailAndPassword(auth,
        email.current.value,
        password.current.value,)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
  });

    }

  }


  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm)
  }


  return (
    <div>
        <Header/>
        <div className='absolute inset-0'>
            <img className='w-full h-full object-cover' alt='logo' src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
        </div>
        <form autoComplete='on' onSubmit={(e)=>e.preventDefault()}
          className='text-white bg-black mx-auto left-0 right-0  p-12 absolute my-36 bg-opacity-80 rounded-lg md:w-3/12 md:p-12 w-10/12 sm:w-8/12 lg:w-2/5 xl:w-1/3'>
          <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
             type='text'
             placeholder='Full Name'
             ref={name}
             className='p-4 my-4 w-full bg-gray-600 bg-opacity-70 rounded-md '
            />
          )}
          <input
            ref={email}
            type='email'
            placeholder='Email address'
            className='p-4 my-4 w-full bg-gray-600 bg-opacity-70 rounded-md '
          />
          <input
            ref={password}
            type='password'
            placeholder='Password'
            autoComplete='on'
            className='p-4 my-2 w-full bg-gray-600 bg-opacity-70 rounded-md'
           />
           <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>
           <p className='text-green-600 font-bold text-lg'>{successMessage}</p>
          <button className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>
           {isSignInForm? "Sign In":"Sign Up"}
          </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm
              ? "New to Netflix? Sign Up Now":
              "Already Registred? Sign In Now"
              }
            </p>
        </form>
    </div>
  )
}

export default Login
