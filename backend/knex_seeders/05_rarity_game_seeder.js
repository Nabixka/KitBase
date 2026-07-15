/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rarity_game').del()
  await knex('rarity_game').insert([

    // HSR
    {
      "game_id": "1",
      "value": 3,
      "icon" : "/uploads/1/rarity/3_star_hsr.webp"
    },
    {
      "game_id": "1",
      "value": 4,
      "icon" : "/uploads/1/rarity/4_star_hsr.webp"
    },
    {
      "game_id": "1",
      "value": 5,
      "icon" : "/uploads/1/rarity/5_star_hsr.webp"
    },

    // GI
    {
      "game_id" : 2,
      "value" : 3,
      "icon" : "/uploads/2/rarity/3_star_gi.webp"
    },
    {
      "game_id" : 2,
      "value" : 4,
      "icon" : "/uploads/2/rarity/4_star_gi.webp"
    },
    {
      "game_id" : 2,
      "value" : 5,
      "icon" : "/uploads/2/rarity/5_star_gi.webp"
    },

    // ZZZ
    {
      "game_id" : 3,
      "value" : 3,
      "icon" : "/uploads/2/rarity/3_star_zzz.webp"
    },
    {
      "game_id" : 3,
      "value" : 4,
      "icon" : "/uploads/2/rarity/4_star_zzz.webp"
    },
    {
      "game_id" : 3,
      "value" : 5,
      "icon" : "/uploads/2/rarity/5_star_zzz.webp"
    },
  ]);
};
