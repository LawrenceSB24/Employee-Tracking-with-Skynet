# Employee-Tracking-with-Skynet
A command line application that manages a company's employee database using Node.js, Inquirer, and MySQL

## User Story
```
AS A business owner

I WANT to be able to view and manage the departments, roles, and employees in my company

SO THAT I can organize and plan my business
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I start the application

THEN I am presented with the following options:
> - View all departments
> - View all roles
> - View all employees
> - Add a department
> - Add a role
> - Add an employee
> - Update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names & ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including:
> - Employee ids
> - First names
> - Last names
> - Job titles
> - Departments
> - Salaries
> -  Managers that employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the following:
> - Name of role
> - Salaries for role
> - Department for role
and that role is added into the database

WHEN I choose to add an employee
THEN I am prompted to enter the following for the employee:
> - First name 
> - Last name
> - Role
> - Manager employee reports to
and that employee is added into the database

WHEN I choose to update an employee rolle
THEN I am prompted to select an employee to update and their new role and information is updated to the database
```


## Packages Used for Application
> 1. MySQL2 to connect to MySQL database and preform queries
> 2. Inquirer to interact with user via the command-line
> 3. console.table to print MySQL rows to the console

> Additional package: express

## Getting Started
Schema.sql file should contain the following tables
> - `department`
        - `id: INT PRIMARY KEY`
        - `name: VARCHAR(30)` to hold department title
> - `role`
        - `id: INT PRIMARY KEY`
        - `title: VARCHAR(30)` to hold role title
        - `salary: DECIMAL` to hold rolw salary
        - `department_id: INT` to hold reference to department role belongs to
> - `employee` 
        - `id: INT PRIMARY KEY`
        - `first_name: VARCHAR(30)` to hold employee first name
        - `last_name: VARCHAR(30` to hold employee last name
        - `role_id: INT` to hold reference to employee role
        - `manager_id: INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

> - There will be a different file containing function for performing specific SQL queries

> - Constructor function or class can be helpful in organizing functions
> - A seeds-sql file can be used to pre-populate the database. This will make development of individual features much easier