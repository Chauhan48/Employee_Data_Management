const { db } = require("../startup/databaseStartup");

async function addEmployee(employee){
    return await db("employees").insert(employee);
}

module.exports = {
    addEmployee
}