/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('element_game').del()
  await knex('element_game').insert([

    // HSR
    {
      "element_name" : "Lightning",
      "element_icon" : "/uploads/1/element/lightning_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Fire",
      "element_icon" : "/uploads/1/element/fire_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Wind",
      "element_icon" : "/uploads/1/element/wind_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Ice",
      "element_icon" : "/uploads/1/element/ice_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Physical",
      "element_icon" : "/uploads/1/element/phy_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Quantum",
      "element_icon" : "/uploads/1/element/quantum_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Imaginary",
      "element_icon" : "/uploads/1/element/imaginary_hsr.webp",
      "game_id" : 1
    },

    // Gi
    {
      "element_name" : "Anemo",
      "element_icon" : "/uploads/2/element/anemo_gi.webp",
      "game_id" : 2
    }, // 8
    {
      "element_name" : "Pyro",
      "element_icon" : "/uploads/2/element/pyro_gi.webp",
      "game_id" : 2
    },
    {
      "element_name" : "Hydro",
      "element_icon" : "/uploads/2/element/hydro_gi.webp",
      "game_id" : 2
    },
    {
      "element_name" : "Dendro",
      "element_icon" : "/uploads/2/element/dendro_gi.webp",
      "game_id" : 2
    },
    {
      "element_name" : "Electro",
      "element_icon" : "/uploads/2/element/electro_gi.webp",
      "game_id" : 2
    },
    {
      "element_name" : "Geo",
      "element_icon" : "/uploads/2/element/geo_gi.webp",
      "game_id" : 2
    },

    // ZZZ
    {
      "element_name" : "Anemo",
      "element_icon" : "/uploads/3/element/anemo_gi.webp",
      "game_id" : 3
    },
  ]);
};
