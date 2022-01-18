import { getRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"



class ListUserSendComplimentsService {
  async execute(user_id: string){

    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = complimentsRepositories.find({
      where: {
        usersender: user_id
      }
    })
  }
}

export { ListUserSendComplimentsService }