import { getRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"



class ListUserSendComplimentsService {
  async execute(user_id: string){

    const listUserSendComplimentsService = getRepository(ComplimentsRepositories)
  }
}

export { ListUserSendComplimentsService }