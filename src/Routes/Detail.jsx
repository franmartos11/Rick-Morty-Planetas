import React, { useContext, useEffect, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { Theme } = useContext(ContextGlobal)
  const param = useParams()
  const [Odontologo, setOdontologo] = useState({})
  

  useEffect(() => {
      const fetchData = async () => {
          axios(`https://jsonplaceholder.typicode.com/users/${param.id}`)
          .then(res => setOdontologo(res.data))
      }
      
      fetchData()
      console.log(Odontologo)
  })
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div class="detail" style={{backgroundColor:Theme.backgroundHome,color:Theme.color}}>
        
        <h1>Detail Dentist ID: {Odontologo.id} </h1>
        
        <div class="detail-card">

          <img src="/images/doctor.jpg" alt="doctor" />

          <div class="detail-content">

            <h3>Name: {Odontologo.name}</h3>
            <p>Email: {Odontologo.email}</p>
            <p>Phone: {Odontologo.phone}</p>
            <p>Website:  {Odontologo.website}</p>

          </div>
        
        </div>
        
      </div>
    </>
  )
}

export default Detail