import { Request, Response } from "express";

class AuthenticateUserService{
  async handle(request: Request, response: Response){
    const { email, password } = request.body

    const autheticatedUserService = new AuthenticateUserService()

    
  }
}