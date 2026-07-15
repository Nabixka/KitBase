/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('characters', function(table){
    table.increments()
    table.string('name').notNullable()
    table.text('image').notNullable()
    table.integer('rarity').unsigned().notNullable()
    table.integer('element').unsigned().notNullable()

    table.foreign('rarity').references('rarity_game.id').onDelete('CASCADE')
    table.foreign('element').references('element_game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('characters')
};
