import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IComplimentRequest {
  
}

class CreateComplimentService{
  async execute({}){
    const createComplimentService = getCustomRepository(ComplimentsRepositories)

  }
}