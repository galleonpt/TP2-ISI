import React, {useState, ChangeEvent} from 'react';
import {useHistory, Link} from 'react-router-dom'

import './styles.css'

import api from '../../services/api'

function CreateAcc(){
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    github_name:""
  });
  
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target; //value = conteúdo do input

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(){

    const {username, password, github_name} = formData;

    await api
            .post("users", {
              username, 
              password, 
              github_name
            })
            .then(() => {
              alert('Conta criada com sucesso!')
              history.push('/')
            })
            .catch(() => {
              alert('Utilizador já existe!');
            });
  }

  return(
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Criar Conta</h2>
        <div className="form-group">
          <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="github_name" placeholder="Github username" onChange={handleInputChange}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>

      <div className="hint-text">
        Já tem conta criada?   
        <Link to="/">
          Click aqui
        </Link>
      </div>
    </div>
  )
}

export default CreateAcc;