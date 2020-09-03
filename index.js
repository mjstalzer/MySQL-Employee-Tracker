const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const questions = require("./assets/questions")

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employee_hw_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Successful Connect!")
    init();
});

const init = () => {
    inquirer.prompt(
        questions.initialQuestions
    ).then((res) => {
        switch (res.action) {
            case "View all Employees":
                viewAll();
                break
            case "View all Roles":
                viewRoles();
                break;
            case "View all departments":
                viewDep();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add a department":
                addDep();
                break;
            case "exit":
                return;
        }
    })
}


const viewAll = () => {
    let query = "SELECT employee.id AS 'ID', employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS 'Title', role.salary AS '$$$', department.name AS 'Department'"
    query += "FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id";
    connection.query(query, (err, res) => {
        if (err) {
            throw err
        }
        console.table(res)
    })
    init();
}

const viewRoles = () => {
    const query = "SELECT * FROM role";
    connection.query(query, (err, res) => {
        if (err) {
            throw err
        }
        console.table(res)
    })
    init();
}

const viewDep = () => {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) {
            throw err
        }
        console.table(res)
    })
    init();
}

const addDep = () => {
    inquirer.prompt(questions.addDep).then((res) => {
        const values = [res.name]
        console.log(values)
        const query = "INSERT INTO department (name) VALUES (?)"
        connection.query(query, values, (err, res, fields) => {
            if (err) {
                throw err
            }
            console.table(res)
        })
    init();
    })
}

const addRole = () => {
    inquirer.prompt(questions.addRole).then((res) => {
        const values = [res.title, res.salary, res.department_id]
        console.log(values)
        const query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)"
        connection.query(query, values, (err, res, fields) => {
            if (err) {
                throw err
            }
            console.table(res)
        })
    init();
    })
}

const addEmployee = () => {
    inquirer.prompt(questions.addEmployee).then((res) => {
        const values = [res.first, res.last, res.manager, res.role]
        console.log(values)
        const query = "INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)"
        connection.query(query, values, (err, res, fields) => {
            if (err) {
                throw err
            }
            console.table(res)
        })
        init()
    })
}
