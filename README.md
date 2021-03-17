# esbuild-plugin-vue

Basic `.vue` support for esbuild.

## Install

```bash
npm i esbuild-plugin-vue @vue/compiler-sfc
```

## Usage

```ts
import { build } from 'esbuild'
import vue from 'esbuild-plugin-vue'

build({
  plugins: [vue()],
})
```

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
