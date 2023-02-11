import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getSingleitem } from "../../../utils/firebase.js";
import ItemDetail from "../../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const { detailId } = useParams()
  const [producto, setProducto] = useState({})

  useEffect(() => {
    getSingleitem(detailId)
      .then(resp => setProducto(resp))
  }, [])

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer;
