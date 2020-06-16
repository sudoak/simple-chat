const Configstore = require('configstore');
const packageJson = require('./package.json');
 
// Create a Configstore instance
const config = new Configstore(packageJson.name, {});

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const boxen = require('boxen');
const dayJs = require('dayjs');
const sha = require('sha1');
const inquirer = require('./lib/inquirer');
const {chat, join} = require('./util/constants');

clear();


console.log(
  boxen(chalk.yellowBright(
    figlet.textSync('Secret Chat', { horizontalLayout: 'full' })
  ), {padding: 1, borderColor: 'cyan'})
);

const run = async () => {
  const credentials = await inquirer.askUserNameAndChoiceCredentials();
  config.set('user.username', credentials.username);
  
  let roomCode = null;
  switch (credentials.myChoice) {
    case chat:
       roomInfo = await inquirer.codeService();
      break;
    case join:
       roomInfo = await inquirer.codeService();
      break;
  }
  console.log(sha(String(roomCode)));

  await inquirer.printToScreen(config.get('user.username'), `Started the Chat at ${dayJs().format()}`);
};

run();