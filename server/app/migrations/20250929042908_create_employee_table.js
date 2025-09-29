/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("employees", (table) => {
        table.increments("employeeId").primary();
        table.string("name").notNullable();
        table.string("email").unique().notNullable();
        table.string("position").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
