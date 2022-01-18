import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entity/Tag";

@EntityRepository(Tag)
class TagRepositories extends Repository<Tag>{}

export { TagRepositories }