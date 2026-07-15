/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stats_game').del()
  await knex('stats_game').insert([

    // HSR
    {
      "game_id": 1,
      "stat_id" : 1,
      "icon": "/uploads/1/stats_icon/base_hp.webp"
    }, // 1
    {
      "game_id": 1,
      "stat_id" : 2,
      "icon": "/uploads/1/stats_icon/base_atk.webp"
    }, // 2
    {
      "game_id": 1,
      "stat_id" : 3,
      "icon": "/uploads/1/stats_icon/base_deff.webp"
    }, // 3
    {
      "game_id": 1,
      "stat_id" : 4,
      "icon": "/uploads/1/stats_icon/base_spd.webp"
    }, // 4
    {
      "game_id": 1,
      "stat_id" : 10,
      "icon": "/uploads/1/stats_icon/max_energy.webp"
    }, // 5
    {
      "game_id": 1,
      "stat_id" : 5,
      "icon" : "/uploads/1/stats_icon/hp.webp"
    }, // 6
    {
      "game_id": 1,
      "stat_id" : 6,
      "icon" : "/uploads/1/stats_icon/atk.webp"
    }, // 7
    {
      "game_id": 1,
      "stat_id" : 7,
      "icon" : "/uploads/1/stats_icon/def.webp"
    }, // 8
    {
      "game_id": 1,
      "stat_id" : 8,
      "icon" : "/uploads/1/stats_icon/cr.webp"
    }, // 9
    {
      "game_id": 1,
      "stat_id" : 9,
      "icon" : "/uploads/1/stats_icon/cdm.webp"
    }, // 10

    // GI
    {
      "game_id": 2,
      "stat_id" : 1,
      "icon": "/uploads/2/stats_icon/base_hp.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 2,
      "icon": "/uploads/2/stats_icon/base_atk.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 3,
      "icon": "/uploads/2/stats_icon/base_deff.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 5,
      "icon" : "/uploads/2/stats_icon/hp.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 6,
      "icon" : "/uploads/2/stats_icon/atk.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 7,
      "icon" : "/uploads/2/stats_icon/def.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 8,
      "icon" : "/uploads/2/stats_icon/cr.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 9,
      "icon" : "/uploads/2/stats_icon/cdm.webp"
    },
    {
      "game_id": 2,
      "stat_id" : 11,
      "icon" : "/uploads/2/stats_icon/em.webp"
    },

    // ZZZ
    {
      "game_id": 3,
      "stat_id" : 1,
      "icon": "/uploads/3/stats_icon/base_hp.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 2,
      "icon": "/uploads/3/stats_icon/base_atk.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 3,
      "icon": "/uploads/3/stats_icon/base_deff.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 5,
      "icon" : "/uploads/3/stats_icon/hp.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 6,
      "icon" : "/uploads/3/stats_icon/atk.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 7,
      "icon" : "/uploads/3/stats_icon/def.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 8,
      "icon" : "/uploads/3/stats_icon/cr.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 9,
      "icon" : "/uploads/3/stats_icon/cdm.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 9,
      "icon" : "/uploads/3/stats_icon/cdm.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 12,
      "icon" : "/uploads/3/stats_icon/am.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 13,
      "icon" : "/uploads/3/stats_icon/ap.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 14,
      "icon" : "/uploads/3/stats_icon/impact.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 15,
      "icon" : "/uploads/3/stats_icon/pen.webp"
    },
    {
      "game_id": 3,
      "stat_id" : 16,
      "icon" : "/uploads/3/stats_icon/er.webp"
    },
  ]);
};
