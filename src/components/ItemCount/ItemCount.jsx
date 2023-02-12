import { useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css'


const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const [contador, setContador] = useState(initial);
    const [inputType, setImputType] = useState("button")

    const handleSuma = () => {
        if (contador < stock) {
            setContador(contador + 1);
            setImputType("button");
        }
    }

    const handleResta = () => {
        if (contador > initial) {
            setContador(contador - 1);
            setImputType("button");
        }
    }
    const handleOnAdd = () => {
        onAdd(contador)
        setImputType('input')
    }


    return (
        <div className="contador">
            <div>
                <button onClick={handleResta}>-</button>

                <label>{contador}</label>

                <button onClick={handleSuma}>+</button>

            </div>

            {inputType === "button" ? <div>
                <button onClick={handleOnAdd}>Agregar al Carrito </button>
            </div> : <div>
                <Link to='/'><button >
                    Seguir Comprando
                </button></Link>
            </div>}


        </div>
    )
}

export default ItemCount