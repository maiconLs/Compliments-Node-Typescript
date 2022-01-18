import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){
    const userRepositories = getCustomRepository()
  }
}

export { AuthenticateUserService }