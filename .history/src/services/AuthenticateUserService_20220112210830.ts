import {Request, Response} from 'express';

interface IAuthenticateRequest {
  email: string,
}

class AuthenticateUserService{
  async execute()
}

export { AuthenticateUserService }