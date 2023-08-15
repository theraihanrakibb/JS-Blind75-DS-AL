const EMPTY = ".";

const possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const solveSudoku = function (board) {
   let emptySpaces = [];

   for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
         if (board[i][j] === EMPTY) {
            emptySpaces.push({
               row: i,
               col: j
            });
         }
      }
   }

   function recurse(emptySpaceIndex) {
      //base case - end
      if (emptySpaceIndex >= emptySpaces.length) {
         return true;
      }

      const {
         row,
         col
      } = emptySpaces[emptySpaceIndex];

      for (let i = 0; i < possibleNumbers.length; i++) {
         let num = possibleNumbers[i];
         // check if valid
         if (isValid(num, row, col, board)) {
            board[row][col] = num;
            // recurse
            if (recurse(emptySpaceIndex + 1)) {
               return true;
            }
            // backtrack
            board[row][col] = EMPTY;
         }
      }
      return false;
   }
   recurse(0)
   return board;
}

function isValid(number, row, col, board) {
   // check col, row
   for (let i = 0; i < board.length; i++) {
      if (board[row][i] === number || board[i][col] === number) {
         return false;
      }
   }

   // check 3X3 matrix
   let startRow = Math.floor(row / 3) * 3;
   let startCol = Math.floor(col / 3) * 3;

   for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
         if (board[i][j] === number) {
            return false;
         }
      }
   }

   return true;
}
