import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import generatePackageJSON from "rollup-plugin-generate-package-json";
import analyze from "rollup-plugin-analyzer";
import dts from "rollup-plugin-dts";

const OUTPUT_DIR = "dist";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        preserveModules: true,
        dir: `${OUTPUT_DIR}`,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      generatePackageJSON({
        outputFolder: "dist",
        baseContents: (pkg) => {
          const { scripts, ...rest } = pkg;
          return {
            ...rest,
          };
        },
      }),
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["node_modules", "**/*.stories.tsx"],
      }),
      terser(),
      analyze({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
  },
  {
    input: `${OUTPUT_DIR}/types/index.d.ts`,
    output: [{ file: `${OUTPUT_DIR}/index.d.ts`, format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
