
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments()
      .index();
    table.string('card_name', 40)
      .unique()
      .notNullable()
      .index();
    table.string('idol_name', 25)
      .notNullable();
    table.foreign('idol_name').references('idols.name');
    table.integer('happy')
      .notNullable();
    table.integer('pure')
      .notNullable();
    table.integer('cool')
      .notNullable();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards');
};
