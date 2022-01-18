import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService{
  async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){
    const complimentRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepositories = getCustomRepository(UsersRepositories)

  }
}

export { CreateComplimentService }