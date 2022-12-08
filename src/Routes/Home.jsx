import React from 'react'
import Card from '../Components/Card'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [Odontologos, setOdontologos] = useState([])

    const { Theme } = useContext(ContextGlobal)

    useEffect(() => {
        const fetchData =  () => {
            axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setOdontologos(res.data))
        }
        fetchData()
    }, [])

  return (
    <main className="" style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h1>Home</h1>
      <div className='card-grid'>
        {
          Odontologos.map(odontologo=> {

            return <Card  name={odontologo.name} username={odontologo.username} id={odontologo.id}></Card>
         })
        }
      </div>
    </main>
  )
}

export default Home