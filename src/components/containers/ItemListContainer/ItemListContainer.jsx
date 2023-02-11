import { useEffect, useState } from "react";
import { getItems, getItemsByCategory } from "../../../utils/firebase.js";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList.jsx";
import Loader from "../../Loader/Loader";
import "./ItemListContainer.css";



export const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams()

    useEffect(() => {
        (categoriaId ? getItemsByCategory(categoriaId) : getItems())
            .then(respuestaPromesa => {
                setProductos(categoriaId ? respuestaPromesa.filter(items => items.cat === categoriaId) : respuestaPromesa)})
            .then(err => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <div className="card__container">
            {loading ?
                <Loader />
                :
                <ItemList productos={productos} />
            }
        </div>
    )
}
