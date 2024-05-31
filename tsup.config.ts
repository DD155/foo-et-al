import { defineConfig } from "tsup"

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/foo_implementation.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
})