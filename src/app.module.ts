import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { Pet } from './users/models/pet.model';
import { User } from './users/models/user.model';


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/database.sqlite',
      entities: [User, Pet],
      logging: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'schema.gql'),
  })],
})
export class AppModule {}
