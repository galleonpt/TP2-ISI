import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">TP2-ISI</a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Log-out</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-2">
          <input className="" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-primary mb-2" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}
export default Navbar