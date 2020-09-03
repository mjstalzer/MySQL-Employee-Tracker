const initialQuestions = [
    {
        type: "list",
        message: "What would you like to do",
        name: "action",
        choices: [
            "View all Employees",
            "View all Roles",
            "View all departments",
            "Add an employee",
            "Add a role",
            "Add a department",
            "Update employee roles",
            "exit"
        ]
    }
]

const addDep = [
    {
        type: "input",
        message: "What is the name of the new department?",
        name: "name"
    }
]

const addRole = [
    {
        type: "input",
        message: "What is the title of the new role?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the salary of this new role?",
        name: "salary"
    },
    {
        type: "input",
        message: "What department does the role belong to?",
        name: "department_id"
    }
]

const addEmployee = [
    {
        type: "input",
        message: "What is their first name?",
        name: "first"
    },
    {
        type: "input",
        message: "What is their last name?",
        name: "last"
    },
    {
        type: "input",
        message: "Who is their manager?",
        name: "manager"
    },
    {
        type: "input",
        message: "What is their role?",
        name: "role"
    }
]

module.exports = {
    initialQuestions,
    addDep,
    addRole,
    addEmployee,
}