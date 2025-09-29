const { addEmployee, findEmployee, updateEmployee, deleteEmployee, getEmployees, getDistinctFields } = require("../services/dbServices");
const { db } = require("../startup/databaseStartup");

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

employeeController.deleteEmployee = async (req, res) => {
    try {
        const { employeeId } = req.query;
        const result = await deleteEmployee({ employeeId });
        if (!result) {
            return res.status(400).json({ message: 'Employee not found or no changes made.' })
        }
        return res.status(200).json({ message: 'Employee data deleted successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }
}

employeeController.filterEmployee = async (req, res) => {
    try {
        const data = req.query;
        let query = db('employees');

        if (Object.hasOwn(data, 'position')) {
            query.where('position', data.position);
        }
        if (Object.hasOwn(data, 'name')) {
            query.where('name', 'like', `%${data.name}%`);
        }
        const employees = await query;
        return res.status(200).json({ employees });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

employeeController.getEmployees = async (req, res) => {
    try {
        const employees = await getEmployees();
        const positions = await getDistinctFields('position');
        if (employees.length === 0) {
            return res.status(200).json({ message: 'There are currently no employees' });
        }
        return res.status(200).json({ employees, positions });
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = employeeController;