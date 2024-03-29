<img src="https://github.com/teapot-labs/identeapots/raw/main/assets/identeapots.png" title="Identeapots" width="100%"/>

# Indeteapots

Identeapots is a simple TypeScript library for generating identicon images.

## Installation

```bash
npm i @teapotlabs/identeapots
```

## Usage

The return value of the `generateIdenteapot` function is [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)

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

## Example

A complete example of a NextJS application is available in the `/test` folder

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
