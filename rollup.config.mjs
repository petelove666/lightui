import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from "rollup-plugin-import-css";

export default {
  input: "src/index.ts",
  external: [ 'react' ],
    output: {
        file: "dist/index.js",
        format: "es",
        exports: "named",
    }, 
    plugins: [
        typescript({
            compilerOptions: {
                declaration: true,
                declarationDir: "dist/types",
            },
        }),
        nodeResolve(),
        commonjs(),
        css({
            output: "index.css"
        })
    ]
} 