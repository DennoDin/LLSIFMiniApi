
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('idols').del()
    .then(function () {
      // Inserts seed entries
      return knex('idols').insert([
        {id: 1, name: 'Kousaka Honoka', unit: 'Muse', sub_unit: 'Printemps'},
        {id: 2, name: 'Sonoda Umi', unit: 'Muse', sub_unit: 'lily white'},
        {id: 3, name: 'Minami Kotori', unit: 'Muse', sub_unit: 'Printemps'},
        {id: 4, name: 'Koizumi Hanayo', unit: 'Muse', sub_unit: 'Printemps'},
        {id: 5, name: 'Nishikino Maki', unit: 'Muse', sub_unit: 'BiBi'},
        {id: 6, name: 'Hoshizora Rin', unit: 'Muse', sub_unit: 'lily white'},
        {id: 7, name: 'Yazawa Nico', unit: 'Muse', sub_unit: 'BiBi'},
        {id: 8, name: 'Tojo Nozomi', unit: 'Muse', sub_unit: 'lily white'},
        {id: 9, name: 'Ayase Eli', unit: 'Muse', sub_unit: 'BiBi'}
      ]);
    });
};
