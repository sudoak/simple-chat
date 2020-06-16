const inquirer = require('inquirer');

const {chat, join} = require('../util/constants');

module.exports = {
  askUserNameAndChoiceCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Enter your username:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      },
      {
        name:'myChoice',
        type: 'list',
        message: 'What you want to do?',
        choices: [chat, new inquirer.Separator(), join]
      }
    ];
    return inquirer.prompt(questions);
  },
  printToScreen: (user, msg="hurray") => {
    const ui = new inquirer.ui.BottomBar();
    ui.updateBottomBar(`${user}: ${msg}`);
  },
  startChatService: () => {
    const questions = [
      {
        name: 'chatCode',
        type: 'password',
        message: "Enter Secret Code To Create A Room",
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);

  },
  joinChatService: () => {
    const questions = [
      {
        name: 'chatCode',
        type: 'password',
        message: "Enter Secret Code To Join A Room",
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  codeService: () => {
    const questions = [
      {
        name: 'chatCode',
        type: 'password',
        message: "Enter Secret Code",
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter your username or e-mail address.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};