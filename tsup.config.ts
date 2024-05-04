import { defineConfig } from "tsup"

const ENV   = process.env.NODE_ENV.replaceAll(/\s+/g, '')
const PROD  = "production"

export default defineConfig({
    clean: true,
    entry: ["./src/cli/index.ts"],
    format: ["esm"],
    sourcemap: ENV == PROD,
    minify: ENV == PROD,
    target: "esnext",
    outDir: "./bin/cli"
})
