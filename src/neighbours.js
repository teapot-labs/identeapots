/**
 * @typedef {Object} Neighbours
 * @property {boolean} top - Whether there is a neighbour at the top of the cell.
 * @property {boolean} bottom - Whether there is a neighbour at the bottom of the cell.
 * @property {boolean} left - Whether there is a neighbour at the left of the cell.
 * @property {boolean} right - Whether there is a neighbour at the right of the cell.
 * @property {number} count - The total number of neighbours.
 */

/**
 * Get the number of neighbours of a cell in a matrix at the specified row and column.
 * @param {boolean[][]} matrix The matrix to check.
 * @param {string} row The row of the cell to check.
 * @param {string} col The column of the cell to check.
 * @returns {Neighbours} The details of the neighbours of the cell at the specified row and column.
 */
exports.getNeighbours = function (matrix, row, col) {
  const result = { top: false, right: false, bottom: false, left: false, count: 0 };
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) return result;

  result.top = row > 0 && matrix[row - 1][col];
  result.bottom = row < matrix.length - 1 && matrix[row + 1][col];
  result.left = col > 0 && matrix[row][col - 1];
  result.right = col < matrix[0].length - 1 && matrix[row][col + 1];

  result.count = [result.top, result.right, result.bottom, result.left].filter(Boolean).length;

  return result;
};
