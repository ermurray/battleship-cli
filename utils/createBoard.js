
const createBoard = function(size = 10) {
  const board = [];
  let i = 0;
  const spacer = [];

  while (i <= size) {
      if (i === 0) {
          board.push([' - |']);
      } else {
          board.push([` ${String.fromCharCode(i+64)} |`]);
      }
      
      if (i <= 9){
        spacer.push ('----');
      } else {
        spacer.push ('-----');
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
                    board[row].push(' ' + (j+1) + ' |');
                    break;
                default:
                    board[row].push(' ' + (j+1) + ' |');
            }
        } else if (j < 9){
            board[row].push('   |');
        } else {
          board[row].push('    |');
        }
        j++;
    }

  };



  for (let row = 1; row < board.length; row +=2){
   
    board.splice(row, 0,  spacer);
  }
return board;
};



module.exports = { createBoard };