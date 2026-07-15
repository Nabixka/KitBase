/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([

    // HSR
    {
      "name" : "Traiblazer",
      "image" : "/uploads/1/character/tb_des.png",
      "rarity" : 3,
      "element" : 5
    },
    {
      "name" : "Traiblazer",
      "image" : "/uploads/1/character/tb_pres.png",
      "rarity" : 3,
      "element" : 2
    },

    // GI
    {
      "name" : "Traveler Anemo",
      "image" : "/uploads/2/character/trav_anemo.png",
      "rarity" : 3,
      "element" : 8
    },
    {
      "name" : "Traveler Geo",
      "image" : "/uploads/2/character/trav_geo.png",
      "rarity" : 3,
      "element" : 13
    },
  ]);
};
