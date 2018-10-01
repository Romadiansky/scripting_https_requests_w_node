var https = require('https');

function getAndPrintHTML() {

var requestOptions = {
  host:'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var buffered = '';

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    buffered += data;
  });

  response.on('end', function() {
    console.log(buffered);
  });

});

}

console.log(getAndPrintHTML());