import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ productos }) => {
    return (
        
        <div className="item__list">
            <div className="item">
                {
                    productos.map(producto =>
                        <Item key={producto.id} producto={producto} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemList


