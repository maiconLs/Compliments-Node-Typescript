import { EntityRepository, Repository } from "typeorm";
import { User } from "../entit/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };