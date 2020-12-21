import bcrypt from 'bcrypt';

export default class AuthService{
  public static async hashPW(pw:string, salt=10){
    return await bcrypt.hash(pw, salt)
  }

  public static async comparePW(originalPW:string, hashedPW:string){
    return await bcrypt.compare(originalPW, hashedPW)
  }
}