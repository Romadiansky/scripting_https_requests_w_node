
module.exports = function getHTML(options, callback) {

  var https = require('https');

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
}

// getHTML(options, printHTML);
