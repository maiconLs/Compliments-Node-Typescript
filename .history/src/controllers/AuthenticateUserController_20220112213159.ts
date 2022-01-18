import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController{
  async handle(request: Request, response: Response){
    const { email, password } = request.body

    const autheticatedUserService = new AuthenticateUserService()

    const authenticate = await autheticatedUserService.execute({email, password})

    return response.json(authenticate)
  }
}

export { AuthenticateUserController };