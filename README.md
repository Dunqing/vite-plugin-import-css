# vite-plugin-import-css

This vite plugin will help you library import `style.css` file automatically.

[![NPM version](https://img.shields.io/npm/v/vite-plugin-import-css.svg)](https://npmjs.org/package/vite-plugin-import-css)
[![NPM license](https://img.shields.io/npm/l/vite-plugin-import-css.svg)](https://npmjs.org/package/vite-plugin-import-css)
[![NPM total downloads](https://img.shields.io/npm/dt/vite-plugin-import-css.svg)](https://npmjs.org/package/vite-plugin-import-css)

## Installation

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

#### `dynamicImport`

Type: `boolean` <br>
Default: `false`

If `true`, the plugin will use `import()` to import css files in esm.


[LICENSE (MIT)](/LICENSE)
