import { ObjectType, Int, Field } from '@nestjs/graphql';
import { Pet } from './pet.model';

@ObjectType()
export class User {
  
  @Field(type => Int, {nullable: true})
  id?: number;

  @Field()
  name: string;

  @Field(type => [Pet], {nullable: 'items'})
  pets?: Pet[]
}