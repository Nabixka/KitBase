/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('rarity_game', function(table){
    table.increments()
    table.string('value').notNullable()
    table.text('icon').notNullable()
    table.integer('game_id').unsigned().notNullable().index()

    table.foreign('game_id').references('game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('rarity_game')
};
