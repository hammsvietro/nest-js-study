import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './user.model';

@Entity()
@ObjectType()
export class Pet {
  
  @PrimaryColumn()
  @Field(type => Int, {nullable: true})
  id?: number;

  @ManyToOne(type => User, user => user.pets)
  @Field(type => Int)
  user?: User;

  @Column() 
  @Field()
  animal: string;
  
  @Column()
  @Field()
  name: string;
}