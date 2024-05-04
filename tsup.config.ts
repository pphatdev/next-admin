import { defineConfig } from "tsup"

export default defineConfig({
    clean: true,
    dts: false,
    entry: ["./src/cli/index.ts"],
    format: ["esm"],
    sourcemap: process.env.NODE_ENV == "production",
    minify: process.env.NODE_ENV == "production",
    target: "esnext",
    outDir: "./bin/cli"
})
