import {
  Request,
  Response,
  NextFunction,
} from 'express';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
){

  const authtoken = request.headers.authorization

  if(!authtoken){
    response.status
  }

  return next()

}