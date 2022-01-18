import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';

import { v4 } from 'uuid';
import { Tag } from './Tag';
import { user } from './User';

@Entity("compliments")
class Compliment{
  name: "id"
}