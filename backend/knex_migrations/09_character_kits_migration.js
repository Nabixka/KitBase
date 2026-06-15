/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('character_kits', function(table){
    table.increments()
    table.integer('character_id').notNullable().unsigned()
    table.integer('kits_id').notNullable().unsigned()

    table.foreign('character_id').references('characters.id').onDelete('CASCADE')
    table.foreign('kits_id').references('kits.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('character_kits')
};
