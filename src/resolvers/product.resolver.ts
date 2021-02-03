import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import Product from 'src/db/models/product.entity';
import RepoService from '../repo.service';
import ProductInput from './input/product.input';
@Resolver()
export default class ProductResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Product])
  public async getProducts(): Promise<Product[]> {
    return this.repoService.productRepo.find();
  }
  @Query(() => Product, { nullable: true })
  public async product(@Args('id') id: number): Promise<Product> {
    return this.repoService.productRepo.findOne(id);
  }

  @Mutation(() => Product)
  public async createAuthor(
    @Args('data') input: ProductInput,
  ): Promise<Product> {
    const product = this.repoService.productRepo.create({
      productName: input.product_name,
      stockQuantity: input.stock_quantity,
      manufacturer: input.manufacturer,
      price: input.price,
    });
    return this.repoService.productRepo.save(product);
  }
}
