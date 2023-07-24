import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
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
        ],
      }),
      image({
        include: 'src/**',
        exclude: 'node_modules/**',
      }),
      // TS
      typescript({
        sourceMap: true,
      }),
      resolve(),
      external(),
      terser(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    external: [/node_modules/],
  },
]
