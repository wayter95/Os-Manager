import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('os', table => {
        table.increments('id').primary();
        table.string('subject', 50).notNullable();
        table.string('priority', 20).notNullable();
        table.string('description', 200).notNullable();
        table.string('equipament', 50).notNullable();
        table.string('local', 30).notNullable();
        table.boolean('exchange').notNullable();
        table.dateTime('createdAt').notNullable();
        table.string('evaluation', 200).notNullable();
        table.string('progress', 20).notNullable();
        table.integer('user_id').references('id').inTable('users').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('os');
}