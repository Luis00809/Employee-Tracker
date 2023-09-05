INSERT INTO department (name)
VALUE   ('Sales'),
        ('Finance'),
        ('Management'),
        ('Marketing');

-- find a way to auto-increment department id

INSERT INTO role (title, salary, department_id)
    VALUE   ('lead Sales', 100000, 1),
            ('jr sales', 75000, 1),
            ('Accountant', 200000, 2),
            ('Assisting Accountant', 100000, 2),
            ('CEO', 400000, 3),
            ('Manager', 60000, 3),
            ('Marketing lead', 80000, 4),
            ('Marketing Assistant', 55000, 4);

INSERT INTO employee (first_name, last_name, role_id )
VALUE   ('Luis', "Carbajal", 5),
        ('David', "Smith", 1 ),
        ('John', 'Doe', 2),
        ('Maria', 'Garcia', 3),
        ('Crystal', "Le", 4),
        ('Josh', 'Baker', 6),
        ('Jane', "Doe", 7),
        ('Sam', 'Lopez', 8);
