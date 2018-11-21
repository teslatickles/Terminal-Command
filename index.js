const terminalCommands = require("./terminal-commands");

if (process.argv[2] === "-ls") {
  terminalCommands.ls();
}

if (process.argv[2] === "-touch") {
  terminalCommands.touch(process.argv[3]);
}

if (process.argv[2] === "-mkdir") {
  terminalCommands.mkdir(process.argv[3]);
}
