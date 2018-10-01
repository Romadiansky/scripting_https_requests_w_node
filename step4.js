var https = require('https');

function getHTML(options, callback) {

var chunked = '';

https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    chunked += data;
  });

  response.on('end', function() {
    callback(chunked);
  });

});

};

function printHTML (html) {
  console.log(html);
}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(options, printHTML);

