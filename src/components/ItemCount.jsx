import {HiPlus, HiMinus} from "react-icons/hi";
import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div className="row">
            <div className="col-2">
            <button variant="text" onClick={increment} className="boton"><HiPlus /></button>
            <div>{count}</div>
            <button variant="text" onClick={decrement} className="boton"><HiMinus /></button>
            </div>
            <div className="col-10">
            {
                stock
                ? <button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</button>
                : <button variant="contained" disabled>Add to Cart</button>
            }
            </div>
        </div>
    );
}

export default ItemCount;