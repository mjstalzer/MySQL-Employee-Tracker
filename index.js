const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",

    password: "password",
    database: "employee_hw_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Successful Connect!")
    init();
  });

  const init = () => {
      inquirer.prompt([
          {
              type: "list",
              message: "What would you like to do",
              name: "action",
              choices: [
                  "View all Employees",
                  "View employees by department",
                  "View employees by role",
                  "Add an employee",
                  "Remove employee",
                  "View all roles"
              ]
          }
      ]).then((res) => {
        switch(res.action) {
            case "View all Employees":
                viewAll();
                break
            
            case "View employees by department":
                viewByDep();
                break;

            case "View employees by role":
                viewByRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Remove employee":
                removeEmployee();
                break;
            case "View all roles":
                viewRoles();
                break;
        }
      })
  }


const viewAll = () => {
    const query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        if (err) {
            throw err
        }
        console.table(res)
    })
}

const viewRoles = () => {
    const query = "SELECT * FROM role";
    connection.query(query, (err, res) => {
        if (err) {
            throw err
        }
        console.table(res)
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName",
        },        {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName",
        }
    ]).then((res) => {
    connection.query(query, (err, res) => {
        if(err) {
            throw err
        }
        console.table(res)
    })
    }) 
}