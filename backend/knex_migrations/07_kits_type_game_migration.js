/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('kits_type_game', function(table){
    table.increments()
    table.string('kits_type_name').notNullable()
    table.integer('game_id').unsigned().notNullable().index()

    table.foreign('game_id').references('game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('kits_type_game')
};
