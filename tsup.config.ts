import { defineConfig } from "tsup"

export default defineConfig({
    clean: true,
    dts: false,
    entry: ["./src/cli/index.ts"],
    format: ["esm"],
    sourcemap: false,
    minify: false,
    target: "esnext",
    outDir: "./bin/cli"
})
