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

    }
]).then((results) => console.log(results.task));