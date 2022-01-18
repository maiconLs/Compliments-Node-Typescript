import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IComplimentService {
  
}

class CreateComplimentService{
  async execute({}){
    const createComplimentService = getCustomRepository(ComplimentsRepositories)

  }
}