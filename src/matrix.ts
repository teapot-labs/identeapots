/**
 * Generates a symmetrical boolean 2D matrix of size `size` from the provided `hash`.
 * The matrix is symmetrical along the vertical axis.
 * @param hash The hash to use for generating the matrix.
 * @param size The number of rows and columns in the matrix.
 * @returns The generated matrix.
 */
export function getBoolMatrix(hash: string, size: number): boolean[][] {
  const hashArray = hash.split("");
  const groupSize = Math.ceil(size / 2);
  const matrix: boolean[][] = [];

  for (let i = 0; i < hash.length; i += groupSize) {
    const group = hashArray.slice(i, i + groupSize).map(char => char.charCodeAt(0) % 2 === 0);
    const mirror = [...group].reverse();
    if (size % 2 !== 0) mirror.shift();
    matrix.push([...group, ...mirror]);

    if (matrix.length === size) break;
  }

  return matrix;
}
