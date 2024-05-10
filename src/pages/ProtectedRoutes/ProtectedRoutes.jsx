import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet,  } from 'react-router-dom'

const ProtectedRoutes = () => {
   const {authToken} = useSelector(state=>state.signinSlce)

  return (
    authToken? <Outlet/> : <Navigate to='/signin'/>
  )
}

export default ProtectedRoutes;