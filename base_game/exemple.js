/*const cliProgress = require('cli-progress');

// note: you have to install this dependency manually since it's not required by cli-progress
const colors = require('ansi-colors');

// create new progress bar
const b1 = new cliProgress.SingleBar({
    // format: 'CLI Progress |' + colors.cyan('{bar}') + '| {percentage}% || {value}/{total} Chunks || Speed: {speed}',
    format: colors.green('{bar}'),
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

// const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// initialize the bar - defining payload token "speed" with the default value "N/A"
b1.start(200, 0, {
    speed: "N/A"
});

// update values
b1.increment();
b1.update(40);

// stop the bar
b1.stop(); */

var figlet = require("figlet");

figlet.text(
  "Boo!",
  // {
  //   font: "colossal",
  //   horizontalLayout: "default",
  //   verticalLayout: "default",
  //   width: 80,
  //   whitespaceBreak: true,
  // },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});