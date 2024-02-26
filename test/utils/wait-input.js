const readline = require("readline");

exports.waitInput = function (question, defaultValue = "") {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(question, answer => {
      rl.close();
      resolve(answer || defaultValue);
    });
  });
};
