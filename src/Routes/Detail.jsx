import React, { useContext, useEffect, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { Theme } = useContext(ContextGlobal)
  const params = useParams()
  const [Odontologo, setOdontologo] = useState({})
  

  useEffect(() => {
      const fetchData = async () => {
          axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then(res => setOdontologo(res.data))
      }
      
      fetchData()
      console.log(Odontologo)
  })
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id: {Odontologo.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
        <img src="/images/doctor.jpg" alt="doctor" />
        <h3>Name: {Odontologo.name}</h3>
        <p>Email: {Odontologo.email}</p>
        <p>Phone: {Odontologo.phone}</p>
        <p>Website:  {Odontologo.website}</p>
        
      </div>

    </>
  )
}

export default Detail