/**
 * Array - Fixed Size
 * Time O(ROWS * COLS) | Space O(CELLS)
 * @param {character[][]} board
 * @return {boolean}
 */
 
var isValidSudoku = (board) => {
  const [ boards, cells ] = [ 3, 9];
  const [ boxes, rows, cols ] = getBoards(boards, cells);/* Time O(ROWS * COLS) | Space O(CELLS) */

  return searchGrid(board, boxes, rows, cols);           /* Time O(ROWS * COLS) | Space O(CELLS) */
}

var getBoards = (boards, cells) => new Array(boards).fill()
  .map(() => new Array(cells).fill(0));

var searchGrid = (board, boxes, rows, cols) => {
  const [ _rows, _cols ] = [ 9, 9 ];

  for (let row = 0; row < _rows; row++) {/* Time O(ROWS)*/
      for (let col = 0; col < _cols; col++) {/* Time O(COLS)*/
          const char = board[row][col];
          const position = 1 << (char - 1);
          const index = (Math.floor(row / 3) * 3) + Math.floor(col / 3);

          const isEmpty = char === '.';
          if (isEmpty) continue;

          const hasMoved = (boxes[index] & position) || (cols[col] & position) || (rows[row] & position);
          if (hasMoved) return false;

          rows[row] |= position;                 /* Space O(CELLS)*/
          cols[col] |= position;                 /* Space O(CELLS)*/
          boxes[index] |= position;              /* Space O(CELLS)*/
      }
  }

  return true;
}