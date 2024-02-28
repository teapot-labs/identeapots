<div align="center">
    <img src="https://raw.githubusercontent.com/teapot-labs/identeapots/main/assets/identeapots.png" title="Identeapots" width="75%"/>
</div>

# Indeteapots

Identeapots is a simple TypeScript library for generating identicon images.

## Installation

```bash
npm i identeapots
```

## Usage

The return value of the `generateIdenteapot` function is [a base64 encoded string of the generated identicon image.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)

```typescript
import { generateIdenteapot } from "identeapots";

const identicon: string = generateIdenteapot("hello world", "salt");
```

Which can be used in `<img>` tags as `src` attribute.

```html
<img src="{identicon}" alt="Example Identeapot" />
```

This will generate the following image:

<img src="https://raw.githubusercontent.com/teapot-labs/identeapots/main/assets/hello-world.png" title="Example Identeapot" width="200px"/>

## Example

A complete example of a NextJS application is available in the `/test` folder

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
