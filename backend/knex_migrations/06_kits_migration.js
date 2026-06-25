/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('kits', function(table){
    table.increments()
    table.string('name').nullable()
    table.text('description').notNullable()
    table.integer('cooldown').notNullable().defaultTo(0)
    table.integer('stats_id').unsigned().nullable()
    table.integer('kits_type_game_id').unsigned().notNullable()
    table.text('image_vidio').nullable()
    table.text('icon').notNullable()
    table.enum('target', ['Single Target', 'Bounce', 'AoE', 'Blast', 'Support', 'Restore', 'Defense', 'Impair', 'Stealth', 'Enhance']).nullable()

    table.foreign('kits_type_game_id').references('kits_type_game.id').onDelete('CASCADE')
    table.foreign('stats_id').references('stats_game.id').onDelete('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('kits')
};
