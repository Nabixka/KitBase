/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stats_game').del()
  await knex('stats_game').insert([
    {
      "game_id": 1,
      "stat_name": "Base HP",
      "icon": "/uploads/1/stats_icon/base_hp.webp"
    },
    {
      "game_id": 1,
      "stat_name": "Base ATK",
      "icon": "/uploads/1/stats_icon/base_atk.webp"
    },
    {
      "game_id": 1,
      "stat_name": "Base DEFF",
      "icon": "/uploads/1/stats_icon/base_deff.webp"
    },
    {
      "game_id": 1,
      "stat_name": "Base SPD",
      "icon": "/uploads/1/stats_icon/base_spd.webp"
    },
    {
      "game_id": 1,
      "stat_name": "Max Energy",
      "icon": "/uploads/1/stats_icon/max_energy.webp"
    },
    {
      "game_id": 1,
      "stat_name" : "HP",
      "icon" : "/uploads/1/stats_icon/hp.webp"
    },
    {
      "game_id": 1,
      "stat_name" : "ATK",
      "icon" : "/uploads/1/stats_icon/atk.webp"
    },
    {
      "game_id": 1,
      "stat_name" : "DEF",
      "icon" : "/uploads/1/stats_icon/def.webp"
    }
  ]);
};
