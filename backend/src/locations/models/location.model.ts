import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field(() => Int)
  courts: number;

  @Field()
  indoor: boolean;
}
