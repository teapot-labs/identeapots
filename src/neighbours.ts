type Neighbours = {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
  count: number;
};

/**
 * Get the number of neighbours of a cell in a matrix at the specified row and column.
 * @param matrix The matrix to check.
 * @param row The row of the cell to check.
 * @param col The column of the cell to check.
 * @returns The details of the neighbours of the cell at the specified row and column.
 */
export function getNeighbours(matrix: boolean[][], row: number, col: number): Neighbours {
  const result = { top: false, right: false, bottom: false, left: false, count: 0 };
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) return result;

  result.top = row > 0 && matrix[row - 1][col];
  result.bottom = row < matrix.length - 1 && matrix[row + 1][col];
  result.left = col > 0 && matrix[row][col - 1];
  result.right = col < matrix[0].length - 1 && matrix[row][col + 1];

  result.count = [result.top, result.right, result.bottom, result.left].filter(Boolean).length;

  return result;
}
