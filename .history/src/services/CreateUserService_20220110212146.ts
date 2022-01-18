import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean,
}

class CreateUserService {
  async execute({name, email}: IUserRequest){
    const usersRepositories = getCustomRepository(UsersRepositories)

    if(!email){
      throw new Error('Email incorrect!')
    }

    const userlAlreadyExit =  await usersRepositories.findOne({ email})

    if(userlAlreadyExit){
      throw new Error
    }
  }
}
