import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  const{Theme,handleThemeChange}= useContext(ContextGlobal)
  return (
    <nav style={{color:Theme.color,background:Theme.backgroundNavbar}}>

      <div class="logo">
        <Link to="/">DH Odonto</Link>
      </div>
      
      <div class="links" >
        <Link to="/"> Home </Link>
			  <Link to="/contact"> Contact </Link>
			  <Link to="/favs"> Favs </Link> 
        <button onClick={handleThemeChange}>Theme</button>
      </div>
      
    </nav>
  )
}

export default Navbar