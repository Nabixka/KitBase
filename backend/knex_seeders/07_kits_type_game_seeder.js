/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kits_type_game').del()
  await knex('kits_type_game').insert([

    // HSR
    {
      "kits_type_name" : "Basic ATK",
      "game_id" : 1
    },
    {
      "kits_type_name" : "Enhanced Basic ATK",
      "game_id" : 1
    },
    {
      "kits_type_name" : "Skill",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Enhanced Skill",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Ultimate",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Talent",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Technique",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Eidolon",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Major Trace",
      "game_id" : 1 
    },
    {
      "kits_type_name" : "Minor Trace",
      "game_id" : 1 
    },

    // Gi
    {
      "kits_type_name" : "Normal Attack",
      "game_id" : 2
    },
    {
      "kits_type_name" : "Charged Attack",
      "game_id" : 2
    },
    {
      "kits_type_name" : "Plunging Attack",
      "game_id" : 2
    },
    {
      "kits_type_name" : "Elemental Skill",
      "game_id" : 2
    },
    {
      "kits_type_name" : "Elemental Burst",
      "game_id" : 2
    },
    {
      "kits_type_name" : "Passive",
      "game_id" : 2
    },
    {
      "kits_type_name" : "Constelation",
      "game_id" : 2
    },
  ]);
};
