/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('element_game').del()
  await knex('element_game').insert([
    {
      "element_name" : "Lightning",
      "element_icon" : "http://localhost:3000/uploads/1/element/lightning_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Fire",
      "element_icon" : "http://localhost:3000/uploads/1/element/fire_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Wind",
      "element_icon" : "http://localhost:3000/uploads/1/element/wind_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Ice",
      "element_icon" : "http://localhost:3000/uploads/1/element/ice_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Physical",
      "element_icon" : "http://localhost:3000/uploads/1/element/phy_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Quantum",
      "element_icon" : "http://localhost:3000/uploads/1/element/quantum_hsr.webp",
      "game_id" : 1
    },
    {
      "element_name" : "Imaginary",
      "element_icon" : "http://localhost:3000/uploads/1/element/imaginary_hsr.webp",
      "game_id" : 1
    },
  ]);
};
