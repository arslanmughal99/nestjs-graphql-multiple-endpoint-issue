import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { User } from './user-model.graphql';

@Resolver('User')
export class UserResolver {

    allUsers: User[] = [
        { id: 1, name: "User name 1" },
        { id: 2, name: "User name 2" },
        { id: 3, name: "User name 3" },
        { id: 4, name: "User name 4" },
        { id: 5, name: "User name 5" },
        { id: 6, name: "User name 6" },
    ]

    @Query(type => [User])
    getUsers(): User[] {
        return this.allUsers;
    }

}
