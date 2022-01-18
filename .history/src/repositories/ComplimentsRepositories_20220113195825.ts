import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entity/Compliment";

@EntityRepository{
  class ComplimentRepositories extends Repository<Compliment>{}
}