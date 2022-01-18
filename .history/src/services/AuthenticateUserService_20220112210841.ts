import {Request, Response} from 'express';

interface IAuthenticateRequest {
  email: string,
  password: string
}

class AuthenticateUserService{
  async execute()
}

export { AuthenticateUserService }