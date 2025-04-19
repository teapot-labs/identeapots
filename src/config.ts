/**
 * Configuration for the identeapot.
 * This includes settings for the hash, colors, and identicon generation.
 * The configuration is used to customize the appearance and behavior of the identeapot.
 */
export type IdenteapotConfig = {
  // ===== Hash Configuration =====

  /**
   * A string that is appended to the seed before hashing.
   * This is useful for generating different identicons from the same seed.
   * @default ""
   */
  salt: string;

  // ===== Color Configuration =====

  /**
   * The number of colors in the palette.
   * @default 8
   */
  paletteSize: number;

  /**
   * The lightness of the colored cells.
   * @default 60
   */
  coloredCellLightness: number;

  /**
   * The lightness of the empty cells.
   * @default 90
   */
  emptyCellLightness: number;

  // ===== Identicon Configuration =====

  /**
   * The size of the final image in pixels.
   * @default 400
   */
  size: number;

  /**
   * The size of the grid (number of cells in each row/column).
   * @default 9
   */
  gridSize: number;

  /**
   * The size of the identicon pattern (number of cells in each row/column).
   * Must be less than or equal to `gridSize`.
   * @default 7
   */
  patternSize: number;

  /**
   * The overlap in pixels to avoid gaps between cells.
   * @default 0.5
   */
  overlap: number;
};

/**
 * Default configuration for the identeapot.
 */
export const defaultConfig: IdenteapotConfig = {
  salt: "",
  paletteSize: 8,
  coloredCellLightness: 60,
  emptyCellLightness: 90,
  size: 400,
  gridSize: 9,
  patternSize: 7,
  overlap: 0.5
};
