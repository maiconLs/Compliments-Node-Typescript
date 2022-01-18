import { Request, Response } from 'express';
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService';

class ListUserSendComplimentsController{
  async handle(request: Request, response: Response){

    const complimentsService = new ListUserSendComplimentsService

    const compliments = complimentsService.execute()
  }
}

export { ListUserSendComplimentsController }