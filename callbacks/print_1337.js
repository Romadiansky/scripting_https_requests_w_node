var getHTML = require('./http_functions');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  var htmlArr = html.split("");
  for (var i = 0; i < htmlArr.length; i++) {
    if (htmlArr[i] === "a") {
      htmlArr[i] = 4;
    }
    if (htmlArr[i] === "e") {
      htmlArr[i] = 3;
    }
    if (htmlArr[i] === "l") {
      htmlArr[i] = 1;
    }
    if (htmlArr[i] === "o") {
      htmlArr[i] = 0;
    }
    if (htmlArr === "s") {
      htmlArr[i] = 5;
    }
    if (htmlArr[i] === "t") {
      htmlArr[i] = 7;
    }
    if (htmlArr[i] === "c" && htmlArr[i+1] === "k") {
      htmlArr[i][i+1] = "x";
    }

  }
  console.log(htmlArr.join(""));
}

getHTML(options, print1337);