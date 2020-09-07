import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule,
    GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'schema.gql'),
  })],
})
export class AppModule {}
