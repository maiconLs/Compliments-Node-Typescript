import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1641939979979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "tags",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "creadted_at",
              type: "timestamp",
              
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
