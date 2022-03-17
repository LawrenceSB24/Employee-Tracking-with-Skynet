-- Employee database SQL file
-- Only contains basic database table creation
-- Primary and Foreign key operations TBA

-- Database is removed if it exists already
DROP DATABASE IF EXISTS employee_db;

-- Creates  database
CREATE DATABASE employee_db;

-- Database is used for operations
USE employee_db;

-- Company Department table
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- Department id is required
    name VARCHAR(30) NOT NULL -- Department name is required
);

-- Company Role Table
CREATE TABLE company_role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

-- Company employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
    FOREIGN KEY (role_id)
    REFERENCES company_role(id)
    ON DELETE SET NULL
);