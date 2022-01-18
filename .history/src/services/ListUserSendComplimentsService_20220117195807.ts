import { getRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"



class ListUserSendComplimentsService {
  async execute(user_id: string){

    const complimentsRepositories = getRepository(ComplimentsRepositories)

    const compliments = complimentsRepositories.find({
      where{
        user_receiver: user_id
      }
    })
  }
}

export { ListUserSendComplimentsService }