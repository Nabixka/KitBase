/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stats_game').del()
  await knex('stats_game').insert([

    // HSR
    {
      "game_id": 1,
      "stat_id" : 1,
      "icon": "/uploads/1/stats_icon/base_hp.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 2,
      "icon": "/uploads/1/stats_icon/base_atk.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 3,
      "icon": "/uploads/1/stats_icon/base_deff.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 4,
      "icon": "/uploads/1/stats_icon/base_spd.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 10,
      "icon": "/uploads/1/stats_icon/max_energy.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 5,
      "icon" : "/uploads/1/stats_icon/hp.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 6,
      "icon" : "/uploads/1/stats_icon/atk.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 7,
      "icon" : "/uploads/1/stats_icon/def.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 8,
      "icon" : "/uploads/1/stats_icon/cr.webp"
    },
    {
      "game_id": 1,
      "stat_id" : 9,
      "icon" : "/uploads/1/stats_icon/cdm.webp"
    }

    // Gi
    
  ]);
};
