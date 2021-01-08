import React, {useState, ChangeEvent, FormEvent} from 'react';
import {Link, useHistory} from 'react-router-dom'
import './styles.css'

import api from '../../services/api'


function Login(){
  const history = useHistory();


  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target; //value = conteúdo do input

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();
    localStorage.clear();
    
    const {username, password} = formData;

    if(!username){
      alert('Username invalido!')
      return;
    }

    if(!password){
      alert('Password invalida!')
      return;
    }
    
    const data= {username, password};

    const response = await api.post('/login', data);

    if(response.data.code===401){ 
      alert(`${response.data.message}`);
      return;
    }

    if(response.status){
      const token= response.data;

      localStorage.setItem('authorization', token);

      history.push('/private/info');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">

            <form className="box" onSubmit={handleSubmit}>
              <h1>Login</h1>

              <p className="text-muted"> Insira o seu username e password!</p> 
              
              <input type="text" name="username" placeholder="Username" onChange={handleInputChange}/> 

              <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/> 

              <Link className="forgot text-muted" to="/newuser">
                Criar conta nova!
              </Link>

              <button type="submit"className="loginbtn">Login</button>
            </form>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Login