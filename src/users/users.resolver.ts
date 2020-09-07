import { Resolver, ResolveField, Args, Query, Int, Mutation, NullableList } from '@nestjs/graphql';
import { User } from './models/user.model';
import { Pet } from './models/pet.model';
import { UsersService } from './users.service'


@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Query(returns => User)
  async User(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.find(id);
  }

  @Query(() => [User])
  async Users() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args('name') name: string) {
    return this.usersService.create({name})
  }

  @Mutation(() => Pet)
  async addPet(@Args('id', Int) id: number, @Args('animal') animal: string,@Args('name') name: string) {
    return this.usersService.addPet(id, {animal: animal, name});
  }

}