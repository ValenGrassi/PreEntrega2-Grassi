import ItemCount from './ItemCount';
const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
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
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;