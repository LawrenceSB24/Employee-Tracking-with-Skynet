-- Placeholder data for database

-- Department placeholder data
INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Marketing")

-- Company roles placeholder data

-- All managers are the odd numbers
-- All employees are the even numbers

INSERT INTO company_role(title, salary, department_id)
VALUES ("Sales Lead", 200000, 1), -- 1 (manager id)

       ("Salesperson", 130000, 1), -- 2 (employee)

       ("Lead Engineer", 140760, 2), -- 3 (manager id)

       ("Software Engineer", 120000, 2) -- 4 (employeer)

       ("Account Manager", 125000, 3), -- 5 (manager id)

       ("Accountant", 45000, 3), -- (employee)

       ("Legal Team Lead", 240000, 4), -- 7 (manager id)

       ("Lawyer", 300000, 4), -- (employee)

       ("Lead Marketer", 210000, 5), -- 9 (manager id)

       ("Social Media Marketer", 100000, 5) -- 10 (employee)

-- Company employee placeholder data
-- Total of 30 employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Antonio", "Javier", 1, 120968),
       ("Sarah", "Johnson", 1, 650921),
       ("Mark", "DiAngelo", 2, NULL),
       ("Stacey", "Kliner", 4, NULL),
       ("Steve", "Richardson", 4, NULL),
       ("Kayla", "Montigar", 2, NULL),
       ("Laura", "Anton", 4, NULL),
       ("John", "Paller", 2, NULL),
       ("Bob", "Sanchez", 2, NULL),
       ("Kevin", "Bengalsworth", 2, NULL),
       ("Bonnie", "Harper", 3, 147025),
       ("Tyler", "Gavinson", 3, 90),
       ("Laurance", "Gilbert", 4, NULL),
       ("Albert", "Chandler", 4, NULL),
       ("Rose", "Patterson", 4, NULL),
       ("Rachael", "Guttenburg", 4, NULL),
       ("Parker", "Steffan", 6, NULL),
       ("Michele", "Allinstan", 6, NULL),
       ("Mike", "Chan", 6, NULL),
       ("Ashley", "Rodriguez", 5, 340135),
       ("Kunal", "Singh", 6, NULL),
       ("Malia", "Brown", 7, 512829),
       ("Sarah", "Lourd", 10, NULL),
       ("Tom", "Allen", 10, NULL),
       ("James", "Morgan", 10, NULL),
       ("Kacey", "Charlotte", 10, NULL),
       ("Amy", "Taylor", 10, NULL),
       ("Michael", "Arnoldson", 8, NULL),
       ("Pratik", "Sully", 8, NULL)
       ("Thomas", "Singly", 9, 456027)
       