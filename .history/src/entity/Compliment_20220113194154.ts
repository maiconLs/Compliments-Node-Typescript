import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';

import { v4 } from 'uuid';

@Entity("compliments")