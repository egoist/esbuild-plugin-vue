**💛 You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/egoist).**

---

# esbuild-plugin-vue

[![npm version](https://badgen.net/npm/v/esbuild-plugin-vue)](https://npm.im/esbuild-plugin-vue)

Basic `.vue` support for esbuild.

## Features

- `<script setup>`
- TypeScript support
- Scoped style support

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
