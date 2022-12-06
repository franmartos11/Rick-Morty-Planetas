import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import userContextGlobal from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const odontologos = userContextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          odontologos.map((odontologo)=> 
          <Link to={'./detail/'+ odontologo.id}>
            <Card  name={odontologo.name} username={odontologo.username} id={odontologo.id}></Card>
          </Link>)
        }
      </div>
    </main>
  )
}

export default Home