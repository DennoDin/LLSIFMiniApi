
exports.up = function (knex, Promise) {
  return knex.schema.createTable('idols', (table) => {
    table.increments()
      .index();
    table.string('name', 40)
      .unique()
      .notNullable()
      .index();
    table.string('unit', 25)
      .notNullable();
    table.string('sub_unit', 25);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('idols');
};
