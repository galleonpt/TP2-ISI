import React from 'react';
import {Link} from 'react-router-dom'



function Navbar() {




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link  className="navbar-brand" to="">TP2-ISI</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/private/info' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/private/info' className="nav-link">Docs</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">Sair</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Procurar" aria-label="Search"/>
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Procurar</button>
        </form>
      </div>
    </nav>
  )
}
export default Navbar
