import React, {useState, useEffect, FormEvent} from 'react';
import {Link} from 'react-router-dom'
import {FiStar, FiShare2} from 'react-icons/fi'

import Footer from '../../components/Footer'

import api from '../../services/api'

import './styles.css'

export interface Owner {
  login: string;
  id: number;
}

export interface RepoInterface {
  id: number;
  node_id: string;
  name: string;
  owner: Owner;
  description: string;
  stargazers_count: number;
  forks: number;
  html_url:string;
}


function ReposList(){
  const [searchedUser, setsearchedUser]=useState('')
  const [repos, setRepos] = useState<RepoInterface[]>([])

  useEffect(() => {
    const token = localStorage.getItem('authentication')
    api.get(`/private/me`,{
      headers:{ 
        authentication:token
      }}).then(response => {
      console.log(response.data)
      setRepos(response.data);
    });
  }, []);

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
      setRepos(response.data)
    })
    .catch(error =>{
      alert('Utilizador inserido inválido')
    })
  }

  async function homeSubmit(e:FormEvent){
    e.preventDefault()

    const token = localStorage.getItem('authentication')

    if(!token){
      alert('Sem autorização')
    }

    await api.get('/private/me', {
      headers:{ 
        authentication:token
      }
    })
    .then(response =>{
      setRepos(response.data)
    })
    .catch(error =>{
      alert('Erro')
    })
  }

  return (
      <div className=' container main'>
        <div className="footer-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link  className="navbar-brand" to="/private/info">TP2-ISI</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/private/info' className="nav-link" onClick={homeSubmit}>Home</Link>
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
        
        <div>
        {
          repos.length>0 && <div>
            <h2 className='username' > {repos[0].owner.login}
              <span className='followers-number'>({repos.length})</span>
            </h2>

            <ul className="list-group ">
              {
                repos.map(function(repo:RepoInterface, i){
                  return(<li className="list-group-item" key={i}>
                    <div className="info">
                      <a href={repo.html_url} target="_blank">{repo.name}</a>

                      <p className='description'>{repo.description}</p>
                    </div>

                    <div className='rating'>
                      <div className='stars-info'>
                        {repo.stargazers_count}
                        <FiStar color='DCFF00'/>
                      </div>
                      
                      <div className='forks-info'>
                        {repo.forks}
                        <FiShare2 id='icon2' color='008FFF'/>
                      </div>
                    </div>
                  </li>)
                })
              }
            </ul>
          </div>
        }
</div>

        
        <Footer/>
      </div>
    </div>
  )
}

export default ReposList;