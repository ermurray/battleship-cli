const inquirer = require('inquirer');

const mainMenu = {
  type: 'list',
  name: 'main',
  message: 'What do you want to do?',
  choices: [
    'Play Battleship',
    'instructions',
    new inquirer.Separator(),
    'Exit Game',
  ],
};
const opponentSelection =  {
    type: 'list',
    name: 'opponent',
    message: 'Two player local or play against CPU?',
    choices: [
      '2Player', 
      'CPU', 
      new inquirer.Separator(),
      'Main Menu'
    ]
  };


inquirer
  .prompt(mainMenu)
  .then((answers) => {
    switch (answers.main) {
      case 'Play Battleship':
        console.log('Play battleship move to next menu');
        inquirer.prompt(opponentSelection)
        break;
      case 'instructions':
        console.log('instructions here prompt to return to main menu');
        break;
      default:
        process.exit();
    }
    
    // console.log(JSON.stringify(answers, null, '  '));
  });

