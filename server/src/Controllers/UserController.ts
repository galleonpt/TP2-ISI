import { Request, Response } from 'express'
import AuthService from '../services/AuthService'
import db from '../database/connection'
export default class UserController{
  async create(request:Request, response:Response){
    try {
      let { username, password, github_name } = request.body
      
      const hashedPW = await AuthService.hashPW(password, 10)
      password=hashedPW

      const alreadyExists =  await db('users').where('username', username).first()
      
      if (alreadyExists)
        return response.status(400).json({message:"User already exists!"})
      
        await db('users').insert({
        username, 
        password, 
        github_name
      })

      return response.status(201).send({username, password})
    } catch (error) {
      console.log(error)
    }
  }  
}