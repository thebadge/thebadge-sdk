import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: !production,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: !production,
      },
    ],
    plugins: [
      // Resolve all the alias on bundle time
      alias({
        entries: [
          {
            find: '@businessLogic',
            replacement: path.resolve(__dirname, './src/business-logic'),
          },
          {
            find: '@subgraph',
            replacement: path.resolve(__dirname, './src/subgraph'),
          },
          {
            find: '@utils',
            replacement: path.resolve(__dirname, './src/utils'),
          },
        ],
      }),
      // sourcemaps(),
      image({
        include: 'src/**',
        exclude: 'node_modules/**',
      }),
      json(),
      // TS
      typescript({
        sourceMap: !production,
        inlineSources: !production,
        exclude: ['**/*.test.*', '**/*.spec.*'],
      }),
      resolve(),
      external(),
      terser(),
      babel({
        exclude: ['node_modules/**'],
        inputSourceMap: !production,
      }),
    ],
    external: [/node_modules/],
  },
]
