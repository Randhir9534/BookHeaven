import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouting = () => {
    const isAdmin= window.sessionStorage.getItem("user")

  return isAdmin?<Outlet/>:<Navigate to="/PNG"/>

}

export default ProtectedRouting