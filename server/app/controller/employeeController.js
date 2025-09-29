const { addEmployee } = require("../services/dbServices");

const employeeController = {};

employeeController.addEmployee = async (req, res) => {
    try {
        const { name, email, position } = req.body;
        await addEmployee({ name, email, position });
        return res.status(200).json({ message: 'Employee added successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = employeeController;