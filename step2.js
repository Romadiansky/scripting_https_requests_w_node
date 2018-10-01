var https = require('https');

function getAndPrintHTML() {

var requestOptions = {
  host:'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var chunked = '';

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    chunked += data;
  });

  response.on('end', function() {
    console.log(chunked);
  });

});

}

console.log(getAndPrintHTML());