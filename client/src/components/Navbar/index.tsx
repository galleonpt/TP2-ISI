import React,{useState, FormEvent} from 'react';
import {Link} from 'react-router-dom'

import api from '../../services/api'

function Navbar() {

  const [searchedUser, setsearchedUser]=useState('')

  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    const token = localStorage.getItem('authentication')

    if(!token){
      alert('Sem autorização')
    }

    await api.get('/private/user-repos', {
      params: {
        searchedUser:searchedUser
      },
      headers:{ 
        authentication:token
      }
    })
      .then(response =>{
        /* Pegar nestes dados e passar para as props do body */
        console.log(response.data)
      })
      .catch(error =>{
        console.error(error)
      })

    
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link  className="navbar-brand" to="">TP2-ISI</Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <Link to='/private/info' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/#' className="nav-link">Docs</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link">Sair</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Procurar" aria-label="Search" onChange={(e) => setsearchedUser(e.target.value)}/>
          <button className="btn btn-primary my-2 my-sm-0" type="submit" >Procurar</button>
        </form>
      </div>
    </nav>
  )
}
export default Navbar
