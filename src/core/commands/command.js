const TeamNotConfiguredError = require('../client/team-not-configured-error');

class Command {

  configure(controller) {
    throw new Error('Method `configure` must be overridden!');
  }


  getCategory() {
    throw new Error('Method `getCategory` must be overridden!');
  }

  getUsage() {
    throw new Error('Method `getUsage` must be overridden!');
  }

  handleError(bot, userMessage, err, unknownErrorHandler) {
    if (err instanceof TeamNotConfiguredError) {
      bot.reply(userMessage, 'Logz.io integration is not configured!\n' +
        'Use `setup` command to configure the Logz.io integration and try again.');
    } else {
      unknownErrorHandler(err);
    }
  }

}

module.exports = Command;
