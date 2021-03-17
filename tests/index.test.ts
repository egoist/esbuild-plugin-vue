import path from 'path'
import { build } from 'esbuild'
import vue from '../src'

test('simple', async () => {
  const result = await build({
    write: false,
    outdir: './tests/fixture/dist',
    bundle: true,
    entryPoints: ['./tests/fixtures/app.vue'],
    plugins: [vue()],
    external: ['vue'],
    format: 'esm',
  })
  for (const file of result.outputFiles) {
    console.log(file.path, file.text)
  }
})
