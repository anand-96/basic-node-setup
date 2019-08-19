import { MigrationInterface, QueryRunner } from 'typeorm'

export class currencyWalletUser1562250424453 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "user_type" "users_user_type_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`)
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "users"`)
    await queryRunner.query(`DROP TYPE "users_user_type_enum"`)
  }
}
