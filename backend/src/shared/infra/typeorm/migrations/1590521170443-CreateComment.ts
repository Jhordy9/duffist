import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateComment1590521170443 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'message_comment',
            type: 'varchar',
          },
          {
            name: 'post_id',
            type: 'uuid',
          },
          {
            name: 'comment_user_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'RelationPostWithComment',
            columnNames: ['post_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'posts',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'RelationUserWithComment',
            columnNames: ['comment_user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('comments');
  }
}
