
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', (t) => {
    t.string('rarity', 3)
    .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', (t) => {
    t.dropColumn('rarity');
  })
};
