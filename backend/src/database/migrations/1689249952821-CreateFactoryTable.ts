import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFactoryTable1689249952821 implements MigrationInterface {
    name = 'CreateFactoryTable1689249952821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "factory" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1372e5a7d114a3fa80736ba66bb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "factory"`);
    }

}
