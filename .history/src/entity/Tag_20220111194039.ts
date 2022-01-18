import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("tags")
class Tag {
  Tag.PrimaryColumn()
}

export { Tag };