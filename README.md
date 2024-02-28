# Indeteapot

Identeapot is a simple TypeScript library for generating identicon images.

## Installation

```bash
npm install identeapot
```

## Usage

The return value of the `generateIdenteapot` function is [a base64 encoded string of the generated identicon image.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)

```typescript
import { generateIdenteapot } from 'identeapot';

const identicon: string = generateIdenteapot('hello world', 'salt');

```

Which can be used in `<img>` tags as `src` attribute.

```html
<img src=identicon alt="Identeapot" />
```

## Exaple

A complete example of a NextJS application is available in the `/test` folder

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
