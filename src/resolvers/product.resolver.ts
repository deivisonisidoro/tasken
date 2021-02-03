import { Args, Mutation, Int, Query, Resolver } from '@nestjs/graphql';
import Product from 'src/db/models/product.entity';
import { Like, MoreThan } from 'typeorm';
import RepoService from '../repo.service';
import { DeleteProduct, ProductInput } from './input/product.input';
@Resolver()
export default class ProductResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Product])
  public async getProducts(): Promise<Product[]> {
    return this.repoService.productRepo.find();
  }

  @Query(() => Product, { nullable: true })
  public async getProduct(@Args('id') id: number): Promise<Product> {
    return this.repoService.productRepo.findOne(id);
  }
  @Query(() => Product, { nullable: true })
  public async getQuantityProduct(): Promise<Product> {
    return await this.repoService.productRepo.createQueryBuilder
      .where('products.id = :id', { id: 1 })
      .getOne();
  }

  @Mutation(() => Product)
  public async createProduct(
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

  @Mutation(() => Product, { nullable: true })
  public async updateProduct(
    @Args('id') id: string,
    @Args('data') input: ProductInput,
  ) {
    const product = {
      productName: input.product_name,
      stockQuantity: input.stock_quantity,
      manufacturer: input.manufacturer,
      price: input.price,
    };
    if (!product) return null;
    const copy = { ...product };
    await this.repoService.productRepo.update(id, product);
    return copy;
  }
  @Mutation(() => Product, { nullable: true })
  public async deleteProduct(
    @Args('data') input: DeleteProduct,
  ): Promise<Product> {
    const product = await this.repoService.productRepo.findOne(input.id);

    if (!product) return null;

    const copy = { ...product };

    await this.repoService.productRepo.remove(product);
    return copy;
  }
}
