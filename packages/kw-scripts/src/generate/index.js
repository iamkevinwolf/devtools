const path = require('path')
const nodePlop = require('node-plop')
const ora = require('ora')

const { logInfo, logError } = require('../logger')

const plop = nodePlop(path.resolve(__dirname, 'plopfile.js'))
const generators = plop.getGeneratorList()
const generatorNames = generators.map(({ name }) => name)

function runGenerator(generatorName) {
  const generator = plop.getGenerator(generatorName)

  console.clear()
  logInfo(`running generator: \`${generator.name}\`\n`)

  generator
    .runPrompts()
    .then(answers => {
      const progress = ora(`generating \`${generator.name}\`\n`)

      function buildMessage(input) {
        return [
          input.type && `(${input.type})`,
          input.path,
          input.error || input.message,
        ]
          .filter(Boolean)
          .join(' ')
      }

      function onSuccess(success) {
        progress.succeed(buildMessage(success))
        progress.start()
      }

      function onFailure(failure) {
        progress.fail(buildMessage(failure))
        process.exit(1)
      }

      function onComment(msg) {
        progress.info(msg)
        progress.start()
      }

      return generator
        .runActions(answers, { onSuccess, onFailure, onComment })
        .then(() => progress.stop())
    })
    .catch(err => {
      logError(err.message)
      process.exit(1)
    })
}

function displayMenu() {
  if (!generators.length) {
    logError('Not available generators.\n')
    process.exit(1)
  }

  const generator = plop.setGenerator('choose', {
    prompts: [
      {
        type: 'list',
        name: 'generator',
        message: 'Select a generator',
        choices: generators.map(({ name }) => ({ name })),
      },
    ],
  })

  generator.runPrompts().then(answers => {
    runGenerator(answers.generator)
  })
}

module.exports = function generate(generatorName) {
  console.clear()

  if (!generatorName) {
    displayMenu()
    return
  }

  if (!generatorNames.includes(generatorName)) {
    logError(`Invalid generator: \`${generatorName}\`.`)
    displayMenu()
    return
  }

  runGenerator(generatorName)
}
