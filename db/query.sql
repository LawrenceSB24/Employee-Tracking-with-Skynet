-- Query for listing all employees
SELECT * FROM department;
-----------------------------------------------------------------

-- Query for listing all roles
SELECT company_role.id AS id,
company_role.title AS title,
department.name AS department,
company_role.salary AS salary

-- Joining department and role tables based on department_id
FROM company_role
JOIN department ON company_role.department_id = department.id
ORDER BY id;

-------------------------------------------------------------------------

-- Query for listing all employees
-- In list format for simpler viewing
SELECT employee.id AS id,
employee.first_name AS first_name,
employee.last_name AS last_name,
company_role.title AS title,
department.name AS department,
company_role.salary AS salary,


-- Query for creating the manager
CONCAT manage(manager.first_name, manager.last_name) AS manager

------------------------------------------------------------------------------

-- Query for joining employee table with role table based on role id
-- Also for updating employee role/finding employes under a manager, 
-- joining department with role table based on department id
FROM employee
LEFT JOIN company_role ON employee.role_id = company_role.id
LEFT JOIN department ON company_role.department_id = department_id

-- Query for selecting managers based on their id
LEFT JOIN employee manage ON employee.manager_id = manager.id;