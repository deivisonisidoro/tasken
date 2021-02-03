import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Product from './db/models/product.entity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(Product) public readonly productRepo: Repository<Product>,
  ) {}
}

export default RepoService;
