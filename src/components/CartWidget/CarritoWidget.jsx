import { useCartContext } from "../../context/CartContext"

export const CarritoWidget = () => {
    const { cantidadTotal } = useCartContext();
    return (

        <div className="icon">
            {cantidadTotal()}
            <i className='bx bx-cart-alt'> MIS COMPRAS</i>
        </div>

    )
}