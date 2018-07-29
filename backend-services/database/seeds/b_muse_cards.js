
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {id: 1, card_name: 'Initial Honoka SR', rarity: 'SR', idol_name: 'Kousaka Honoka', happy: 4330, pure: 3730, cool: 3230},
        {id: 2, card_name: 'Initial Eli SR', rarity: 'SR', idol_name: 'Ayase Eli', happy: 3480, pure: 3780, cool: 4030},
        {id: 3, card_name: 'Initial Kotori SR', rarity: 'SR', idol_name: 'Minami Kotori', happy: 3630, pure: 4320, cool: 3340},
        {id: 4, card_name: 'Initial Umi SR', rarity: 'SR', idol_name: 'Sonoda Umi', happy: 3830, pure: 3300, cool: 4160},
        {id: 5, card_name: 'Initial Rin SR', rarity: 'SR', idol_name: 'Hoshizora Rin', happy: 4430, pure: 3680, cool: 3180},
        {id: 6, card_name: 'Initial Maki SR', rarity: 'SR', idol_name: 'Nishikino Maki', happy: 3260, pure: 3630, cool: 4400},
        {id: 7, card_name: 'Initial Nozomi SR', rarity: 'SR', idol_name: 'Tojo Nozomi', happy: 3470, pure: 4130, cool: 3690},
        {id: 8, card_name: 'Initial Hanayo SR', rarity: 'SR', idol_name: 'Koizumi Hanayo', happy: 3770, pure: 4350, cool: 3170},
        {id: 9, card_name: 'Initial Nico SR', rarity: 'SR', idol_name: 'Yazawa Nico', happy: 4180, pure: 3400, cool: 3710},
        {id: 10, card_name: 'Initial Hanayo UR', rarity: 'UR', idol_name: 'Koizumi Hanayo', happy: 4190, pure: 4930, cool: 3770},
        {id: 11, card_name: 'Initial Nico UR', rarity: 'UR', idol_name: 'Yazawa Nico', happy: 4980, pure: 4090, cool: 3820},
        {id: 12, card_name: 'Initial Umi UR', rarity: 'UR', idol_name: 'Sonoda Umi', happy: 3890, pure: 4050, cool: 4950},
        {id: 13, card_name: 'Initial Honoka UR', rarity: 'UR', idol_name: 'Kousaka Honoka', happy: 4920, pure: 4190, cool: 3780},
        {id: 14, card_name: 'Initial Kotori UR', rarity: 'UR', idol_name: 'Minami Kotori', happy: 4080, pure: 4890, cool: 3920},
        {id: 15, card_name: 'Initial Eli UR', rarity: 'UR', idol_name: 'Ayase Eli', happy: 4040, pure: 3890, cool: 4960},
        {id: 16, card_name: 'Initial Nozomi UR', rarity: 'UR', idol_name: 'Tojo Nozomi', happy: 3890, pure: 5000, cool: 4000},
        {id: 17, card_name: 'Initial Rin UR', rarity: 'UR', idol_name: 'Hoshizora Rin', happy: 4990, pure: 4040, cool: 3860},
        {id: 18, card_name: 'Initial Maki UR', rarity: 'UR', idol_name: 'Nishikino Maki', happy: 3890, pure: 4020, cool: 4980},
      ]);
    });
};
