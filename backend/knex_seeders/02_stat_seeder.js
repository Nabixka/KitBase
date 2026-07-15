/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stat').del()
  await knex('stat').insert([
    { "stat_name" : "Base HP" }, // 1
    { "stat_name" : "Base ATK" }, // 2
    { "stat_name" : "Base DEF" }, // 3
    { "stat_name" : "Base SPD" }, // 4
    { "stat_name" : "HP%" }, // 5
    { "stat_name" : "ATK%" }, // 6 
    { "stat_name" : "DEF%" }, // 7
    { "stat_name" : "Crit Rate" }, // 8
    { "stat_name" : "Crit DMG" }, // 9
    
    { "stat_name" : "Max Energy" }, // 10

    { "stat_name" : "Elemental Mastery" }, // 11

    { "stat_name" : "Anomaly Mastery" }, // 12
    { "stat_name" : "Anomaly Proficiency" }, // 13
    { "stat_name" : "Impact" }, // 14
    { "stat_name" : "PEN Ratio" }, // 15
    { "stat_name" : "Energy Regen" }, // 16
  ]);
};
