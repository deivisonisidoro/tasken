import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field()
  readonly product_name: string;

  @Field()
  readonly manufacturer: string;

  @Field()
  readonly stock_quantity: number;

  @Field()
  readonly price: number;
}

@InputType()
export class DeleteProduct {
  @Field()
  readonly id: number;
}
