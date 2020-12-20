import { Request, Response } from 'express'
import db from '../database/connection'

export default class UserController{
  async create(request:Request, response:Response){
    try {
      const {username, password, github_name} = request.body
    
      const alreadyExists = await db('users').where('username', username)
      
      if (alreadyExists)
        return response.status(400).json({message:"User already exists!"})

      await db('users').insert({
        username, 
        password, 
        github_name
      })
  

      return response.status(201).send({username, password})
    } catch (error) {
      return response.send(error)
    }
  }
}

// index,
// show,
// update,
// delete,
// create