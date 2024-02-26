/**
 * Generates a symmetrical boolean 2D matrix of size `size` from the provided `hash`.
 * The matrix is symmetrical along the vertical axis.
 * @param {string} hash The hash to use for generating the matrix.
 * @param {number} size The number of rows and columns in the matrix.
 * @returns {boolean[][]} The generated matrix.
 */
exports.getBoolMatrix = function (hash, size) {
  hash = hash.split("");
  const groupSize = Math.ceil(size / 2);
  const matrix = [];

  for (let i = 0; i < hash.length; i += groupSize) {
    const group = hash.slice(i, i + groupSize).map(char => char.charCodeAt(0) % 2 === 0);
    const mirror = [...group].reverse();
    if (size % 2 !== 0) mirror.shift();
    matrix.push([...group, ...mirror]);

    if (matrix.length === size) {
      break;
    }
  }

  return matrix;
};
