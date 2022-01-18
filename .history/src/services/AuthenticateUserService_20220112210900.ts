import {Request, Response} from 'express';

interface IAuthenticateRequest {
  email: string,
  password: string,
}

class AuthenticateUserService{
  async execute({email, password}: I)
}

export { AuthenticateUserService }