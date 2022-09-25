const inquirer = require('inquire');

const questions = [
    {
      type: 'confirm',
      message: 'Create a new team?',
      name: 'new-team',
    },
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
        type: 'list',
        message: 'Select type of team member',
        name: 'member',
        choices: ["Engineer", "Intern", "Manager", "Finished My Team" ]
      },
];

