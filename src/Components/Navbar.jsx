import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const{Theme,handleThemeChange}= useContext(ContextGlobal)
  return (
    <nav style={{color:Theme.color,background:Theme.backgroundNavbar}}>
      <Link to="/"><img src="/images/DH.png" alt='DH-logo' /></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/"> Home </Link>
			<Link to="/contact"> Contact </Link>
			<Link to="/favs"> Favs </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleThemeChange}>Change theme</button>
    </nav>
  )
}

export default Navbar