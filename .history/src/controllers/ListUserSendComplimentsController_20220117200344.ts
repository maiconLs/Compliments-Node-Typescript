import { Request, Response } from 'express';
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';

class ListUserSendComplimentsController{
  async handle(request: Request, response: Response){

    const complimentsService = new ListUserSendComplimentsService
  }
}

export { ListUserSendComplimentsController }