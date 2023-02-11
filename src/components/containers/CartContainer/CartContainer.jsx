import { useCartContext } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import "./CartContainer.css"


export const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    validarEmail: ""
  })

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { cartList, vaciarCarrito, precioTotal, borrarItem } = useCartContext();


  const generarOrden = (e) => {
    e.preventDefault()
    if (cartList.length <= 0) { alert("NO HAY PRODUCTOS EN SU CARRITO") }

    else if (!dataForm.name || !dataForm.phone || !dataForm.email || dataForm.email !== dataForm.validarEmail) {
      alert("VERIFIQUE QUE TODOS LOS CAMPOS FUERON INGRESADOS CORRECTAMENTE")
    }
    else {
      const order = {}
      order.buyer = dataForm;
      order.item = cartList.map(({ id, marca, precio, cantidad }) => ({ marca, precio, id, cantidad }))
      order.total = precioTotal();

      const db = getFirestore()
      const queyCollection = collection(db, "orders")
      addDoc(queyCollection, order)
        .then(resp => setShowSuccessMessage(true))
        .catch(err => console.log(err))
        .finally(
          setDataForm({
            name: "",
            phone: "",
            email: "",
            validarEmail: ""
          })
        )
    }
  }

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contenedor__carrito">
      {!showSuccessMessage &&
        <div>
          {cartList.map(product => <div className="carrito__productos" key={product.id}>
            <img src={product.img} className="card__img" />
            <h3>{product.marca}</h3>
            <h4>{product.cantidad}</h4>
            <p className="text__card"></p>
            <h4>${product.precio}</h4>
            <p>${product.precio * product.cantidad}</p>
            <button onClick={() => borrarItem(product.id)}>X</button>
          </div>)
          }
        </div>
      }

      <div className="seguir__comprando">
        {showSuccessMessage ? <h1>Su compra se ha realizado con éxito</h1> :
          <form onSubmit={generarOrden}>
            <h2>Formulario</h2>
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
            {precioTotal() != 0 ? <h2>TOTAL A PAGAR: ${precioTotal()}</h2> : <h1>Su carrito esta vacio</h1>}
            {precioTotal() != 0 && <button onClick={vaciarCarrito}>Vaciar Carrito</button>}
          </form>
        }

        <NavLink to="/"><button>Seguir Comprando</button></NavLink>
      </div>
    </div>
  )

}
