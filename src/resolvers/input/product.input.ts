import { Field, InputType } from '@nestjs/graphql';

@InputType()
class ProductInput {
  @Field()
  readonly product_name: string;

  @Field()
  readonly manufacturer: string;

  @Field()
  readonly stock_quantity: number;

  @Field()
  readonly price: number;
}

export default ProductInput;
