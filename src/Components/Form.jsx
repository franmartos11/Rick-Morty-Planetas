import React from "react"
import { useState } from "react"

const Form = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)

  const validate = () => {

    let NameLastName = values.name.split(" ")
    let emailUser = values.email.split("@")
    let dotCom = emailUser[1].split(".")


    if (NameLastName.length < 2) return alert("First and Last Name are Required")
    if (NameLastName[0].length < 3 || NameLastName[1].length < 3) return alert("Not a valid Name")
    if (emailUser.length < 2 && dotCom.length < 2) return alert("Not a valid Email")

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

    let validated = validate()

    if (validated) {
      setValidation(true)
    }

  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" nChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange} />

        <button type="submit" className="bton-form">SUBMIT</button>

      </form>

      <div>
        {validation ? <h2>The Form was submited Thanks: {values.name},we will reach to you soon!</h2>:""}
      </div>

    </div>
  );
};

export default Form;
