
exports.up = function(knex) {
  return knex.schema
    .createTable('events', tbl => {
      tbl.increments();

      tbl.date('start').notNullable();
      tbl.date('end').notNullable();

      tbl.string('title', 128).notNullable();
      tbl.string('description', 256);

      tbl.timestamp("created_at", {useTz: true}).defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
