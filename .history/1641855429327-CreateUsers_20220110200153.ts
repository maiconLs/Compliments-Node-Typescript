import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1641855429327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(
       new Table ({
         name: "users",
         
       })
     )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
