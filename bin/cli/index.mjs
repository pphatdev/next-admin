#!/usr/bin/env node

// src/cli/commands/console.ts
var consoleCommand = (commad) => {
  console.table(commad);
};

// src/cli/index.ts
process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
function main() {
  const commands = process.argv;
  consoleCommand(commands);
}
main();
