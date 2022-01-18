import {Entity} from "typeorm";

@Entity("users")
class User {
  id: string
}

export { User }
