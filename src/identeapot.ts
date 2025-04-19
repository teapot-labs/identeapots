import { defaultConfig, IdenteapotConfig } from "./config";
import { hashString } from "./hash";
import { getBoolMatrix } from "./matrix";
import { getNeighbours } from "./neighbours";
import * as paths from "./paths";

/**
 * Generates an identeapot from the provided `seed`.
 * @param seed The seed to use for generating the identeapot.
 * @param salt The salt to use for hashing the seed.
 * @returns The generated identeapot as a data URL.
 */
export async function generateIdenteapot(seed: string, salt?: string): Promise<string>;
/**
 * Generates an identeapot from the provided `seed` and configuration.
 * @param seed The seed to use for generating the identeapot.
 * @param config The configuration object for generating the identeapot.
 * @returns The generated identeapot as a data URL.
 */
export async function generateIdenteapot(seed: string, config?: Partial<IdenteapotConfig>): Promise<string>;

export async function generateIdenteapot(seed: string, saltOrConfig?: string | Partial<IdenteapotConfig>): Promise<string> {
  const config: IdenteapotConfig = defaultConfig;
  if (typeof saltOrConfig === "string") {
    config.salt = saltOrConfig;
  } else if (typeof saltOrConfig === "object") {
    Object.assign(config, saltOrConfig);
  }
  // Extract configuration values and compute derived values
  const { salt, paletteSize, coloredCellLightness, emptyCellLightness, size, gridSize, patternSize, overlap } = config;
  const gridCellSize = size / gridSize; // Size of each grid cell in pixels
  const padding = (gridSize - patternSize) / 2; // Padding around the identicon pattern in grid cells

  // Perform hashing with the provided seed and salt
  const hash = await hashString(seed, salt);
  const matrix = getBoolMatrix(hash, patternSize);

  // Create a canvas element for the identicon
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  // Get hue for both foreground and background
  const hue = ((parseInt(hash.substring(0, 2), 16) / paletteSize) * 360) % 360;

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
