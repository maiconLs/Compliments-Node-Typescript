import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IComplimentRequest {
  tag_id: string;
  
}

class CreateComplimentService{
  async execute({}){
    const createComplimentService = getCustomRepository(ComplimentsRepositories)

  }
}