var https = require('https');

function getAndPrintHTML(options) {

var chunked = '';

https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    chunked += data;
  });

  response.on('end', function() {
    console.log(chunked);
  });

});

}

var options = {
  host:'sytantris.github.io',
  path: '/http-examples/step3.html'
};


console.log(getAndPrintHTML(options));

