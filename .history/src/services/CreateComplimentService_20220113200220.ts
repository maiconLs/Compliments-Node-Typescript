import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class CreateComplimentService{
  async execute({}){
    const createComplimentService = getCustomRepository(ComplimentRepositories)
  }
}