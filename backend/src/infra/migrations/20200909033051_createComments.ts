import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('comments', table => {
    table.string('id').primary().notNullable();
    table.string('textComment').notNullable();
    table.integer('postID').references('id').inTable('posts');
    table.integer('commentUserID').references('id').inTable('users');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('comments');
}
