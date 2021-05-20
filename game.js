const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'main',
      message: 'What do you want to do?',
      choices: [
        'Play Battleship',
        'instructions',
        new inquirer.Separator(),
        'Exit Game',
        // {
        //   name: 'Contact support',
        //   disabled: 'Unavailable at this time',
        // },
        // 'Talk to the receptionist',
      ],
    },
    {
      type: 'list',
      name: 'opponent',
      message: 'Two player local or play against CPU?',
      choices: ['2Player', 'CPU', 'Exit Game'],
      filter: function (val) {
        return val.toLowerCase();
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

