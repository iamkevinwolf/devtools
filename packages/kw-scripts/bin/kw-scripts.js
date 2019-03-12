#!/usr/bin/env node
const program = require('commander')
const sortBy = require('lodash.sortby')
const chalk = require('chalk')

const pkg = require('../package.json')

program.version(pkg.version).description(pkg.description)

const commands = [
  { command: 'echo', description: 'log something', action: () => {} },
  // END: commands
]

sortBy(commands, ({ command }) => command).forEach(
  ({ command, description, action }) => {
    program
      .command(command)
      .description(description)
      .action(action)
  }
)

program.on('command:*', function unknownCommand() {
  console.log(chalk.red(`\nInvalid command: \`${program.args.join(' ')}\``))
  console.log(chalk.dim('Run with --help for a list of available commands.\n'))
  process.exit(1)
})

program.parse(process.argv)

if (!program.args.length) program.help()
