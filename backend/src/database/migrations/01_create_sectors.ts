import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('sectors', table => {
        table.increments('id').primary();
        table.string('description', 50).notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('sectors');
}