/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.integer('publishedYear');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('books');
};
