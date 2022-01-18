import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';

import { v4 as uuid} from 'uuid';
import { Tag } from './Tag';
import { user } from './User';

@Entity("compliments")
class Compliment{
  @PrimaryColumn()
   readonly id: string

  @Column()
  user_sender: string

  @Column()
  user_receiver: string

  @Column()
  tag: string

  @CreateDateColumn()
}