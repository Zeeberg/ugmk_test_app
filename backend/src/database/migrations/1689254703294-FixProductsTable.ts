import { MigrationInterface, QueryRunner } from "typeorm";

export class FixProductsTable1689254703294 implements MigrationInterface {
    name = 'FixProductsTable1689254703294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "date" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying NOT NULL`);
    }

}
