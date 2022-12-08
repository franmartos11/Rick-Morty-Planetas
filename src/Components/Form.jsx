import React from "react"
import { useState } from "react"



const Form = () => {

  
  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)

  const fullValidation = () => {

    let NameLastName = values.name.split(" ")
    let emailUser = values.email.split("@")
    let dotCom = emailUser[1].split(".")

    
    if (NameLastName.length < 2) return alert("Por favor rellene el campo correspondiente")
    if (NameLastName[0].length < 3 || NameLastName[1].length < 3) return alert("por favor introduzca un nombre o apellido correcto")

    
    
    if (dotCom.length < 2 || emailUser.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    return true

  }

  const handleChange = (form) => {

    const { target } = form
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  const handleSubmit = (form) => {

    form.preventDefault()

    let validated = fullValidation()

    if (validated) {
      setValidation(true)
    }

  }
  return (
    <div class="form">

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name</label>
        <input type="text" name="name"  onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email"  onChange={handleChange} />

        <button type="submit" >SUBMIT</button>

      </form>

      <div >

      {validation ? <h3 >The Form was submited Thanks: {values.name},we will reach to you soon!</h3> : ""}

      </div>

    </div>
  );
};

export default Form;
