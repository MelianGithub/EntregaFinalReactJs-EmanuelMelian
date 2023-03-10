import { useCartContext } from '../../context/CartContext'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({ producto }) => {
    const { agregarCarrito } = useCartContext();

    const onAdd = (contador) => {
        agregarCarrito( { ...producto, cantidad: contador } )
    }

    return (
        <>
            <div className='detail__contenedor'>
                <div className="img__container">
                    <img src={producto.img} alt="" />
                </div>

                <div className="desc__container">
                    <div className='cajas'>Descripcion del producto <br /><br />
                        <label >Marca: </label>{producto.marca}
                        <br />
                        <label >Modelo: </label>
                        {producto.modelo}

                    </div>
                    <div className='cajas'>Precio: ${producto.precio}</div>
                    <div className='cajas'><ItemCount onAdd={onAdd} /> </div>
                </div>

            </div>
        </>
    )
}

export default ItemDetail;