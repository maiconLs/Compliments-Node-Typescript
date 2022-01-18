import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController{
  async handle(request: Request, response: Response){
    const createComplimentService = new CreateComplimentService;

    const { tag_id, user_sender, use}

    const compliment = CreateComplimentService.execute()
  }
}