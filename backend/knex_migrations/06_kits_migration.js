/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('kits', function(table){
    table.increments()
    table.string('name').notNullable()
    table.text('description').notNullable()
    table.integer('level').notNullable().defaultTo(1)
    table.integer('kits_type_game_id').unsigned().notNullable()
    table.text('image_vidio').notNullable()
    table.text('icon').notNullable()
    table.enum('target', ['Single Target', 'Bounce', 'AoE', 'Blast', 'Support', 'Restore', 'Defense', 'Impair', 'Stealth']).notNullable()

    table.foreign('kits_type_game_id').references('kits_type_game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('kits')
};
