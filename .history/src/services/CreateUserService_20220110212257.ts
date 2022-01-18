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

    const userlAlreadyExits =  await usersRepositories.findOne({ email})

    if(userlAlreadyExits){
      throw new Error("User already exits")
    }

    const user = usersRepositories.create()
  }
}
