UPDATE employee
SET role_id = (
    SELECT id
    FROM role
    WHERE title = 'Manager' 
)
WHERE first_name = 'David' 
AND last_name = 'Smith'; 

-- where employee first_name matches inputted info from user
-- where employee last name mathced inpuuted info from user
-- change employee.role_id to the same id that matches the role.id