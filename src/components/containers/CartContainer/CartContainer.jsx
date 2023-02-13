import { useCartContext } from "../../../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import "./CartContainer.css"


export const CartContainer = () => {

  const { cartList, vaciarCarrito, precioTotal, borrarItem } = useCartContext();

  return (
    <div className="contenedor__carrito">
      {
        cartList.length > 0 ? <>
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

          <div className="seguir__comprando">
            <h2>TOTAL A PAGAR: ${precioTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to='/checkout'><button >Terminar Compra </button></Link>
            <NavLink to="/"><button>Seguir Comprando</button></NavLink>
          </div>
        </>
          : <div className="empty">
            <h2>Tu carrito esta vacio</h2>
          </div>
      }
    </div>

  )

}