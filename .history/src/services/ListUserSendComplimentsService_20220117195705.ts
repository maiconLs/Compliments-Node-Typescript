import { getRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"



class ListUserSendComplimentsService {
  async execute(user_id: string){

    const compl = getRepository(ComplimentsRepositories)
  }
}

export { ListUserSendComplimentsService }