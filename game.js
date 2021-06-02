const inquirer = require('inquirer');
const board = require('./utils/createBoard');

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

const mainStart = function() {
  inquirer
  .prompt(mainMenu)
  .then((answers) => {
    switch (answers.main) {
      case 'Play Battleship':
        playerSelect();
        break;
      case 'instructions':
        console.log('instructions here prompt to return to main menu');
        backToMain();
        break;
      default:
        process.exit();
    }
    
    // console.log(JSON.stringify(answers, null, '  '));
  });
}

function playerSelect(){
  inquirer
  .prompt(opponentSelection)
  .then((answers) => {
    switch (answers.opponent) {
      case '2Player':
        console.log('Play 2player game create boards and select ship placement');
        console.log(board.createBoard());
        break;
      case 'CPU':
        console.log('Play against CPU create boards and select ship placement');
        break;
      default:
        mainStart();
        return;
    }
  });
  
};

function backToMain() {
  inquirer.prompt({
    type: 'list', 
    name: 'backToMain',
    message: '-------------',
    choices: ['Back to Main Menu']
  })
  .then((answers) => {
    mainStart();
  });
}
mainStart();