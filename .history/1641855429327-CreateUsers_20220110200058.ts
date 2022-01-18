import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1641855429327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable({})
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
