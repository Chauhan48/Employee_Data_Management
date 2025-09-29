const { addEmployee, findEmployee, getEmployee, updateEmployee } = require("../services/dbServices");

const employeeController = {};

employeeController.addEmployee = async (req, res) => {
    try {
        const { name, email, position } = req.body;
        const checkEmail = await findEmployee({ email });
        if (checkEmail.length > 0) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        await addEmployee({ name, email, position });
        return res.status(200).json({ message: 'Employee added successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}

employeeController.updateEmployee = async (req, res) => {
    try {
        const { employeeId, name, email, position } = req.body;
        const update = await updateEmployee({ name, email, position }, { employeeId });
        if (!update) {
            return res.status(400).json({ message: 'Employee not found or no changes made.' })
        }
        return res.status(200).json({ message: 'Data updated successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = employeeController;