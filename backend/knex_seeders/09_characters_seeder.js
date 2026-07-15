/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()
  await knex('characters').insert([
    {
      "name" : "Traiblazer",
      "image" : "/uploads/1/character/tb_phy.png",
      "rarity" : 3,
      "element" : 5
    }
  ]);
};
