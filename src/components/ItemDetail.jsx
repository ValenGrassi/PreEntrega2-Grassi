import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';



const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const {addItem} = useContext(CartContext)

    const onAdd = (qty) => {
        setItemCount(qty);
        addItem(item,qty)
    }

    return (
        <>
        {
            item && item.image
            ? 
        <div className='container m-5'>
            <div className='row'>
                <div className='col'>
                    <img src={item.image[0]} alt="Imagen del producto" className='imagenDetail'/>
                </div>
                <div className='col'>
                    <h3> {item.name} </h3>
                    <p> {item.description} </p>
                    <h5>Precio: ${item.cost} </h5>
                    <p> Quedan {item.stock} unidades.</p>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button>Ir a Carrito</button> </Link>
                    }
                </div>
            </div>
        </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;