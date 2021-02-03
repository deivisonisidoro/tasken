import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  readonly product_name: string;

  @Field()
  readonly manufacturer: string;

  @Field(() => Int)
  readonly stock_quantity: number;

  @Field(() => Int)
  readonly price: number;
}

@InputType()
export class DeleteProduct {
  @Field()
  readonly id: number;
}
