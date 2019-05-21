const chalk = require('chalk')

const messageType = {
  LOG: 'LOG',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
}

const messageColor = {
  [messageType.INFO]: 'cyan',
  [messageType.SUCCESS]: 'green',
  [messageType.WARNING]: 'yellow',
  [messageType.ERROR]: 'red',
}

// Show message to the terminal.
function showMessage(
  message = '',
  type = messageType.LOG,
  isImportant = false
) {
  const isBold =
    isImportant || type === messageType.SUCCESS || type === messageType.ERROR

  const formattedMessage =
    type === messageType.LOG ? message : chalk[messageColor[type]](message)

  console.log(
    `\n${chalk.dim('[🐺  kw-scripts]')} ${
      isBold ? chalk.bold(formattedMessage) : formattedMessage
    }`
  )
}

exports.logMessage = (message, ...rest) =>
  showMessage(message, messageType.LOG, ...rest)

exports.logInfo = (message, ...rest) =>
  showMessage(message, messageType.INFO, ...rest)

exports.logSuccess = (message, ...rest) =>
  showMessage(message, messageType.SUCCESS, ...rest)

exports.logWarning = (message, ...rest) =>
  showMessage(message, messageType.WARNING, ...rest)

exports.logError = (message, ...rest) =>
  showMessage(message, messageType.ERROR, ...rest)
