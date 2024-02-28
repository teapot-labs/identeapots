import { hashString } from "./hash";
import { getBoolMatrix } from "./matrix";
import { getNeighbours } from "./neighbours";
import * as paths from "./paths";

// Color variables
const coloredCellLightness = 60; // Adjusted lightness for colored cells
const emptyCellLightness = 90; // Adjusted lightness for the background
const colorVariation = 5; // Variation in hue for foreground and background

// Identicon variables
const size = 400; // Size of the final image in pixels
const gridSize = 9; // Size of the grid (number of cells in each row/column)
const gridCellSize = size / gridSize; // Size of each grid cell in pixels
const patternSize = 7; // Size of the identicon pattern (number of cells in each row/column)
const padding = (gridSize - patternSize) / 2; // Padding around the identicon pattern in grid cells
const overlap = 0.5; // Overlap to avoid gaps between cells in pixels

/**
 * Generates an identeapot from the provided `seed`.
 * @param seed The seed to use for generating the identeapot.
 * @param salt The salt to use for hashing the seed.
 * @returns The generated identeapot as a data URL.
 */
export async function generateIdenteapot(seed: string, salt?: string): Promise<string> {
  const hash = await hashString(seed, salt);
  const matrix = getBoolMatrix(hash, patternSize);

  // Create a canvas element for the identicon
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  // Get hue for both foreground and background
  const hue = (hash.charCodeAt(0) * colorVariation) % 360;

  // Draw background color
  context.fillStyle = `hsl(${hue}, 70%, ${emptyCellLightness}%)`;
  context.fillRect(0, 0, size, size);

  // Set the fill style for the identicon pattern
  context.fillStyle = `hsl(${hue}, 70%, ${coloredCellLightness}%)`;

  // Draw the identicon pattern
  for (let row = 0; row < patternSize; row++) {
    for (let col = 0; col < patternSize; col++) {
      if (matrix[row][col]) {
        // Calculate the starting point without padding and with overlap
        const startX = (col + padding) * gridCellSize - overlap;
        const startY = (row + padding) * gridCellSize - overlap;
        const cellSize = gridCellSize + 2 * overlap; // Adjusted cell size to avoid gaps

        const neighbors = getNeighbours(matrix, row, col);
        switch (neighbors.count) {
          case 0:
            paths.circle(context, startX, startY, cellSize / 2);
            break;
          case 1:
            if (neighbors.top) {
              paths.semicircleOnRectangle(context, startX, startY, cellSize, "up");
            } else if (neighbors.right) {
              paths.semicircleOnRectangle(context, startX, startY, cellSize, "right");
            } else if (neighbors.bottom) {
              paths.semicircleOnRectangle(context, startX, startY, cellSize, "down");
            } else if (neighbors.left) {
              paths.semicircleOnRectangle(context, startX, startY, cellSize, "left");
            }
            break;
          case 2:
            if ((neighbors.top && neighbors.bottom) || (neighbors.left && neighbors.right)) {
              paths.square(context, startX, startY, cellSize);
            } else if (neighbors.top && neighbors.right) {
              paths.quarterCircle(context, startX, startY, cellSize, "top-right");
            } else if (neighbors.right && neighbors.bottom) {
              paths.quarterCircle(context, startX, startY, cellSize, "bottom-right");
            } else if (neighbors.bottom && neighbors.left) {
              paths.quarterCircle(context, startX, startY, cellSize, "bottom-left");
            } else if (neighbors.left && neighbors.top) {
              paths.quarterCircle(context, startX, startY, cellSize, "top-left");
            }
            break;
          default:
            paths.square(context, startX, startY, cellSize);
            break;
        }
      }
    }
  }

  return canvas.toDataURL();
}
