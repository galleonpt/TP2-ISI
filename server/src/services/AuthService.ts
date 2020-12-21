import {Request, Response, NextFunction} from 'express'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserInterface{
  username:string,
  id:number;
}
export default class AuthService{
  public static async hashPW(pw:string, salt=10){
    return await bcrypt.hash(pw, salt)
  }

  public static async comparePW(originalPW:string, hashedPW:string){
    return await bcrypt.compare(originalPW, hashedPW)
  }

  public static generateToken(user:UserInterface) {
    return jwt.sign({
      id:user.id,
      username:user.username
    }, <string>process.env.TOKEN,{
      expiresIn: process.env.EXPIRE_TIME
    })
  }

  private static decodeToken(token:string){
    return jwt.verify(token, <string>process.env.TOKEN)
  }

  public static verifyToken(request:Request, response:Response, next:NextFunction){
    // const token = request.get('Authentication')
    const token = request.header('Authentication')
    
    if(!token)
      return response.status(401).json({message:"Access Denied!"})
    
    try {
      const decodedToken = AuthService.decodeToken(token)
      response.locals.token = decodedToken

      next()
    } catch (error) {
      return response.status(401).json({message: 'Invalid Token!'})
    }
  }
}