import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'



function Body() {


    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>,
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/auth.user
    //           const {uid,email,displayName} = user;
    //           dispatch(adduser({uid:uid,email:email,displayName:displayName}))

    //           // ...
    //         } else {
    //           // User is signed out
    //           // ...
    //           dispatch(removeuser())

    //         }
    //       });
    // },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body