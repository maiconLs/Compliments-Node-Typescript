import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1642030517064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        "users",
        new TableColumn([
          
        ])
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
