import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <Link className="site-logo" to='/'>vanLife</Link>
        <nav >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? "active-Link" : null}>About</NavLink>
            <NavLink to='/vans' className={({isActive}) => isActive ? "active-Link" : null}>Vans</NavLink>
            <NavLink to='/host' className={({isActive}) => isActive ? "active-Link" : null}>Host</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
