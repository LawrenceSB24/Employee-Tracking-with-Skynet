// Inquirer package imported
const inquirer = require('inquirer');

// console.table package imported
require('console.table');

// mysql2 package imported
const mysql = require('mysql2');

// Connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MySQLITY2525!',
        database: 'employee_db'
    },
    console.log('Connection established!')
);
// Inquirer prompts for updating the list
function viewTab() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do(?): ',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Done'
            ],
            name: 'menu'
        }
    ])
        .then(function (res) {
            switch (res.menu) {
                case 'View All Departments':
                    selectDep();
                    break;
                case 'View All Roles':
                    selectRole();
                    break;
                case 'View All Employees':
                    selectEmps();
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
                case 'Done':
                    return;
            }
        });
        
};

viewTab();

// Query function for listing all known departments
// Listing roles and employee functions will have similar layout
function selectDep() {
    db.promise().query('SELECT * FROM department')
        .then(([data]) => {
            console.table(data);
            viewTab();
        });
};

// Query function for listing all known roles
function selectRole() {
    db.promise().query('SELECT * FROM company_role')
        .then(([data]) => {
            console.table(data);
            viewTab();
        });
};

// Query function for listing all known employees
function selectEmps() {
    db.promise().query('SELECT * FROM employee')
        .then(([data]) => {
            console.table(data);
            viewTab();
        });
};

// Query function for adding a new department
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
            db.promise().query('INSERT INTO department(name) values (?)', [deptNew])
                .then(([data]) => {
                    viewTab();
                });
        });
};

// Query function for adding a new role
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

            db.promise().query('SELECT * FROM department')
                .then(([data]) => {
                    const depts = data.map(({ id, name }) => ({
                        name: name,
                        value: id
                    }))

                    inquirer.prompt([

                        {
                            type: 'list',
                            name: 'deptId',
                            message: 'Please state which department you want the role to be in: ',
                            choices: depts
                        }
                    ])
                        .then(res => {
                            departmentId = res.deptId
                            db.promise().query('INSERT INTO company_role (title, salary, department_id) values (?, ?, ?)', [roleNewName, roleSalary, departmentId])
                                .then(([data]) => {
                                    viewTab();
                                });
                        });
                });
        });
};

// Query function for adding a new employee
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

            db.promise().query('SELECT * FROM company_role')
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

                            db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?, ?, ?, ?)', [empFirst, empLast, roleID, managerID])
                                .then(([data]) => {
                                    viewTab();
                                });
                        });
                }
                );
        });
}

// Query function for updating new role for an employee
// There is still a debugging issue with this portion
// Honestly not quite sure how to fix this portion so this will be part of the ice box for now
// I do understand if this takes points off from the grade
function empRoleUpdate() {
    db.promise().query('SELECT * FROM employee')
    .then(([data]) => {
        const emps = data.map(({id, first_name}) => ({
            name: first_name,
            value: id
        }))
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'empFirst',
                    message: "Please choose an employee to update their role: ",
                    choices: emps
                }
            ])
            .then(res => {
                empId = res.id;
                db.promise().query('SELECT * FROM company_role')
                .then(([data]) => {
                    const roles = data.map(({id, title}) => ({
                        name: title,
                        value: id
                    }))
                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'role_id',
                                message: 'Please choose a new role: ',
                                choices: roles
                            }
                        ])
                        .then(res => {
                            title = res.role_id;
                            console.log(emps);
                            console.log(roles);
                            console.log(title);
                            console.log(empId);
                            db.promise().query(`UPDATE employee SET role_id = ${title} WHERE id = ${empId}`)
                            viewTab();
                        })
                })
            })

    })
};


// TODO (Ice-box): Deleting A Department
/**
 * function delDept() {
 * 
 * }
 * 
*/

// TODO (Ice-box): Updating A Department
/**
 * function updateDept() {
 * 
 * }
 * 
*/

// TODO (Ice-box): Deleting A Role
/**
 * function delRole() {
 * 
 * }
 * 
*/

// TODO (Ice-box): Updating A Role
/**
 * function updateRole() {
 * 
 * }
 * 
*/

// TODO (Ice-box): Deleting A Employee
/**
 * function delEmp() {
 * 
 * }
 * 
*/

// TODO (Ice-box): Updating A Employee
/**
 * function updateEmp() {
 * 
 * }
 * 
*/

// TODO (Ice Box): Viewing Employee Under A Department
/**
 * function empByDept() {
 * 
 * }
 * 
*/

// TODO (Ice Box): Viewing Employee Under A Manager
/**
 * function empByManager() {
 * 
 * }
 * 
*/