# vite-plugin-import-css

Help your lib import css files through vite plugin.

[![NPM version](https://img.shields.io/npm/v/vite-plugin-import-css.svg)](https://npmjs.org/package/vite-plugin-import-css)

## Install

```bash
pnpm add vite-plugin-import-css -D
```

## Usage

```typescript
import { defineConfig } from 'vite'
import plugin from 'vite-plugin-import-css'

export default defineConfig({
  plugins: [plugin()],
})
```


### Options

#### `cssFile`

Type: `string` <br>
Default: `./style.css`

The default is `./style.css`, which is useful when you have changed the name using `assetFileName`.


[LICENSE (MIT)](/LICENSE)
