import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService{
  async execute({email, password}: IAuthenticateRequest){
    const userRepositories = getCustomRepository(UsersRepositories)

    const user = await userRepositories.findOne({
      email,
    })

    if(!user){
      throw new Error("Email/Password incorrect!")
    }
  }
}

export { AuthenticateUserService }