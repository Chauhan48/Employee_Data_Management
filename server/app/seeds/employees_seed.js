/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('employees').del()
  await knex('employees').insert([
    { name: "Anshit Chauhan", email: "anshit@gmail.com", position: "SD1" },
    { name: "Rohit Sharma", email: "rohit@gmail.com", position: "Manager" },
    { name: "Priya Singh", email: "priya@gmail.com", position: "Designer" },
    { name: "Amit Verma", email: "amit@gmail.com", position: "HR" },
    { name: "Sneha Gupta", email: "sneha@gmail.com", position: "SD2" },
    { name: "Ayushi Singh", email: "ayushi@gmail.com", position: "Intern" },
    { name: "Arun Thakur", email: "arun@gmail.com", position: "Designer" },
    { name: "Ronnin Verma", email: "ronnin@gmail.com", position: "HR" },
    { name: "Dev Raj", email: "dev@gmail.com", position: "SD2" }
  ]);
};
