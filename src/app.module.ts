import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MessagesModule,
    UserModule,
    
    GraphQLModule.forRoot({
      autoSchemaFile: 'userSchema.gql',
      playground: true,
      include: [UserModule],
      path: '/user',
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: 'messageSchema.gql',
      playground: true,
      include: [MessagesModule],
      path: '/msg',
    })
    
  ],
})
export class AppModule { }
