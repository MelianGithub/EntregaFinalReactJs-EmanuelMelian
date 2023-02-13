import React, { useState } from 'react'
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from '../../../context/CartContext';
import Form from '../../Form/Form';

const CheckOutContainer = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState('');
  const { cartList, vaciarCarrito, precioTotal } = useCartContext();


  const generateOrder = (dataForm) => {

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
        .then(resp => setShowSuccessMessage(resp.id))
        .catch(err => console.log(err))
        .finally(
          vaciarCarrito()
        )
    }
  }

  return (
    <div>

      {showSuccessMessage ? <div className='successfully'>
        <h2>SU COMPRA SE HA REALIZDO EXITOSAMENTE
          <br />
          <br />
          ID: {showSuccessMessage}
        </h2>
      </div> :
        <Form generateOrder={generateOrder} />
      }
    </div>
  )
}

export default CheckOutContainer