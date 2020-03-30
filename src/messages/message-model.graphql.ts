import { ObjectType, Field, Int } from "@nestjs/graphql";


@ObjectType()
export class MessageModel {

    @Field(type => Int)
    id: number;

    @Field()
    msg: string;

}