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
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user:"root",
        password: "",
        database: "employee_db"
    },
    console.log("Connection is a go!")
);

// TODO: Listing departments

// TODO: Listing roles

// TODO: Listing employees

// TODO: Adding a new department

// TODO: Adding new role

// TODO: Adding new employee

// TODO: Updating new employee role

// TODO: Deleting A Department

// TODO: Updating A Department

// TODO: Deleting A Role

// TODO: Updating A Role

// TODO: Deleting A Employee

// TODO: Updating A Employee


// Inquirer prompts for updating the list
function empUpdate() {
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
                'Exit'
            ],
            name: 'updating'
        }
    ])
    .then(userChoice => {
        switch (userChoice.updating) {
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
                empUpdate();
                break;
            case 'Exit':
                return;
        }
    });
};