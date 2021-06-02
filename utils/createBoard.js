
const createBoard = function(size = 10) {
  const board = [];
  let i = 0;

  while (i <= size) {
      if (i === 0) {
          board.push(['| - |']);
      } else {
          board.push([`| ${String.fromCharCode(i+64)} |`]);
      }
      i++;
    };

  for (let row = 0; row < board.length; row++) {
    let j = 0;
    while (j < size) {
        if (row === 0) {
            var col = String(j+1);
            switch (col.length) {
                case 1:
                    board[row].push(' ' + (j+1) + ' ');
                    break;
                default:
                    board[row].push(' ' + (j+1));
            }
        } else {
            board[row].push('   ');
        }
        j++;
    }

  };
return board;
};



module.exports = { createBoard };