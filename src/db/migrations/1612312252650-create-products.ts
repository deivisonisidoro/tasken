import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProducts1612297925227 implements MigrationInterface {
  private table = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'product_name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'manufacturer',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'stock_quantity',
        type: 'INTEGER',
        isNullable: true,
      },
      {
        name: 'price',
        type: 'INTEGER',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isPrimary: false,
        isNullable: false,
        default: 'now()',
      },
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
