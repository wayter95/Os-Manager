import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('specitications', table => {
        table.increments('id').primary();
        table.string('equipament', 50).notNullable();
        table.string('motive', 50).notNullable();
        table.string('urgency', 20).notNullable();
        table.string('description', 200).notNullable();
        table.integer('user_id').references('id').inTable('users').notNullable();
        table.integer('sector_id').references('id').inTable('sectors').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('specitications');
}