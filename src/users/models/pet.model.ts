import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field(type => Int)
  id: number;

  @Field()
  animal: string;
  
  @Field()
  name: string;
}