const knex = require("knex");
const config = require("../../knexfile");

const db = knex(config.development);

async function connectDB() {
    try {
        await db.raw("SELECT 1");
        console.log("Connected to SQLite database");
        return db;
    } catch (err) {
        console.error("Failed to connect to database:", err);
        throw err;
    }
}


module.exports = { connectDB, db };
