const ora = require('ora');
const { loadMessage } = require('../util/constants');
const spinner = ora(loadMessage)

const spinner = {
  start: () => {
    spinner.start()
  },
  stop: () => {
    spinner.stop();
  }
}

module.exports = spinner;