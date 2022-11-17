import logo from "./logo192.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import XD from "./XD.png"


const NavBar = () => {
    return(
    <nav className="nav navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo d-inline-block align-text-top " alt="Logo" width="40" height="40" src={XD}></img></Link>
        <div className="nav-item me-3">
          <Link className="brand" aria-current="page" to="/">MyEcommerce</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
            <Link className="nav-link active" aria-current="page" to="/category/pikadores">Pikadores</Link>
            </li>
            <li className="nav-item me-3">
            <Link className="nav-link active" to="/category/papelillos">Sedas y Filtros</Link>
            </li>
            <li className="nav-item me-3">
            <Link className="nav-link active" to="/category/bongs">Bongs</Link>
            </li>
            <li className="nav-item me-3">
            <a className="nav-link disabled">No disponible</a>
            </li>
            <li className="nav-item me-3">
            <Link className="nav-link active" to="/"> <CartWidget /> </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}


export default NavBar;

