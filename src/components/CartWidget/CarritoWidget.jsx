import { useCartContext } from "../../context/CartContext"

export const CarritoWidget = () => {
    const { cantidadTotal } = useCartContext();
    return (

        <div className="icon">
            {cantidadTotal() !== 0 && cantidadTotal()}
            <i className='bx bx-cart-alt'> MI CARRITO </i>
        </div>

    )
}