import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1641939979979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        Table({
          
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
