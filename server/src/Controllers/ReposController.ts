import {Request, Response} from 'express'
import axios from 'axios';
import AuthService from '../services/AuthService'
import db from '../database/connection'


export default class ReposController{

  public async show(request:Request, response:Response){
    const {username} = request.body

    await axios.get(`https://api.github.com/users/${username}/repos`)
      .then(data => { 
        return response.json(data.data)
      })
      .catch(error =>{
        return response.status(404).json(error.message) 
      })
  }

  public async me(request: Request, response: Response){
    const token = request.header('Authentication')

    const aux= AuthService.decodeToken(<string>token)
    
    const logedUser= JSON.parse(JSON.stringify(aux))

    const userinfo =  await db('users').where('id', logedUser.id).first()
    
    await axios.get(`https://api.github.com/users/${userinfo.github_name}/repos`)
      .then(data => { 
        return response.json(data.data)
      })
      .catch(error =>{
        return response.status(404).json(error.message) 
      })
  }
}