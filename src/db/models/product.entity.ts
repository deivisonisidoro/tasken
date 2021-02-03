import { Field, ObjectType, ID, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'products' })
export default class Product {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'product_name' })
  productName: string;

  @Field()
  @Column()
  manufacturer: string;

  @Field(() => Int)
  @Column({ name: 'stock_quantity' })
  stockQuantity: number;

  @Field(() => Int)
  @Column()
  price: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
