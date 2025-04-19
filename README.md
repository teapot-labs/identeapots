<img src="https://github.com/teapot-labs/identeapots/raw/main/assets/identeapots.png" title="Identeapots" width="100%"/>

# Indeteapots

Identeapots is a simple TypeScript library for generating identicon images.

The library has **no dependencies** and is designed to be lightweight and easy to use.

## Installation

```bash
npm i @teapotlabs/identeapots
```

## Basic Usage

The return value of the `generateIdenteapot` function is [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

```typescript
import { generateIdenteapot } from "@teapotlabs/identeapots";

// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACPEAAAH0C...
const identicon: string = generateIdenteapot("hello world", "salt");
```

Which can be used in `<img>` tags as `src` attribute.

```jsx
<img src={identicon} alt="Example Identeapot" />
```

This will generate the following image:

<img src="https://github.com/teapot-labs/identeapots/raw/main/assets/hello-world.png" title="Example Identeapot" width="200px"/>

## Advanced Usage

You can also pass various configuration options to the `generateIdenteapot` function to customize the generated identicons.

```typescript
import { generateIdenteapot } from "@teapotlabs/identeapots";

const identicon: string = generateIdenteapot("hello world", {
  salt: "salt",
  size: 200
  // other options...
});
```

### 🔑 Hash Configuration

| Option | Type   | Default | Description                                                                  |
| ------ | ------ | ------- | ---------------------------------------------------------------------------- |
| `salt` | string | `""`    | A string appended to the seed before hashing. Useful for variant generation. |

### 🎨 Color Configuration

| Option                 | Type   | Default | Description                        |
| ---------------------- | ------ | ------- | ---------------------------------- |
| `paletteSize`          | number | `8`     | Number of colors in the palette.   |
| `coloredCellLightness` | number | `60`    | Lightness value for colored cells. |
| `emptyCellLightness`   | number | `90`    | Lightness value for empty cells.   |

### 🧩 Identicon Configuration

| Option        | Type   | Default | Description                                                    |
| ------------- | ------ | ------- | -------------------------------------------------------------- |
| `size`        | number | `400`   | Final image size in pixels.                                    |
| `gridSize`    | number | `9`     | Number of cells per row and column in the grid.                |
| `patternSize` | number | `7`     | Size of the identicon pattern in cells (must be ≤ `gridSize`). |
| `overlap`     | number | `0.5`   | Overlap in pixels to avoid visible gaps between cells.         |

## Example

A complete example of a NextJS application is available in the `/test` folder

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
