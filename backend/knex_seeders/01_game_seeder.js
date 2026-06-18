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
      image: 'http://localhost:3000/uploads/logo/hsr.webp'
    },
    {
      name: 'Genshin Impact',
      image: 'http://localhost:3000/uploads/logo/gi.webp'
    },
    {
      name: 'Zenless Zone Zero',
      image: 'http://localhost:3000/uploads/logo/zzz.webp'
    }
  ]);
};

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */
// exports.seed = async function(knex) {
//   // 1. Hapus semua data yang ada di tabel game
//   await knex('game').del();

//   const totalData = 100000;
//   const gamesSeeder = [];

//   // 2. Generate 1000 data dengan variasi angka agar unik
//   for (let i = 1; i <= totalData; i++) {
//     gamesSeeder.push({
//       name: `Honkai: Star Rail ${i}`,
//       image: `http://localhost:3000/uploads/honkai_star_rail_${i}`
//     });
//   }

//   await knex.batchInsert('game', gamesSeeder, 100); 
// };