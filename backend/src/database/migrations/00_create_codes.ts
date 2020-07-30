import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('codes', table => {
        table.increments('id').primary();
        table.string('code', 50).notNullable();
        table.boolean('isAdmin').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('codes');
}