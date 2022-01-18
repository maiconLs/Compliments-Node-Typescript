import {Entity} from "typeorm";

@Entity("users")
class User {
  id: string,

  name: string
}

export { User }
