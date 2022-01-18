import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";

class CreateTagService{
  async execute(name: string){
    const tagRepository = getCustomRepository(TagRepositories);

    if(!name){
      throw new Error("Incorrect name!")
    }

    const tagAlreadyExits = await tagRepository.findOne({name})

    if(tagAlreadyExits){
      throw new Error("Tag already exits!")
    }

    const tag = tagRepository.create({
        name
      })
    
    await tagRepository.save(tag)

    return {tag}
    
  }
}