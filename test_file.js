var getHTML = require('./http_functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

  function printHTML (html) {
  console.log(html);

  };


getHTML(options, printHTML);

