/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('path_game').del()
  await knex('path_game').insert([

    // HSR
    {
        "name" : "Erudition",
        "icon" : "/uploads/1/path/erudition.webp",
        "game_id" : 1
    },
    {
        "name" : "Preservation",
        "icon" : "/uploads/1/path/preservation.webp",
        "game_id" : 1
    },
    {
        "name" : "Hunt",
        "icon" : "/uploads/1/path/hunt.webp",
        "game_id" : 1
    },
    {
        "name" : "Abundance",
        "icon" : "/uploads/1/path/Abundance.webp",
        "game_id" : 1
    },
    {
        "name" : "Destruction",
        "icon" : "/uploads/1/path/destruction.webp",
        "game_id" : 1
    },
    {
        "name" : "Nihility",
        "icon" : "/uploads/1/path/nihility.webp",
        "game_id" : 1
    },
    {
        "name" : "Remembrance",
        "icon" : "/uploads/1/path/remembrance.webp",
        "game_id" : 1
    },
    {
        "name" : "Harmony",
        "icon" : "/uploads/1/path/harmony.webp",
        "game_id" : 1
    },
    {
        "name" : "Elation",
        "icon" : "/uploads/1/path/elation.webp",
        "game_id" : 1
    },

    // GI
    {
        "name" : "Sword",
        "icon" : "/uploads/2/path/sword_gi.webp",
        "game_id" : 2
    },
    {
        "name" : "Polearm",
        "icon" : "/uploads/2/path/polearm_gi.webp",
        "game_id" : 2
    },
    {
        "name" : "Claymore",
        "icon" : "/uploads/2/path/claymore_gi.webp",
        "game_id" : 2
    },
    {
        "name" : "Catalyst",
        "icon" : "/uploads/2/path/cataylyst_gi.webp",
        "game_id" : 2
    },
    {
        "name" : "Bow",
        "icon" : "/uploads/2/path/bow_gi.webp",
        "game_id" : 2
    },

    // ZZZ
    {
        "name" : "Attack",
        "icon" : "/uploads/3/path/attack_zzz.webp",
        "game_id" : 3
    },
    {
        "name" : "Anomaly",
        "icon" : "/uploads/3/path/anomaly_zzz.webp",
        "game_id" : 3
    },
    {
        "name" : "Stun",
        "icon" : "/uploads/3/path/stun_zzz.webp",
        "game_id" : 3
    },
    {
        "name" : "Support",
        "icon" : "/uploads/3/path/support_zzz.webp",
        "game_id" : 3
    },
    {
        "name" : "Defense",
        "icon" : "/uploads/3/path/defense_zzz.webp",
        "game_id" : 3
    },
    {
        "name" : "Rupture",
        "icon" : "/uploads/3/path/rupture_zzz.webp",
        "game_id" : 3
    },
  ]);
};
