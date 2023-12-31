const fs = require('fs');
const inquirer = require('inquirer');

// const Department = require('./lib/newDepartment');
// const Employee = require('./lib/newEmployee');
// const Role = require('./lib/newRole');
const db = require('./lib/DB');
const { response } = require('express');
const { send } = require('process');
require('console.table');


let rePront = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            name: 'task',
            choices:    [
                        'View all Departments', 'view all roles', 'View all employees',
                        'Add a department', 'Create a role', 'Add an employee', 'Update an employee role', "Quit"
                        ]
    
        }, 
    ]).then((results) => {
        if(results.task === 'Add an employee') {
            inquirer.prompt([
                {
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
                }
            ]).then((employeeInfo) => {
                let newFirstName = employeeInfo.newFirstName;
                let newLastName = employeeInfo.newLastName;
                let newEmployeeId = employeeInfo.newEmployeeId;
    
                db.createEmployeeQuery(newFirstName, newLastName, newEmployeeId).then(rePront());
            });
        
        }
    
        if (results.task === "Add a department") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is the department name you want to add',
                    name: 'newDepartment'
                }
            
            ]).then((departmentInfo) => {
                let newDepartment = departmentInfo.newDepartment;
                db.createDepartment(newDepartment).then(rePront());
            })
        }
    
        if (results.task === "Create a role") {
            inquirer.prompt([
                {
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
            ]).then((roleInfo) => {
                let newRole = roleInfo.newRole;
                let newSalary = roleInfo.newSalary;
                let newDepartmentId = roleInfo.newDepartmentId;
    
                db.createRole(newRole, newSalary, newDepartmentId).then(rePront());
            })
        }
    
        if (results.task === "View all Departments"){
            db.displayDepartments().then(([rows]) => {
                console.table(rows)
            }).then(rePront());
        }
    
        if (results.task === "view all roles") {
            db.displayRoles().then(([rows]) => {
                console.table(rows)
            }).then(rePront());
        }
    
        if (results.task === "View all employees") {
            db.displayEmployees().then(([rows]) => {
                console.table(rows);
            }).then(rePront());
        }
    
        if (results.task === "Update an employee role") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Employee's first name:",
                    name: 'employeeFirst'
                }, {
                    type: 'input',
                    message: "Employee's last name: ", 
                    name: 'employeeLast'
                }, {
                    type: 'input', 
                    message: "Update the employee's role to: ",
                    name: 'updatedRole'
                }, 
            ])
                .then((updateE) => {
                     employeeFirst = updateE.employeeFirst;
                     employeeLast = updateE.employeeLast;
                     updatedRole = updateE.updatedRole;
                     console.log(employeeFirst);
                     console.log(employeeLast);
                     console.log(updatedRole);

                    db.updateEmployee(updatedRole, employeeFirst, employeeLast).then(([rows]) => {
                        console.table(rows);
                    }).then(rePront());
                })
        }

        if(results.task === "Quit") {
            return;
        }
    })
}


rePront();
