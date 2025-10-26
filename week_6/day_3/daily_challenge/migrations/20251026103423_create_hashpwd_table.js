/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('hashpwd', function (table) {
    table.increments('id').primary(); // auto-increment id
    table.string('username').notNullable().unique();
    table.string('password').notNullable(); // hashed password
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hashpwd');
};
