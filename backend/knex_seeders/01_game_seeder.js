/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('game').del()
  await knex('game').insert([
    {
      name: 'Honkai: Star Rail',
      image: '/uploads/logo/hsr.webp'
    },
    {
      name: 'Genshin Impact',
      image: '/uploads/logo/gi.webp'
    },
    {
      name: 'Zenless Zone Zero',
      image: '/uploads/logo/zzz.webp'
    }
  ]);
};