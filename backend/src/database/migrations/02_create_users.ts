import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('username', 20).notNullable();
        table.string('password', 20).notNullable();
        table.string('email', 100).notNullable();
        table.string('telephone', 20).notNullable();
        table.string('cargo', 50).notNullable();
        table.integer('sector_id').notNullable().references('id').inTable('sectors');
        table.integer('code_id').notNullable().references('id').inTable('codes');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}