/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('element_game', function(table){
    table.increments()
    table.string('element_name').notNullable()
    table.integer('game_id').unsigned().notNullable().index()
    table.text('element_icon').notNullable()

    table.foreign('game_id').references('game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('element_game')
};
