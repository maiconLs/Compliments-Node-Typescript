import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
  async handle(request: Request, response:Response){
    const { name, email, admin } = request.body

    
  }
}