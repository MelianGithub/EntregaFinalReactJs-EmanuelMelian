import React, { useState } from 'react'

const Form = ({ generateOrder }) => {
  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    validarEmail: ""
  })
  const submitHandler = (e) => {
    e.preventDefault()
    generateOrder(dataForm)
  }
  return (
    <div className="seguir__comprando">
      <form onSubmit={submitHandler}>
        <h2>Completa el Formulario</h2>
        <input
          type="text"
          name="name"
          placeholder="Ingresar nombre"
          value={dataForm.name}
          onChange={handleOnChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Ingresar phone"
          value={dataForm.phone}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresar email"
          value={dataForm.email}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="validarEmail"
          placeholder="Validar email"
          value={dataForm.validarEmail}
          onChange={handleOnChange}
        />
        <button type="submit">Generar Orden</button>

      </form>
    </div>
  )
}

export default Form