import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (product) => {
        setCartList([...cartList, product])
    }

    const cantidadTotal = () => cartList.reduce((count, objProducto) => count += objProducto.cantidad, 0)

    const precioTotal = () => cartList.reduce((count, objProducto) => count += (objProducto.cantidad * objProducto.precio), 0)

    const borrarItem = id => setCartList(cartList.filter(product => product.id != id))

    const vaciarCarrito = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            precioTotal,
            borrarItem
        }}>

            {children}
        </CartContext.Provider>
    )
}