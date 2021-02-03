import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoModule from './repo.module';
import { GraphQLModule } from '@nestjs/graphql';
import ProductResolver from './resolvers/product.resolver';

const graphQLImports = [ProductResolver];
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
