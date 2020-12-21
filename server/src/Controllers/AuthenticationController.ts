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

  
      return response.status(200).send('logged in');
    }catch(error){
      console.log(error)
    }
  }
}