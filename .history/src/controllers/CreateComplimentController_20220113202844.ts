import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController{
  async handle(request: Request, response: Response){
    const createComplimentService = new CreateComplimentService;

    const { tag_id, user_sender, user_receiver, message}= request.body

    const compliment = CreateComplimentService.execute({
      
    })
  }
}