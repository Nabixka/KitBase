/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('character_game', function(table){
    table.increments()
    table.integer('character_id').notNullable().unsigned()
    table.integer('game_id').notNullable().unsigned()

    table.foreign('character_id').references('characters.id').onDelete('CASCADE')
    table.foreign('game_id').references('game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('character_game')
};
