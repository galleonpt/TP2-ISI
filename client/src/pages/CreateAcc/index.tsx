import React from 'react';
import './styles.css'
function CreateAcc(){
  return(
    <div className="signup-form">
      <form >
        <h2 className="title">Criar Conta</h2>
        <div className="form-group">
          <input type="text" className="form-control" name="Username" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="github" placeholder="Github username" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>

      <div className="hint-text">Já tem conta criada? <a href="#">Click aqui</a></div>
    </div>
  )
}

export default CreateAcc;