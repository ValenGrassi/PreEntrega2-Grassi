import logo from "./logo192.png"

import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href=""><img className="d-inline-block align-text-top" alt="Logo" width="40" height="40" src={logo}></img> MyReact</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
            <a className="nav-link active" aria-current="page" href="">Inicio</a>
            </li>
            <li className="nav-item me-3">
            <a className="nav-link active" href="">Productos</a>
            </li>
            <li className="nav-item me-3">
            <a className="nav-link active" href="">Contacto</a>
            </li>
            <li className="nav-item me-3">
            <a className="nav-link disabled">No disponible</a>
            </li>
            <li className="nav-item me-3">
            <a className="nav-link active" href=""> <CartWidget /> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;