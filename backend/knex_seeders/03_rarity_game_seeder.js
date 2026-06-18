/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rarity_game').del()
  await knex('rarity_game').insert([
    {
      "game_id": "1",
      "value": 3,
      "icon" : "/uploads/1/rarity/3_star.webp"
    },
    {
      "game_id": "1",
      "value": 4,
      "icon" : "/uploads/1/rarity/4_star.webp"
    },
    {
      "game_id": "1",
      "value": 5,
      "icon" : "/uploads/1/rarity/5_star.webp"
    }
  ]);
};
