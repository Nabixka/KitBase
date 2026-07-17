/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('character_game').del()
  await knex('character_game').insert([
    {
      "game_id" : 1,
      "character_id" : 1
    },
    {
      "game_id" : 1,
      "character_id" : 2
    },
    {
      "game_id" : 2,
      "character_id" : 3
    },
    {
      "game_id" : 2,
      "character_id" : 4
    },
  ]);
};
