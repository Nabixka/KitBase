/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stats_game', function(table){
    table.increments()
    table.integer("game_id").unsigned().notNullable().index()
    table.integer('stat_id').unsigned().notNullable()
    table.text('icon').notNullable()

    table.foreign("game_id").references("game.id").onDelete('CASCADE')
    table.foreign("stat_id").references("stat.id").onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stats_game')
};
