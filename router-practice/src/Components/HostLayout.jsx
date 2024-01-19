import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const HostLayout = () => {

const activelyStyles ={
  fontWeight: "bold",
  textDecoration:"underline",
  color: '#161616'
}

  return (
    <>
      <nav className='host-nav'>
         <NavLink to='/host' end style={({isActive}) => isActive? activelyStyles : null} >Dashboard</NavLink>
         <NavLink to='/host/income' style={({isActive}) => isActive? activelyStyles : null} >Income</NavLink>
         <NavLink to='/host/vans' style={({isActive}) => isActive? activelyStyles : null} >Vans</NavLink>
         <NavLink to='/host/reviews' style={({isActive}) => isActive? activelyStyles : null} >Reviews</NavLink>
      </nav>
      <Outlet/>
    </>
   
  )
}

export default HostLayout
