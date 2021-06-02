
const createBoard = function(size = 10) {
  const board = [];
  let i = 0;

  while (i <= size) {
      if (i === 0) {
          board.push([' - ']);
      } else {
          board.push(`| ${i} |`);
      }
      i++;
    };

  for (let row = 0; row < board.length; row++) {
    let i = 0;
    while (i < size) {
        if (row === 0) {
            var col = String(i+1);
            switch (col.length) {
                case 1:
                    board[row].push(' ' + (i+1) + ' ');
                    break;
                default:
                    board[row].push(' ' + (i+1));
            }
        } else {
            board[row].push('   ');
        }
        i++;
    }

  return board;
  };
};



module.exports = { createBoard };