import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('mainreporters', table => {
        table.increments('id').primary();
        table.string('responsible', 50).notNullable();
        table.string('motive', 50).notNullable();
        table.string('description', 200).notNullable();
        table.integer('user_id').references('id').inTable('users').notNullable();
        table.integer('os').references('id').inTable('os').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('mainreporters');
}