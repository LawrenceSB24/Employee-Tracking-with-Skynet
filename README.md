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

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and information is updated to the database
```


## Packages Used for Application

> 1. MySQL2 to connect to MySQL database and preform queries
> 2. Inquirer to interact with user via the command-line
> 3. console.table to print MySQL rows to the console


## Usage

To run this application you will need to first download three packages:
> 1. Inquirer to allow users interaction with the command line
> 2. MySQL2 to run MySQL in the console
> 3. console.table to show the tables within the database onto the console

To run the application, type in `node server.js` into the command line

There are a series of prompts that will ask you the following:

> 1. View All Departments
> 2. View All Roles
> 3. View All Employees
> 4. Add Department
> 5. Add Role
> 6. Add Employee
> 7. Update Employee Role
> 8. quit

When you select the view all opitons, then a table with information about the departments, roles, and employees in the company are shown.
When the Add options are selected, then you can enter in a new department, new roles, and new employees to the database (within their respective tables)
When the "Updata Employee Role" is selected, then you can update the role of any employee by searching for their name and changing their role. 


The tables can be generated from mysql by typing in the following commands:

> 1. mysql -u root -p (This will intialize mysql and ask for your password)
> 2. source db/schema.sql (This will create a blank table from the schema.sql file)
> 3. source db/seeds.sql (This will fill the tables with placeholder data from the seeds.sql file)
> 4. show tables (This will show all tables in the database)
> 5. SELECT * FROM department (This will show all the contents in the department table)
> 6. SELECT * FROM company_role (This will show all the contents in the role table)
> 7. SELECT * FROM employee (This will show all the contents in the employee table)


## Video Demonstration
Here is the link to the video demonstration of the employee tracker: https://drive.google.com/file/d/1cFvTX-6uDB4PkdCrKD4fGrjNAYfhYZBy/view

#### disclaimers

Ok....so there is a couple things about the tracker that aren't working fully right now (Currently trying to fix said issues)

> 1. The prompt for updating the role of an employee is still going through a few patches at the moment

> Also please note that you will need to enter your own password for the createConnection to connect mysql to the server.js file

## Questions
If you have any further questions, please contact me via
> - Github: https://github.com/LawrenceSB24
> - Email: lawrs22@gmail.com