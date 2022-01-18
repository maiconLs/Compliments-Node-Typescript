import {Entity} from "typeorm";

@Entity("users")
class User {
  id: string

  name: string

  email: string

  admin: boolean

  createat: Date

  up

}

export { User }
