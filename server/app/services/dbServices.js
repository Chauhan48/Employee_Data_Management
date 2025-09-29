const { db } = require("../startup/databaseStartup");

async function addEmployee(employee){
    return await db("employees").insert(employee);
}

async function findEmployee(query){
    return await db("employees").where(query);
}

module.exports = {
    addEmployee,
    findEmployee
}