const EMPTY = "."

const possibleNumbers = ["1", "2", "3", "4", "5", "6","7", "8","9"];

const  solveSoduku = function(board){
  let emptySpaces =[];
  for(let i = 0; i<board.length; i++){
    for(let j = 0; j<board.length; j++){
      if(board[i][j] === EMPTY){
        emptySpaces.push({row: i, column: j});
      }
    }
  }
  function recurse(emptySpaceIndex){
    //base case - end
    if(emptySpaceIndex >= emptySpaces.length){
      return true;
    }
    const {row, column} = emptySpaces[emptySpaceIndex];
   
    for(let i = 0; i<possibleNumbers.length; i++){
      let num = possibleNumbers[i];
        // check if valid
        if(isValid(num, row, column, board)){
          board[row][column] = num;
            // recurse
            if(recurse(emptySpaceIndex+1)){
              return true;
            }
          // backtrack
          board[row][column] = EMPTY;
        }
      }
      return false;
    }
    recurse(0)
  return board;
}

function isValid(number, row, column, board){
  // check col, row, 3X3 matrix
  for(let i = 0; i<board.length; i++){
    if(board[row][i] === number || board[i][column] === number){
      return false;
    }// check 3X3 matrix
      let startRow = Math.floor(row / 3) * 3;
      let startColumn = Math.floor(column / 3) * 3;
      
      for(let i = startRow; i<startRow + 3; i+=1){
        for(let j = startColumn; j<startColumn + 3; j+=1){
          if (board[j][i] === number) {
            return false;
          }
        }
      }
    }
  return true;
}