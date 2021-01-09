import { Request, Response } from 'express'
import AuthService from '../services/AuthService'

import db from '../database/connection'

export default class AuthenticationController{
  public async login(request: Request, response: Response){
    try{ 
      
      const { username, password } = request.body;
  
      const user =  await db('users').where('username', username).first()

      if (!user)
        return response.json({
          code: 401,
          message: 'User not found!',
        });

      if (!(await AuthService.comparePW(password, user.password))) {
        return response.json({
          code: 401,
          message: 'Incorrect Password',
        });
      }

      const token = AuthService.generateToken(user);

      return response.header('authentication', token).send(token);
    }catch(error){
      console.log(error)
    }
  }
}