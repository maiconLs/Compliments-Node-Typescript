import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";

class CreateTagService{
  async execute(name: string){
    const tagRepository = getCustomRepository(TagRepositories);

    if(!name){
      throw new Error("Incorrect name!")
    }
  }
}