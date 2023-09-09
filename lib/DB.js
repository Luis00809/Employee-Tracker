const connection = require('../db/connections');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    createEmployeeQuery(newFirstName, newLastName, newEmployeeId) {
        return this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id) value ('${newFirstName}', '${newLastName}', ${newEmployeeId});`);
    }

    createDepartment (newDepartment) {
        return this.connection.promise().query(`INSERT INTO department (name) VALUE ("${newDepartment}");`)
    }

    createRole(newRole, newSalary, newDepartmentId ) {
        return this.connection.promise().query(`INSERT INTO role (title, salary, department_id)
        VALUE ('${newRole}', ${newSalary}, ${newDepartmentId});`)
    }

    displayEmployees() {
        return this.connection.promise().query("SELECT * FROM employee;");
    }

    displayRoles() {
        return this.connection.promise().query("SELECT * FROM role;");
    }

    displayDepartments() {
        return this.connection.promise().query("SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;");
    }

    updateEmployee () {
        return this.connection.promise().query(`UPDATE employee
        SET role_id = (
            SELECT id
            FROM role
            WHERE title = '${updatedRole}'
        )
        WHERE first_name = '${employeeFirst}'
        AND last_name = '${employeeLast}';`)
    }
}

module.exports = new DB(connection);