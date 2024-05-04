#!/usr/bin/env node

import { consoleCommand } from "./commands/console"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

function main() {

    const commands = process.argv
    consoleCommand(commands)
}

main()