/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stats_game', function(table){
    table.increments()
    table.integer("game_id").unsigned()
    table.integer("stats_id").unsigned()

    table.foreign("game_id").references("game.id")
    table.foreign("stats_id").references("stats.id")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stats_game')
};
