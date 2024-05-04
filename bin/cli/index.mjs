#!/usr/bin/env node

// src/cli/index.ts
process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
function main() {
  console.log(process.argv);
}
main();
