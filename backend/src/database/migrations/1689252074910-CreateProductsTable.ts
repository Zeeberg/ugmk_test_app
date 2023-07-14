import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsTable1689252074910 implements MigrationInterface {
    name = 'CreateProductsTable1689252074910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" integer NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "product1" integer, "product2" integer, "product3" integer, "factoryId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_58c66d5b2a49cf3c937b61e07f9" FOREIGN KEY ("factoryId") REFERENCES "factory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_58c66d5b2a49cf3c937b61e07f9"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
