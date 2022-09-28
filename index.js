const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require('fs');

const employees = [];

const generateMarkdown = require('./src/allCards');

const managerQuestions = [
    {
      type: 'input',
      message: 'What is the team members name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the employee ID?',
      name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "officeNumber",

      },
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the team members name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the employee ID?',
    name: 'id',
  },
  {
      type: 'input',
      message: 'What is their email address?',
      name: 'email',
    },
  {
    type: 'input',
    message: 'What is your gitHub username?',
    name: 'github',
  }
]

const internQuestions = [
  {
    type: 'input',
    message: 'What is the team members name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the employee ID?',
    name: 'id',
  },
  {
      type: 'input',
      message: 'What is their email address?',
      name: 'email',
    },
  {
    type: 'input',
    message: 'What school do you attend?',
    name: 'school',
  }
]

function askManager() {
  inquirer.prompt(managerQuestions).then(response => {
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
    employees.push(manager);
    addMoreEmployees();
  })
}

function addMoreEmployees() {
  inquirer.prompt({
    type: "list",
    message: "Choose the following choices:",
    name: "addEmployee",
    choices: ["Engineer", "Intern", "finish"],

  })
  .then(response => {
    if (response.addEmployee === "Engineer") {
      addEngineer();
    } else if (response.addEmployee === "Intern"){
      addIntern();
    } else {
      finish();
    }
  })
}

function addEngineer(){
  inquirer.prompt(engineerQuestions).then(response => {
    const engineer = new Engineer(response.name, response.id, response.email, response.github)
    employees.push(engineer);
    addMoreEmployees();
  })
}

function addIntern(){
  inquirer.prompt(internQuestions).then(response => {
    const intern = new Intern(response.name, response.id, response.email, response.school)
    employees.push(intern);
    addMoreEmployees();
  })
}

function finish(){
  console.log(employees);
  fs.writeFile('dist/index.html', generateMarkdown(employees), (err) => {
   (err) ? console.log(err) : "error";
  })
}

askManager();
