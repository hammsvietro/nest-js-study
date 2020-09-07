import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pet } from './pet.model';

@Entity()
@ObjectType()
export class User {
  
  @PrimaryGeneratedColumn()
  @Field(type => Int, {nullable: true})
  id?: number;
  
  @Column()
  @Field()
  name: string;

  @OneToMany(type => Pet, pet => pet.user)
  @Field(type => [Pet], {nullable: 'itemsAndList'})
  pets?: Pet[]
}