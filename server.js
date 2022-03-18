// Express package imported
const express = require('express');

// mysql2 package imported
const mysql = require('mysql2');

// Inquirer package imported
const inquirer = require('inquirer');

// console.table package imported
require('console.table');

// Local port for Heroku uploading
const PORT = process.env.PORT || 3001;

// Initializing express
const app = express();

// Middleware for urlencoded and JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "employee_db",
        port: PORT
    },
    console.log("Connection is a go!")
);

// TODO: Listing departments
// Query function for listing all known departments
// Listing roles and employee functions will have similar layout

function selectDep() {
    db.query('SELECT * FROM department')
        .then(([data]) => {
            console.table(data);
            viewTab();
        });
};

// TODO: Listing roles

function selectRole() {
    db.query('SELECT * FROM company_role')
        .then(([data]) => {
            console.table(data);
            viewTab();
        });
};

// TODO: Listing employees
function selectEmps() {
    db.query('SELECT * FROM employee')
        .then(([data]) => {
            console.table(data);
            viewTab();
        });
};

// TODO: Adding a new department
function deptAdd() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'dept_name',
                message: 'Please enter the name of the new department: '
            }
        ])
        .then(res => {
            let deptNew = res.dept_name;
            db.query('INSERT INTO department(name) WHERE values = ?', [deptNew])
                .then(([data]) => {
                    selectDep();
                    console.table(data);
                    viewTab();
                });
        });
};

// TODO: Adding new role
function roleAdd() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'role_name',
                message: 'Please enter the name of the role you want to add: '
            },
            {
                type: 'input',
                name: 'role_salary',
                message: 'Please enter in the salary for the new role: '
            }
        ])
        .then(res => {
            let roleNewName = res.role_name;
            let roleSalary = res.role_salary;
            let departmentId;

            db.query('SELECT * FROM department')
                .then(([data]) => {
                    const depts = data.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }))

                    inquirer.prompt([

                        {
                            type: 'input',
                            name: 'role_department',
                            message: 'Please state which department you want the role to be in: ',
                            choices: depts
                        }
                    ])
                        .then(res => {
                            departmentId = res.deptId
                            db.query('INSERT INTO company_role(title, salary, department_id) WHERE values = (?, ?, ?)', [roleNewName, roleSalary, departmentId])
                                .then(([data]) => {
                                    selectRole();
                                    console.table(data);
                                    viewTab();
                                });
                        });
                });
        });
};

// TODO: Adding new employee

function addEmp() {
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'empFirst',
                message: 'Please enter the FIRST name of the employee'
            },
            {
                type: 'input',
                name: 'empLast',
                message: 'Please enter the LAST name of the employee'
            }
        ])
        .then(res => {
            let empFirst = res.empFirst;
            let empLast = res.empLast;
            let roleID;
            let managerID;

            db.query('SELECT * FROM company_role')
                .then(([data]) => {
                    const roles = data.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }))
                    inquirer
                        .prompt([

                            {
                                type: 'input',
                                name: 'roleID',
                                message: 'What role do you want the employee to have(?): ',
                                choices: roles
                            },
                            {
                                type: 'input',
                                name: 'managerID',
                                message: 'Please enter a manager ID (If not a manager then leave blank): '
                            }
                        ])
                        .then(res => {
                            roleID = res.roleID;
                            managerID = res.managerID;

                            db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) WHERE values = (?, ?, ?, ?)', [empFirst, empLast, roleID, managerID])
                                .then(([data]) => {
                                    selectEmps();
                                    console.table(data);
                                    viewTab();
                                });
                        });
                }
                );
        });
}

// TODO: Updating new employee role
function empRoleUpdate() {
    db.query('SELECT (employee.first_name, employee.last_name, employee.role_id) FROM employee', [roleID])
        .then(([data]) => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'empFirst',
                        message: 'Please enter the FIRST name of the employee'
                    },
                    {
                        type: 'input',
                        name: 'empLast',
                        message: 'Please enter the LAST name of the employee'
                    },
                    {
                        type: 'input',
                        name: 'newRoleID',
                        message: 'What role do you want the employee to have(?): ',
                        choices: roles
                    }
                ])
                .then(res => {
                    let newRoleID = res.newRoleID;
                    db.query('INSERT INTO employee(roleID) WHERE values = ?', [empFirst, empLast, newRoleID, managerID])
                    .then(([data]) => {
                        selectRole();
                        console.table(data);
                        viewTab();
                    });
                });
        });
};
// TODO: Deleting A Department

// TODO: Updating A Department

// TODO: Deleting A Role

// TODO: Updating A Role

// TODO: Deleting A Employee

// TODO: Updating A Employee


// Inquirer prompts for updating the list
function viewTab() {
    inquirer.prompt([
        {
            type: 'list',
            choices: [
                'View Departments',
                'View Roles',
                'View All Employees',
                'View Employees by Department',
                'View Employees by Manager',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Delete Department', 'Update Department',
                'Delete Role', 'Update Role',
                'Delete Employee', 'Update Employee',
                'Done'
            ],
            name: 'menu'
        }
    ])
        .then(userChoice => {
            switch (userChoice.menu) {
                case 'View All Departments':
                    selectDep();
                    break;
                case 'View All Roles':
                    selectRole();
                    break;
                case 'View All Employees':
                    selectEmps();
                    break;
                case 'View Employees by Department':
                    empsDept();
                    break;
                case 'View Employees by Manager':
                    empsMana();
                    break;
                case 'Add Department':
                    deptAdd();
                    break;
                case 'Add Role':
                    roleAdd();
                    break;
                case 'Add Employee':
                    addEmp();
                    break;
                case 'Update Employee Role':
                    empRoleUpdate();
                    break;
                case 'Delete Department':
                    deptDel();
                    break;
                case 'Update Department':
                    deptUpdate();
                    break;
                case 'Delete Role':
                    roleDel();
                    break;
                case 'Update Role':
                    roleUpdate();
                    break;
                case 'Delete Employee':
                    empDel();
                    break;
                case 'Update Employee':
                    empUp();
                    break;
                case 'Done':
                    return;
            }
        });
};