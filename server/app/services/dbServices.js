const { db } = require("../startup/databaseStartup");

async function addEmployee(employee){
    return await db("employees").insert(employee);
}

async function findEmployee(filter){
    return await db("employees").where(filter);
}

async function getEmployee(){
    return await db('employees').select('*');
}

async function updateEmployee(query, filter){
    return await db('employees').where(filter).update(query);
}

module.exports = {
    addEmployee,
    findEmployee,
    getEmployee,
    updateEmployee
}