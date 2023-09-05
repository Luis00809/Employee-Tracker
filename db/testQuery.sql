-- JOINING ALL TABLES: 
-- SELECT *
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON role.department_id = department.id;

-- get departments line:
-- SELECT *
-- FROM department;

-- for roles:
-- SELECT *
-- FROM role;

-- for employees
-- SELECT *
-- FROM employee;

-- adding a department: 
-- INSERT INTO department (name)
-- VALUE ("cleaning");

-- adding a role: 
-- INSERT INTO role (title, salary, department_id)
-- VALUE ('lead clean', 50000, 1);

-- adding an employee: 
-- INSERT INTO employee (first_name, last_name, role_id)
-- value ('bob', 'bob', 5);
