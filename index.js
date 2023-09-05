const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'list',
        message: "What would you like to do?",
        name: 'task',
        choices:    [
                    'View all Departments', 'view all roles', 'view all employess',
                    'add a department', 'add a role', 'add an employee', 'update an employee role'
                    ]

    }, {

        // if new department 
        type: 'input',
        message: 'What is the department name you want to add',
        name: 'newDepartment'
    }, {

        // if new employee
        type: 'input',
        message: 'New employee first name: ',
        name: 'newFirstName'
    }, {
        type: 'input', 
        message: "New employee last name: ",
        name: 'newLastName'
    }, {
        type: 'input',
        message: 'New employee role id: ',
        name: "newEmployeeId"




        // if new role is selected: 
    }, {
        type: 'input',
        message: 'New role title: ',
        name: 'newRole'
    }, {
        type: 'input',
        message: 'New role Salary: ', 
        name: 'newSalary'
    }, {
        type: 'input', 
        message: "New role's department id: ",
        name: 'newDepartmentId'
    }, 
]).then((results) => {
    // if (results.task === 'View all Departments') {
    //     joinTables = "SELECT * FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;"
    //     fs.writeFile('userInput.txt', joinTables, (err) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }
    //         console.log('input file created')
    //     })
    // }
    console.log(results)
});