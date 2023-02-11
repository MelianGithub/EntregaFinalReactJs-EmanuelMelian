import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div key={producto.id} className="card">
            <div className="card__marca">
                <h2>{producto.marca}</h2>
            </div>
            <div className="card__body">
                {producto.modelo}
            </div>
            <div className="imagenes">
                <img src={producto.img} alt="" />
            </div>
            <div className="card__footer">
                {producto.cpu}
                <br />
                <Link to={`/detail/${producto.id}`}>
                    <button className="detalle">Ir al detalle</button>
                </Link>

            </div>
        </div>
    )
}

export default Item
