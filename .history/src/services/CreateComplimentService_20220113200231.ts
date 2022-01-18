import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface I

class CreateComplimentService{
  async execute({}){
    const createComplimentService = getCustomRepository(ComplimentsRepositories)

  }
}