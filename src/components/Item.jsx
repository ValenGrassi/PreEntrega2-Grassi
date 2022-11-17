import { Link } from 'react-router-dom';

const Item = ({ id, title, stock, price, pictureUrl }) => {
  return(
        <div className="card bg-light">
          <img src={pictureUrl} className="card-img-top imagenes" alt="Producto"></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Precio: ${price}</p>
            <Link to={`/item/${id}`} className="btn btn-primary">Detalles</Link>
          </div>
        </div>
)}

export default Item;

