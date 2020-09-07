import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Pet } from './models/pet.model';
import { User } from './models/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Pet])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
