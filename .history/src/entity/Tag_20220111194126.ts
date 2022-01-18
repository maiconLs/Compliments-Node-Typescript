import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v}

@Entity("tags")
class Tag {
  @PrimaryColumn()
  readonly id: string
}

export { Tag };