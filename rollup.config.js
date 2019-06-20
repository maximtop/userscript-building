import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const banner = `// ==UserScript==
// @name         userscript-building
// @version      1.0.0
// @description  userscript for tamper monkey
// @author       maximtop
// @match        *://*/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
`;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/rollup/bundle.js',
    format: 'iife',
    banner,
  },
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**' // only transpile our source code
    }),
    resolve(),
    commonjs()
  ],
};
