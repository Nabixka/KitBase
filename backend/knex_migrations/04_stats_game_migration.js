/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stats_game', function(table){
    table.increments()
    table.integer("game_id").unsigned().notNullable()
    table.string('stat_name').notNullable()
    table.integer('value').notNullable()

    table.foreign("game_id").references("game.id").onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stats_game')
};
