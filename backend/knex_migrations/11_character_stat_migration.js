/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('character_stat', function(table){
    table.increments()
    table.integer('character_id').unsigned().notNullable()
    table.integer('stat_id').unsigned().notNullable()
    table.integer('value').notNullable()

    table.foreign('character_id').references('characters.id').onDelete('CASCADE')
    table.foreign('stat_id').references('stats_game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('character_stat')
};
