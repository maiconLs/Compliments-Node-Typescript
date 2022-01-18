import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entity/Compliment";

@EntityRepository(Compliment)
  class ComplimentRepositories extends Repository<Compliment>{}


export { ComplimentRepositories }