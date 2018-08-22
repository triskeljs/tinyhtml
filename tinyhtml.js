
var parseHTML = require('@trisquel/parser'),
    stringifyNodes = require('@trisquel/stringify');

function tinyhtml (html, options) {
  return stringifyNodes( parseHTML(html, options), options );
}

tinyhtml.parse = parseHTML;
tinyhtml.stringify = stringifyNodes;

module.exports = tinyhtml;
