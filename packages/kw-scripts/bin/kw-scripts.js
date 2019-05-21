#!/usr/bin/env node
/* eslint-disable global-require */
const program = require('commander')
const sortBy = require('lodash.sortby')

const pkg = require('../package.json')
const { logError, logInfo } = require('../src/logger')

program.version(pkg.version).description(pkg.description)

const commands = [
  // START commands
  {
    command: 'generate [generator]',
    description: 'run a code generator',
    action: require('../src/generate'),
  },
  // END commands
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
  logError(`Invalid command: \`${program.args.join(' ')}\`.`)
  logInfo('Run with --help for a list of available commands.\n')
  process.exit(1)
})

program.parse(process.argv)
if (!program.args.length) program.help()
