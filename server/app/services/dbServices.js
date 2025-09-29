const { db } = require("../startup/databaseStartup");

async function addEmployee(employee){
    return await db("employees").insert(employee);
}

async function findEmployee(filter){
    return await db("employees").where(filter);
}

async function getEmployees(){
    return await db('employees').select('*');
}

async function updateEmployee(query, filter){
    return await db('employees').where(filter).update(query);
}

async function deleteEmployee(filter){
    return await db('employees').where(filter).del();
}

async function getDistinctFields(filter){
    return await db('employees').distinct(filter).pluck(filter);
}

module.exports = {
    addEmployee,
    findEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
    getDistinctFields
}