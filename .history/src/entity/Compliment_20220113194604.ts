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

  @JoinColumn({User})

  @Column()
  user_receiver: string

  @Column()
  tag: string

  @Column()
  message: string

  @CreateDateColumn()
  created_at: Date
}