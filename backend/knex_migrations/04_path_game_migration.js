/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('path_game', function(table){
    table.increments()
    table.integer('game_id').unsigned().index()
    table.string('name').notNullable()
    table.text('icon').notNullable()

    table.foreign('game_id').references('game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('path_game')
};
