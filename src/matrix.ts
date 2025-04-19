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

  for (let i = 0; matrix.length < size; i += groupSize) {
    const group = Array.from({ length: groupSize }, (_, j) => {
      const char = hashArray[(i + j) % hashArray.length];
      return char.charCodeAt(0) % 2 === 0;
    });

    const mirror = group.slice(0, size % 2 === 0 ? groupSize : groupSize - 1).reverse();
    matrix.push([...group, ...mirror]);
  }

  return matrix;
}
