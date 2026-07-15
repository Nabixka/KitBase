/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('kits').del()
  await knex('kits').insert([

    // Basic
    {
      "name" : "Farewell Hit",
      "description" : "Deals Physical DMG equal to 100% of the Trailblazer's ATK to one designated enemy.",
      "kits_type_game_id": 1,
      "image_vidio" : "/uploads/1/kits/vidio/basic_atk_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/basic_atk_phy_tb.webp",
      "target" : "Single Target"
    },

    // Skill
    {
      "name" : "RIP Home Run",
      "description" : "Deals Physical DMG equal to 125% of the Trailblazer's ATK to one designated enemy and enemies adjacent to it.",
      "kits_type_game_id": 3,
      "image_vidio" : "/uploads/1/kits/vidio/skill_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/skill_phy_tb.webp",
      "target" : "Blast"
    },

    // Ultimate
    {
      "name" : "Stardust Ace",
      "description" : `Choose between two attack modes to deliver a full strike."Blowout: Farewell Hit" deals Physical DMG equal to 450% of the Trailblazer's ATK to one designated enemy. "Blowout: RIP Home Run" deals Physical DMG equal to 270% of the Trailblazer's ATK to one designated enemy, and Physical DMG equal to 162% of the Trailblazer's ATK to enemies adjacent to it.`,
      "kits_type_game_id": 5,
      "image_vidio" : "/uploads/1/kits/vidio/ulti_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/ulti_phy_tb.webp",
      "target" : "Enhance"
    },
    {
      "name" : "Blowout: Farewell Hit",
      "description" : `Deals Physical DMG equal to 450% of the Trailblazer's ATK to one designated enemy.`,
      "kits_type_game_id": 5,
      "image_vidio" : "/uploads/1/kits/vidio/ulti_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/ulti_phy_tb.webp",
      "target" : "Enhance"
    },
    {
      "name" : "Blowout: RIP Home Run",
      "description" : `Deals Physical DMG equal to 270% of the Trailblazer's ATK to one designated enemy, and Physical DMG equal to 162% of the Trailblazer's ATK to enemies adjacent to it.`,
      "kits_type_game_id": 5,
      "image_vidio" : "/uploads/1/kits/vidio/ulti_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/ulti_phy_tb.webp",
      "target" : "Enhance"
    },

    // Talent
    {
      "name" : "Perfect Pickoff",
      "description" : "Each time after this character inflicts Weakness Break on an enemy, ATK increases by 20%. This effect stacks up to 2 time(s).",
      "kits_type_game_id": 6,
      "image_vidio" : "/uploads/1/kits/vidio/talent_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/talent_phy_tb.webp",
      "target" : "Enhance"
    },

    // Technique
    {
      "name" : "Immortal Third Strike",
      "description" : "Immediately heals all allies for 15% of their respective Max HP after using this Technique.",
      "kits_type_game_id": 7,
      "image_vidio" : "/uploads/1/kits/vidio/tech_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/tech_phy_tb.webp",
      "target" : "Restore"
    },

    // Major Trace
    {
      "name" : "1. Ready for Battle",
      "description" : "At the start of the battle, immediately regenerates 15 Energy.",
      "kits_type_game_id": 9,
      "image_vidio" : "/uploads/1/kits/vidio/trace1_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/trace1_phy_tb.webp"
    },
    {
      "name" : "2. Tenacity",
      "description" : "Each Talent stack increases the Trailblazer's DEF by 10%.",
      "kits_type_game_id": 9,
      "image_vidio" : "/uploads/1/kits/vidio/trace2_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/trace2_phy_tb.webp"
    },
    {
      "name" : "3. Fighting Will",
      "description" : `When using Skill or Ultimate "Blowout: RIP Home Run," DMG dealt to the target enemy is increased by 25%.`,
      "kits_type_game_id": 9,
      "image_vidio" : "/uploads/1/kits/vidio/trace3_phy_tb.vidio",
      "icon" : "/uploads/1/kits/icon/trace3_phy_tb.webp"
    },

    // Minor Trace
    {
      "description" : 18,
      "stats_id" : 6,
      "kits_type_game_id" : 10,
    },
    {
      "description" : 28,
      "stats_id" : 7,
      "kits_type_game_id" : 10,
    },
    {
      "description" : 12.5,
      "stats_id" : 8,
      "kits_type_game_id" : 10,
    },

    // Eidolon
    {
      "name" : "1. A Falling Star",
      "description" : "When enemies are defeated due to the Trailblazer's Ultimate, the Trailblazer regenerates 10 extra Energy. This effect can only be triggered once per attack.",
      "kits_type_game_id" : 8,
      "image_vidio" : "/uploads/1/kits/vidio/e1_phy_tb.webp",
      "icon" : "/uploads/1/kits/icon/e1_phy_tb.webp"
    },
    {
      "name" : "2.An Unwilling Host",
      "description" : "Attacking enemies with Physical Weakness restores the Trailblazer's HP equal to 5% of the Trailblazer's ATK.",
      "kits_type_game_id" : 8,
      "image_vidio" : "/uploads/1/kits/vidio/e2_phy_tb.webp",
      "icon" : "/uploads/1/kits/icon/e2_phy_tb.webp"
    },
    {
      "name" : "3. A Leading Whisper",
      "description" : "Skill Lv. +2, up to a maximum of Lv. 15.Talent Lv. +2, up to a maximum of Lv. 15.",
      "kits_type_game_id" : 8,
      "image_vidio" : "/uploads/1/kits/vidio/e3_phy_tb.webp",
      "icon" : "/uploads/1/kits/icon/e3_phy_tb.webp"
    },
    {
      "name" : "4. A Destructing Glance",
      "description" : "When attacking an enemy that is Weakness Broken, increases CRIT Rate by 25%.",
      "kits_type_game_id" : 8,
      "image_vidio" : "/uploads/1/kits/vidio/e4_phy_tb.webp",
      "icon" : "/uploads/1/kits/icon/e4_phy_tb.webp"
    },
    {
      "name" : "5. A Surviving Hope",
      "description" : "Ultimate Lv. +2, up to a maximum of Lv. 15. Basic ATK Lv. +1, up to a maximum of Lv. 10.",
      "kits_type_game_id" : 8,
      "image_vidio" : "/uploads/1/kits/vidio/e5_phy_tb.webp",
      "icon" : "/uploads/1/kits/icon/e5_phy_tb.webp"
    },
    {
      "name" : "6. A Trailblazing Will",
      "description" : "The Trailblazer's Talent is also triggered when they defeat an enemy.",
      "kits_type_game_id" : 8,
      "image_vidio" : "/uploads/1/kits/vidio/e6_phy_tb.webp",
      "icon" : "/uploads/1/kits/icon/e6_phy_tb.webp"
    },

  ]);
};
