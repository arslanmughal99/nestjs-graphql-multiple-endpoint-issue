import { Resolver  } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { MessageModel } from './message-model.graphql';

@Resolver('ModelMessage')
export class MessagesResolver {
    allMessages: MessageModel[] = [
        { id: 1, msg: 'message 1' },
        { id: 2, msg: 'message 2' },
        { id: 3, msg: 'message 3' },
        { id: 4, msg: 'message 4' },
        { id: 5, msg: 'message 5' },
    ]

    @Query(type => [MessageModel])
    messages(): MessageModel[] {
        return this.allMessages;
    }
}