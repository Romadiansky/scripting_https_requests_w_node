var getHTML = require('./http_functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(options, printReverse);
