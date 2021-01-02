import React from 'react';
import './styles.css'

function Login(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form className="box">
              <h1>Login</h1>
              <p className="text-muted"> Please enter your login and password!</p> 
              <input type="text" name="" placeholder="Username"/> 
              <input type="password" name="" placeholder="Password"/> 
              <a className="forgot text-muted" href="#">Create a new account!</a> 
              <input type="submit" name="" value="Login" />
            </form>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Login