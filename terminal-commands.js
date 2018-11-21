const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");
    console.log(filesToString);
  });
};

module.exports.touch = fileName => {
  if (!fs.existsSync(fileName)) {
    fs.writeFile(fileName, "", err => {
      if (err) throw err;
      console.log(`${fileName} has been created at ${process.cwd()}`);
    });
  } else {
    console.log(`File with name ${fileName} already exists!`);
    return;
  }
};

module.exports.mkdir = directory => {
  if (!fs.existsSync(directory)) {
    fs.mkdir(`./${directory}`, { recursive: true }, err => {
      if (err) throw err;
    });
  } else {
    fs.mkdir(`./${directory}(copy)`, { recursive: false }, err => {
      if (err) throw err;
      console.log(
        "Directory exists! Making duplicate with copy appended to filename!"
      );
    });
  }
};
